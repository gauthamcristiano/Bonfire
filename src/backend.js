import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithRedirect,onAuthStateChanged,signOut} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,deleteDoc,updateDoc,addDoc,collection,query,where,orderBy,limit,limitToLast,onSnapshot,getDocs,runTransaction,writeBatch} from 'firebase/firestore';

const cfg=window.BONFIRE_FIREBASE;
const BF={enabled:!!(cfg&&cfg.apiKey)};
window.BF=BF;

if(BF.enabled){
  const app=initializeApp(cfg),auth=getAuth(app),db=getFirestore(app);
  let me=null,profile=null;
  const chatId=(a,b)=>[a,b].sort().join('_');
  const genId=()=>{const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const s=n=>Array.from({length:n},()=>c[Math.floor(Math.random()*c.length)]).join('');return 'BNF-'+s(4)+'-'+s(4)};

  BF.onAuth=cb=>onAuthStateChanged(auth,u=>{me=u;if(!u)profile=null;cb(u)});
  BF.signIn=async()=>{
    const p=new GoogleAuthProvider();
    try{await signInWithPopup(auth,p)}
    catch(e){
      if(e&&(e.code==='auth/popup-blocked'||e.code==='auth/operation-not-supported-in-this-environment'))return signInWithRedirect(auth,p);
      throw e;
    }
  };
  BF.signOut=()=>signOut(auth);

  BF.loadProfile=async()=>{
    const ref=doc(db,'users',me.uid),snap=await getDoc(ref);
    if(snap.exists()){profile=snap.data();return profile}
    const name=(me.displayName||'Friend').slice(0,40);
    for(let i=0;i<6;i++){
      const id=genId();
      const data={name,nameLower:name.toLowerCase(),bondId:id,vis:'nobody',allowed:[]};
      try{
        await runTransaction(db,async tx=>{
          const bref=doc(db,'bondIds',id);
          if((await tx.get(bref)).exists())throw new Error('taken');
          tx.set(bref,{uid:me.uid,name});
          tx.set(ref,data);
        });
        profile=data;return profile;
      }catch(e){if(e.message!=='taken')throw e}
    }
    throw new Error('Could not create an ID');
  };

  BF.setVisibility=async(vis,allowedUids,friendUids)=>{
    const b=writeBatch(db);
    b.update(doc(db,'users',me.uid),{vis,allowed:allowedUids});
    const dref=doc(db,'directory',me.uid);
    if(vis==='everyone')b.set(dref,{name:profile.name,nameLower:profile.nameLower,bondId:profile.bondId});else b.delete(dref);
    friendUids.forEach(f=>{
      const r=doc(db,'visibleTo',f,'by',me.uid);
      if(vis==='selected'&&allowedUids.indexOf(f)>-1)b.set(r,{name:profile.name,bondId:profile.bondId});else b.delete(r);
    });
    await b.commit();
    profile.vis=vis;profile.allowed=allowedUids;
  };

  BF.lookup=async id=>{const s=await getDoc(doc(db,'bondIds',String(id).toUpperCase()));return s.exists()?s.data():null};

  BF.search=async q=>{
    q=String(q||'').trim().toLowerCase();
    if(q.length<2)return [];
    const out=[];
    const s=await getDocs(query(collection(db,'directory'),where('nameLower','>=',q),where('nameLower','<',q+''),limit(10)));
    s.forEach(d=>{if(d.id!==me.uid)out.push({uid:d.id,...d.data()})});
    const v=await getDocs(collection(db,'visibleTo',me.uid,'by'));
    v.forEach(d=>{const x=d.data();if(String(x.name).toLowerCase().indexOf(q)===0&&!out.some(o=>o.uid===d.id))out.push({uid:d.id,...x})});
    return out;
  };

  BF.sendPigeon=async(bondId,note)=>{
    const t=await BF.lookup(bondId);
    if(!t)throw {code:'notfound'};
    if(t.uid===me.uid)throw {code:'self'};
    const ex=await getDoc(doc(db,'chats',chatId(me.uid,t.uid)));
    if(ex.exists())throw {code:'already'};
    await setDoc(doc(db,'inbox',t.uid,'requests',me.uid),{fromName:profile.name,fromBondId:profile.bondId,note:String(note||'').slice(0,240),at:Date.now()});
    return t;
  };

  BF.onInbox=cb=>onSnapshot(collection(db,'inbox',me.uid,'requests'),s=>cb(s.docs.map(d=>({uid:d.id,...d.data()}))),()=>{});
  BF.acceptRequest=async from=>{
    const rref=doc(db,'inbox',me.uid,'requests',from),r=await getDoc(rref);
    if(!r.exists())throw new Error('gone');
    const d=r.data(),members=[me.uid,from].sort();
    const b=writeBatch(db);
    b.set(doc(db,'chats',chatId(me.uid,from)),{members,names:{[me.uid]:profile.name,[from]:d.fromName},at:Date.now(),last:null,opening:{from,text:d.note||''}});
    b.delete(rref);
    await b.commit();
  };
  BF.declineRequest=from=>deleteDoc(doc(db,'inbox',me.uid,'requests',from));

  BF.onChats=cb=>onSnapshot(query(collection(db,'chats'),where('members','array-contains',me.uid)),s=>cb(s.docs.map(d=>({id:d.id,...d.data()}))),()=>{});
  BF.onMessages=(cid,cb)=>onSnapshot(query(collection(db,'chats',cid,'messages'),orderBy('at'),limitToLast(100)),s=>cb(s.docs.map(d=>({id:d.id,...d.data()}))),()=>{});
  BF.sendMessage=async(cid,m)=>{
    const at=Date.now(),text=String(m.text||'').slice(0,2000),kind=m.kind==='letter'?'letter':'text';
    await addDoc(collection(db,'chats',cid,'messages'),{from:me.uid,text,kind,at});
    await updateDoc(doc(db,'chats',cid),{last:{text:text.slice(0,80),at,from:me.uid}});
  };
  BF.saveFeedback=data=>setDoc(doc(db,'feedback',me.uid),{...data,uid:me.uid,at:Date.now()});
}
