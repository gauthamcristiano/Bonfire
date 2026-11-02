(()=>{var ql=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bp=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let o=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=o>>2,y=(o&3)<<4|c>>4,I=(c&15)<<2|d>>6,S=d&63;l||(S=64,a||(I=64)),r.push(t[p],t[y],t[I],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ql(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let y=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||y==null)throw new So;let I=o<<2|c>>4;if(r.push(I),d!==64){let S=c<<4&240|d>>2;if(r.push(S),y!==64){let C=d<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},So=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},qp=function(n){let e=ql(n);return jl.encodeByteArray(e,!0)},sr=function(n){return qp(n).replace(/\./g,"")},Po=function(n){try{return jl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function jp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var zp=()=>jp().__FIREBASE_DEFAULTS__,Gp=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Kp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Po(n[1]);return e&&JSON.parse(e)},vi=()=>{try{return zp()||Gp()||Kp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Co=n=>{var e,t;return(t=(e=vi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zl=n=>{let e=Co(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Do=()=>{var n;return(n=vi())===null||n===void 0?void 0:n.config},No=n=>{var e;return(e=vi())===null||e===void 0?void 0:e[`_${n}`]};var yi=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Gl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sr(JSON.stringify(t)),sr(JSON.stringify(a)),""].join(".")}function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function $p(){var n;let e=(n=vi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $l(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wl(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ql(){let n=ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jl(){return!$p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ko(){try{return typeof indexedDB=="object"}catch{return!1}}function Yl(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}var Wp="FirebaseError",De=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wp,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tt.prototype.create)}},tt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Hp(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new De(i,c,r)}};function Hp(n,e){return n.replace(Qp,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Qp=/\{\$([^}]+)}/g;function Xl(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ot(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let o=n[i],a=e[i];if(Bl(o)&&Bl(a)){if(!Ot(o,a))return!1}else if(o!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Bl(n){return n!==null&&typeof n=="object"}function an(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cn(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function un(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Zl(n,e){let t=new Ro(n,e);return t.subscribe.bind(t)}var Ro=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=bo),i.error===void 0&&(i.error=bo),i.complete===void 0&&(i.complete=bo);let o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Jp(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bo(){}var Uv=4*60*60*1e3;function ee(n){return n&&n._delegate?n._delegate:n}var Ve=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var xt="[DEFAULT]";var Oo=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new yi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xp(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[o,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);let a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Yp(n){return n===xt?void 0:n}function Xp(n){return n.instantiationMode==="EAGER"}var Ii=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Oo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Zp=[],q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));var em={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},tm=q.INFO,nm={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},rm=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=nm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},pt=class{constructor(e){this.name=e,this._logLevel=tm,this._logHandler=rm,this._userLogHandler=null,Zp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?em[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}};var im=(n,e)=>e.some(t=>n instanceof t),eh,th;function sm(){return eh||(eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function om(){return th||(th=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var nh=new WeakMap,Vo=new WeakMap,rh=new WeakMap,xo=new WeakMap,Mo=new WeakMap;function am(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ge(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&nh.set(t,n)}).catch(()=>{}),Mo.set(e,n),e}function cm(n){if(Vo.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Vo.set(n,e)}var Lo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ih(n){Lo=n(Lo)}function um(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(wi(this),e,...t);return rh.set(r,e.sort?e.sort():[e]),Ge(r)}:om().includes(n)?function(...e){return n.apply(wi(this),e),Ge(nh.get(this))}:function(...e){return Ge(n.apply(wi(this),e))}}function lm(n){return typeof n=="function"?um(n):(n instanceof IDBTransaction&&cm(n),im(n,sm())?new Proxy(n,Lo):n)}function Ge(n){if(n instanceof IDBRequest)return am(n);if(xo.has(n))return xo.get(n);let e=lm(n);return e!==n&&(xo.set(n,e),Mo.set(e,n)),e}var wi=n=>Mo.get(n);function oh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){let a=indexedDB.open(n,e),c=Ge(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ge(a.result),l.oldVersion,l.newVersion,Ge(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}var hm=["get","getKey","getAll","getAllKeys","count"],dm=["put","add","delete","clear"],Fo=new Map;function sh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fo.get(e))return Fo.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=dm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hm.includes(t)))return;let o=async function(a,...c){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&l.done]))[0]};return Fo.set(e,o),o}ih(n=>({...n,get:(e,t,r)=>sh(e,t)||n.get(e,t,r),has:(e,t)=>!!sh(e,t)||n.has(e,t)}));var Bo=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fm(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function fm(n){let e=n.getComponent();return e?.type==="VERSION"}var qo="@firebase/app",ah="0.10.13";var nt=new pt("@firebase/app"),pm="@firebase/app-compat",mm="@firebase/analytics-compat",gm="@firebase/analytics",_m="@firebase/app-check-compat",ym="@firebase/app-check",vm="@firebase/auth",Im="@firebase/auth-compat",wm="@firebase/database",Em="@firebase/data-connect",Tm="@firebase/database-compat",Am="@firebase/functions",bm="@firebase/functions-compat",Sm="@firebase/installations",Rm="@firebase/installations-compat",Pm="@firebase/messaging",Cm="@firebase/messaging-compat",Dm="@firebase/performance",Nm="@firebase/performance-compat",km="@firebase/remote-config",Om="@firebase/remote-config-compat",xm="@firebase/storage",Vm="@firebase/storage-compat",Lm="@firebase/firestore",Mm="@firebase/vertexai-preview",Fm="@firebase/firestore-compat",Um="firebase",Bm="10.14.1";var jo="[DEFAULT]",qm={[qo]:"fire-core",[pm]:"fire-core-compat",[gm]:"fire-analytics",[mm]:"fire-analytics-compat",[ym]:"fire-app-check",[_m]:"fire-app-check-compat",[vm]:"fire-auth",[Im]:"fire-auth-compat",[wm]:"fire-rtdb",[Em]:"fire-data-connect",[Tm]:"fire-rtdb-compat",[Am]:"fire-fn",[bm]:"fire-fn-compat",[Sm]:"fire-iid",[Rm]:"fire-iid-compat",[Pm]:"fire-fcm",[Cm]:"fire-fcm-compat",[Dm]:"fire-perf",[Nm]:"fire-perf-compat",[km]:"fire-rc",[Om]:"fire-rc-compat",[xm]:"fire-gcs",[Vm]:"fire-gcs-compat",[Lm]:"fire-fst",[Fm]:"fire-fst-compat",[Mm]:"fire-vertex","fire-js":"fire-js",[Um]:"fire-js-all"};var Ei=new Map,jm=new Map,zo=new Map;function ch(n,e){try{n.container.addComponent(e)}catch(t){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gt(n){let e=n.name;if(zo.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,n);for(let t of Ei.values())ch(t,n);for(let t of jm.values())ch(t,n);return!0}function ar(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n.settings!==void 0}var zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new tt("app","Firebase",zm);var Go=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}};var _t=Bm;function Wo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=Do()),!t)throw mt.create("no-options");let o=Ei.get(i);if(o){if(Ot(t,o.options)&&Ot(r,o.config))return o;throw mt.create("duplicate-app",{appName:i})}let a=new Ii(i);for(let l of zo.values())a.addComponent(l);let c=new Go(t,r,a);return Ei.set(i,c),c}function Ti(n=jo){let e=Ei.get(n);if(!e&&n===jo&&Do())return Wo();if(!e)throw mt.create("no-app",{appName:n});return e}function Be(n,e,t){var r;let i=(r=qm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){let c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(c.join(" "));return}gt(new Ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Gm="firebase-heartbeat-database",Km=1,or="firebase-heartbeat-store",Uo=null;function dh(){return Uo||(Uo=oh(Gm,Km,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(or)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),Uo}async function $m(n){try{let t=(await dh()).transaction(or),r=await t.objectStore(or).get(fh(n));return await t.done,r}catch(e){if(e instanceof De)nt.warn(e.message);else{let t=mt.create("idb-get",{originalErrorMessage:e?.message});nt.warn(t.message)}}}async function uh(n,e){try{let r=(await dh()).transaction(or,"readwrite");await r.objectStore(or).put(e,fh(n)),await r.done}catch(t){if(t instanceof De)nt.warn(t.message);else{let r=mt.create("idb-set",{originalErrorMessage:t?.message});nt.warn(r.message)}}}function fh(n){return`${n.name}!${n.options.appId}`}var Wm=1024,Hm=30*24*60*60*1e3,Ko=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new $o(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let c=new Date(a.date).valueOf();return Date.now()-c<=Hm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=lh(),{heartbeatsToSend:r,unsentEntries:i}=Qm(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return nt.warn(t),""}}};function lh(){return new Date().toISOString().substring(0,10)}function Qm(n,e=Wm){let t=[],r=n.slice();for(let i of n){let o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),hh(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),hh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var $o=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ko()?Yl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await $m(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function hh(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}function Jm(n){gt(new Ve("platform-logger",e=>new Bo(e),"PRIVATE")),gt(new Ve("heartbeat",e=>new Ko(e),"PRIVATE")),Be(qo,ah,n),Be(qo,ah,"esm2017"),Be("fire-js","")}Jm("");var Ym="firebase",Xm="10.14.1";Be(Ym,Xm,"app");function Ai(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var kh=Nh,Oh=new tt("auth","Firebase",Nh());var Di=new pt("@firebase/auth");function Zm(n,...e){Di.logLevel<=q.WARN&&Di.warn(`Auth (${_t}): ${n}`,...e)}function Si(n,...e){Di.logLevel<=q.ERROR&&Di.error(`Auth (${_t}): ${n}`,...e)}function Le(n,...e){throw pa(n,...e)}function je(n,...e){return pa(n,...e)}function fa(n,e,t){let r=Object.assign(Object.assign({},kh()),{[e]:t});return new tt("auth","Firebase",r).create(e,{appName:n.name})}function vt(n){return fa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xh(n,e,t){let r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Le(n,"argument-error"),fa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pa(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Oh.create(n,...e)}function V(n,e,...t){if(!n)throw pa(e,...t)}function Ke(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Si(e),new Error(e)}function it(n,e){n||Ke(e)}function Jo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function eg(){return ph()==="http:"||ph()==="https:"}function ph(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eg()||Wl()||"connection"in navigator)?navigator.onLine:!0}function ng(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Vt=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=Kl()||Hl()}get(){return tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function ma(n,e){it(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ni=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var rg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var ig=new Vt(3e4,6e4);function ce(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ve(n,e,t,r,i={}){return Vh(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});let c=an(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},o);return $l()||(d.referrerPolicy="no-referrer"),Ni.fetch()(Lh(n,n.config.apiHost,t,c),d)})}async function Vh(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},rg),e);try{let i=new Yo(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw cr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let c=o.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw cr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw cr(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fa(n,p,d);Le(n,p)}}catch(i){if(i instanceof De)throw i;Le(n,"network-request-failed",{message:String(i)})}}async function qt(n,e,t,r,i={}){let o=await ve(n,e,t,r,i);return"mfaPendingCredential"in o&&Le(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Lh(n,e,t,r){let i=`${e}${t}?${r}`;return n.config.emulator?ma(n.config,i):`${n.config.apiScheme}://${i}`}function sg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Yo=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function cr(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=je(n,e,r);return i.customData._tokenResponse=t,i}function mh(n){return n!==void 0&&n.enterprise!==void 0}var Xo=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function og(n,e){return ve(n,"GET","/v2/recaptchaConfig",ce(n,e))}async function ag(n,e){return ve(n,"POST","/v1/accounts:delete",e)}async function Mh(n,e){return ve(n,"POST","/v1/accounts:lookup",e)}function ur(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(n,e=!1){let t=ee(n),r=await t.getIdToken(e),i=ga(r);V(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:r,authTime:ur(Ho(i.auth_time)),issuedAtTime:ur(Ho(i.iat)),expirationTime:ur(Ho(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Ho(n){return Number(n)*1e3}function ga(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Si("JWT malformed, contained fewer than 3 sections"),null;try{let i=Po(t);return i?JSON.parse(i):(Si("Failed to decode base64 JWT payload"),null)}catch(i){return Si("Caught error parsing JWT payload as JSON",i?.toString()),null}}function gh(n){let e=ga(n);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof De&&cg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Zo=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var dr=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ki(n){var e;let t=n.auth,r=await n.getIdToken(),i=await hr(n,Mh(t,{idToken:r}));V(i?.users.length,t,"internal-error");let o=i.users[0];n._notifyReloadListener(o);let a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Bh(o.providerUserInfo):[],c=ug(n.providerData,a),l=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!c?.length,p=l?d:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new dr(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function Uh(n){let e=ee(n);await ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ug(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bh(n){return n.map(e=>{var{providerId:t}=e,r=Ai(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function lg(n,e){let t=await Vh(n,{},async()=>{let r=an({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Lh(n,i,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ni.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hg(n,e){return ve(n,"POST","/v2/accounts:revokeToken",ce(n,e))}var lr=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){V(e.length!==0,"internal-error");let t=gh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:o}=await lg(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new n;return r&&(V(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Ke("not implemented")}};function yt(n,e){V(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var hn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Ai(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new dr(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){let t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return V(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fh(this,e)}reload(){return Uh(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ki(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(vt(this.auth));let e=await this.getIdToken();return await hr(this,ag(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,c,l,d,p;let y=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,B=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:Y,isAnonymous:Ae,providerData:Q,stsTokenManager:w}=t;V(G&&w,e,"internal-error");let m=lr.fromJSON(this.name,w);V(typeof G=="string",e,"internal-error"),yt(y,e.name),yt(I,e.name),V(typeof Y=="boolean",e,"internal-error"),V(typeof Ae=="boolean",e,"internal-error"),yt(S,e.name),yt(C,e.name),yt(O,e.name),yt(N,e.name),yt(B,e.name),yt(z,e.name);let _=new n({uid:G,auth:e,email:I,emailVerified:Y,displayName:y,isAnonymous:Ae,photoURL:C,phoneNumber:S,tenantId:O,stsTokenManager:m,createdAt:B,lastLoginAt:z});return Q&&Array.isArray(Q)&&(_.providerData=Q.map(v=>Object.assign({},v))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){let i=new lr;i.updateFromServerResponse(t);let o=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ki(o),o}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];V(i.localId!==void 0,"internal-error");let o=i.providerUserInfo!==void 0?Bh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,c=new lr;c.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new dr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(l,d),l}};var _h=new Map;function rt(n){it(n instanceof Function,"Expected a class definition");let e=_h.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_h.set(n,e),e)}var Oi=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Oi.type="NONE";var ea=Oi;function Ri(n,e,t){return`firebase:${n}:${e}:${t}`}var xi=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:o}=this.auth;this.fullUserKey=Ri(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ri("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(rt(ea),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),o=i[0]||rt(ea),a=Ri(r,e.config.apiKey,e.name),c=null;for(let d of t)try{let p=await d._get(a);if(p){let y=hn._fromJSON(e,p);d!==o&&(c=y),o=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new n(o,e,r):(o=l[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new n(o,e,r))}};function yh(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($h(e))return"Blackberry";if(Wh(e))return"Webos";if(jh(e))return"Safari";if((e.includes("chrome/")||zh(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function qh(n=ae()){return/firefox\//i.test(n)}function jh(n=ae()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zh(n=ae()){return/crios\//i.test(n)}function Gh(n=ae()){return/iemobile/i.test(n)}function Kh(n=ae()){return/android/i.test(n)}function $h(n=ae()){return/blackberry/i.test(n)}function Wh(n=ae()){return/webos/i.test(n)}function _a(n=ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dg(n=ae()){var e;return _a(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fg(){return Ql()&&document.documentMode===10}function Hh(n=ae()){return _a(n)||Kh(n)||Wh(n)||$h(n)||/windows phone/i.test(n)||Gh(n)}function Qh(n,e=[]){let t;switch(n){case"Browser":t=yh(ae());break;case"Worker":t=`${yh(ae())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_t}/${r}`}var ta=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=o=>new Promise((a,c)=>{try{let l=e(o);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function pg(n,e={}){return ve(n,"GET","/v2/passwordPolicy",ce(n,e))}var mg=6,na=class{constructor(e){var t,r,i,o;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:mg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}};var ra=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vi(this),this.idTokenSubscription=new Vi(this),this.beforeStateQueue=new ta(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Mh(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qe(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ki(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ng()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(vt(this));let t=e?ee(e):null;return t&&V(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await pg(this),t=new na(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&rt(e)||this._popupRedirectResolver;V(t,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let o=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Zm(`Error while retrieving App Check token: ${t.error}`),t?.token}};function jt(n){return ee(n)}var Vi=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zl(t=>this.observer=t)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gg(n){Xi=n}function Jh(n){return Xi.loadJS(n)}function _g(){return Xi.recaptchaEnterpriseScript}function yg(){return Xi.gapiScript}function Yh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var vg="recaptcha-enterprise",Ig="NO_RECAPTCHA",ia=class{constructor(e){this.type=vg,this.auth=jt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{og(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let d=new Xo(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function i(o,a,c){let l=window.grecaptcha;mh(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ig)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(c=>{if(!t&&mh(window.grecaptcha))i(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_g();l.length!==0&&(l+=c),Jh(l).then(()=>{i(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}};async function vh(n,e,t,r=!1){let i=new ia(n),o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}let a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ih(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let o=await vh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let a=await vh(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}function Xh(n,e){let t=ar(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),o=t.getOptions();if(Ot(o,e??{}))return i;Le(i,"already-initialized")}return t.initialize({options:e})}function wg(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Zh(n,e,t){let r=jt(n);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,o=ed(e),{host:a,port:c}=Eg(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Tg()}function ed(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Eg(n){let e=ed(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let o=i[1];return{host:o,port:wh(r.substr(o.length+1))}}else{let[o,a]=r.split(":");return{host:o,port:wh(a)}}}function wh(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Tg(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Lt=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}};async function Ag(n,e){return ve(n,"POST","/v1/accounts:signUp",e)}async function bg(n,e){return qt(n,"POST","/v1/accounts:signInWithPassword",ce(n,e))}async function Sg(n,e){return qt(n,"POST","/v1/accounts:signInWithEmailLink",ce(n,e))}async function Rg(n,e){return qt(n,"POST","/v1/accounts:signInWithEmailLink",ce(n,e))}var fr=class n extends Lt{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ih(e,t,"signInWithPassword",bg);case"emailLink":return Sg(e,{email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ih(e,r,"signUpPassword",Ag);case"emailLink":return Rg(e,{idToken:t,email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function ln(n,e){return qt(n,"POST","/v1/accounts:signInWithIdp",ce(n,e))}var Pg="http://localhost",Mt=class n extends Lt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Ai(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return ln(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ln(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ln(e,t)}buildRequest(){let e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=an(t)}return e}};async function Cg(n,e){return ve(n,"POST","/v1/accounts:sendVerificationCode",ce(n,e))}async function Dg(n,e){return qt(n,"POST","/v1/accounts:signInWithPhoneNumber",ce(n,e))}async function Ng(n,e){let t=await qt(n,"POST","/v1/accounts:signInWithPhoneNumber",ce(n,e));if(t.temporaryProof)throw cr(n,"account-exists-with-different-credential",t);return t}var kg={USER_NOT_FOUND:"user-not-found"};async function Og(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return qt(n,"POST","/v1/accounts:signInWithPhoneNumber",ce(n,t),kg)}var pr=class n extends Lt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Dg(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ng(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Og(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!t&&!i&&!o?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o})}};function xg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vg(n){let e=cn(un(n)).link,t=e?cn(un(e)).deep_link_id:null,r=cn(un(n)).deep_link_id;return(r?cn(un(r)).link:null)||r||t||e||n}var Li=class n{constructor(e){var t,r,i,o,a,c;let l=cn(un(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=xg((i=l.mode)!==null&&i!==void 0?i:null);V(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Vg(e);try{return new n(t)}catch{return null}}};var dn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return fr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Li.parseLink(t);return V(r,"argument-error"),fr._fromEmailAndCode(e,r.code,r.tenantId)}};dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var fn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ft=class extends fn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var mr=class n extends Ft{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";var Ut=class n extends Ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";var gr=class n extends Ft{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";var _r=class n extends Ft{constructor(){super("twitter.com")}static credential(e,t){return Mt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";var yr=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let o=await hn._fromIdTokenResponse(e,r,i),a=Eh(r);return new n({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Eh(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Eh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}var sa=class n extends De{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function td(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(n,o,e,r):o})}async function Lg(n,e,t=!1){let r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yr._forOperation(n,"link",r)}async function Mg(n,e,t=!1){let{auth:r}=n;if(qe(r.app))return Promise.reject(vt(r));let i="reauthenticate";try{let o=await hr(n,td(r,i,e,n),t);V(o.idToken,r,"internal-error");let a=ga(o.idToken);V(a,r,"internal-error");let{sub:c}=a;return V(n.uid===c,r,"user-mismatch"),yr._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Le(r,"user-mismatch"),o}}async function Fg(n,e,t=!1){if(qe(n.app))return Promise.reject(vt(n));let r="signIn",i=await td(n,r,e),o=await yr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function nd(n,e,t,r){return ee(n).onIdTokenChanged(e,t,r)}function rd(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function ya(n,e,t,r){return ee(n).onAuthStateChanged(e,t,r)}function va(n){return ee(n).signOut()}function Ug(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:start",ce(n,e))}function Bg(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",ce(n,e))}function qg(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:start",ce(n,e))}function jg(n,e){return ve(n,"POST","/v2/accounts/mfaEnrollment:finalize",ce(n,e))}var Mi="__sak";var Fi=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var zg=1e3,Gg=10,Ui=class extends Fi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);fg()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gg):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ui.type="LOCAL";var id=Ui;var Bi=class extends Fi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Bi.type="SESSION";var Ia=Bi;function Kg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var qi=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let c=Array.from(a).map(async d=>d(t.origin,o)),l=await Kg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};qi.receivers=[];function wa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var oa=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,l)=>{let d=wa("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){let I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(I.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function $e(){return window}function $g(n){$e().location.href=n}function sd(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Wg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hg(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qg(){return sd()?self:null}var od="firebaseLocalStorageDb",Jg=1,ji="firebaseLocalStorage",ad="fbase_key",Bt=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Zi(n,e){return n.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function Yg(){let n=indexedDB.deleteDatabase(od);return new Bt(n).toPromise()}function aa(){let n=indexedDB.open(od,Jg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(ji,{keyPath:ad})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(ji)?e(r):(r.close(),await Yg(),e(await aa()))})})}async function Th(n,e,t){let r=Zi(n,!0).put({[ad]:e,value:t});return new Bt(r).toPromise()}async function Xg(n,e){let t=Zi(n,!1).get(e),r=await new Bt(t).toPromise();return r===void 0?null:r.value}function Ah(n,e){let t=Zi(n,!0).delete(e);return new Bt(t).toPromise()}var Zg=800,e_=3,zi=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await aa(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>e_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qi._getInstance(Qg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Wg(),!this.activeServiceWorker)return;this.sender=new oa(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await aa();return await Th(e,Mi,"1"),await Ah(e,Mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Th(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Xg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ah(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let o=Zi(i,!1).getAll();return new Bt(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};zi.type="LOCAL";var cd=zi;function t_(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:start",ce(n,e))}function n_(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:finalize",ce(n,e))}function r_(n,e){return ve(n,"POST","/v2/accounts/mfaSignIn:finalize",ce(n,e))}var fI=Yh("rcb"),pI=new Vt(3e4,6e4);var i_="recaptcha";async function s_(n,e,t){var r;let i=await t.verify();try{V(typeof i=="string",n,"argument-error"),V(t.type===i_,n,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){let a=o.session;if("phoneNumber"in o)return V(a.type==="enroll",n,"internal-error"),(await Ug(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{V(a.type==="signin",n,"internal-error");let c=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return V(c,n,"missing-multi-factor-info"),(await t_(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:a}=await Cg(n,{phoneNumber:o.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}var vr=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=jt(e)}verifyPhoneNumber(e,t){return s_(this.auth,e,ee(t))}static credential(e,t){return pr._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?pr._fromTokenResponse(t,r):null}};vr.PROVIDER_ID="phone";vr.PHONE_SIGN_IN_METHOD="phone";function Ea(n,e){return e?rt(e):(V(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Ir=class extends Lt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function o_(n){return Fg(n.auth,new Ir(n),n.bypassAuthState)}function a_(n){let{auth:e,user:t}=n;return V(t,e,"internal-error"),Mg(t,new Ir(n),n.bypassAuthState)}async function c_(n){let{auth:e,user:t}=n;return V(t,e,"internal-error"),Lg(t,new Ir(n),n.bypassAuthState)}var Gi=class{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o_;case"linkViaPopup":case"linkViaRedirect":return c_;case"reauthViaPopup":case"reauthViaRedirect":return a_;default:Le(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var u_=new Vt(2e3,1e4);async function Ta(n,e,t){if(qe(n.app))return Promise.reject(je(n,"operation-not-supported-in-this-environment"));let r=jt(n);xh(n,e,fn);let i=Ea(r,t);return new Ki(r,"signInViaPopup",e,i).executeNotNull()}var Ki=class n extends Gi{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");let e=wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u_.get())};e()}};Ki.currentPopupAction=null;var l_="pendingRedirect",Pi=new Map,ca=class extends Gi{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{let r=await h_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function h_(n,e){let t=ld(e),r=ud(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}async function d_(n,e){return ud(n)._set(ld(e),"true")}function f_(n,e){Pi.set(n._key(),e)}function ud(n){return rt(n._redirectPersistence)}function ld(n){return Ri(l_,n.config.apiKey,n.name)}function Aa(n,e,t){return p_(n,e,t)}async function p_(n,e,t){if(qe(n.app))return Promise.reject(vt(n));let r=jt(n);xh(n,e,fn),await r._initializationPromise;let i=Ea(r,t);return await d_(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function m_(n,e,t=!1){if(qe(n.app))return Promise.reject(vt(n));let r=jt(n),i=Ea(r,e),a=await new ca(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var g_=10*60*1e3,ua=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!__(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!hd(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g_&&this.cachedEventUids.clear(),this.cachedEventUids.has(bh(e))}saveEventToCache(e){this.cachedEventUids.add(bh(e)),this.lastProcessedEventTime=Date.now()}};function bh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function __(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hd(n);default:return!1}}async function y_(n,e={}){return ve(n,"GET","/v1/projects",e)}var v_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I_=/^https?/;async function w_(n){if(n.config.emulator)return;let{authorizedDomains:e}=await y_(n);for(let t of e)try{if(E_(t))return}catch{}Le(n,"unauthorized-domain")}function E_(n){let e=Jo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!I_.test(t))return!1;if(v_.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var T_=new Vt(3e4,6e4);function Sh(){let n=$e().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function A_(n){return new Promise((e,t)=>{var r,i,o;function a(){Sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sh(),t(je(n,"network-request-failed"))},timeout:T_.get()})}if(!((i=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=$e().gapi)===null||o===void 0)&&o.load)a();else{let c=Yh("iframefcb");return $e()[c]=()=>{gapi.load?a():t(je(n,"network-request-failed"))},Jh(`${yg()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ci=null,e})}var Ci=null;function b_(n){return Ci=Ci||A_(n),Ci}var S_=new Vt(5e3,15e3),R_="__/auth/iframe",P_="emulator/auth/iframe",C_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N_(n){let e=n.config;V(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?ma(e,P_):`https://${n.config.authDomain}/${R_}`,r={apiKey:e.apiKey,appName:n.name,v:_t},i=D_.get(n.config.apiHost);i&&(r.eid=i);let o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${an(r).slice(1)}`}async function k_(n){let e=await b_(n),t=$e().gapi;return V(t,n,"internal-error"),e.open({where:document.body,url:N_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});let a=je(n,"network-request-failed"),c=$e().setTimeout(()=>{o(a)},S_.get());function l(){$e().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{o(a)})}))}var O_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x_=500,V_=600,L_="_blank",M_="http://localhost",$i=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function F_(n,e,t,r=x_,i=V_){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",l=Object.assign(Object.assign({},O_),{width:r.toString(),height:i.toString(),top:o,left:a}),d=ae().toLowerCase();t&&(c=zh(d)?L_:t),qh(d)&&(e=e||M_,l.scrollbars="yes");let p=Object.entries(l).reduce((I,[S,C])=>`${I}${S}=${C},`,"");if(dg(d)&&c!=="_self")return U_(e||"",c),new $i(null);let y=window.open(e||"",c,p);V(y,n,"popup-blocked");try{y.focus()}catch{}return new $i(y)}function U_(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var B_="__/auth/handler",q_="emulator/auth/handler",j_=encodeURIComponent("fac");async function Rh(n,e,t,r,i,o){V(n.config.authDomain,n,"auth-domain-config-required"),V(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_t,eventId:i};if(e instanceof fn){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Xl(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,y]of Object.entries(o||{}))a[p]=y}if(e instanceof Ft){let p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let p of Object.keys(c))c[p]===void 0&&delete c[p];let l=await n._getAppCheckToken(),d=l?`#${j_}=${encodeURIComponent(l)}`:"";return`${z_(n)}?${an(c).slice(1)}${d}`}function z_({config:n}){return n.emulator?ma(n,q_):`https://${n.authDomain}/${B_}`}var Qo="webStorageSupport",la=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ia,this._completeRedirectFn=m_,this._overrideRedirectResult=f_}async _openPopup(e,t,r,i){var o;it((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");let a=await Rh(e,t,r,Jo(),i);return F_(e,a,wa())}async _openRedirect(e,t,r,i){await this._originValidation(e);let o=await Rh(e,t,r,Jo(),i);return $g(o),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(it(o,"If manager is not set, promise should be"),o)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await k_(e),r=new ua(e);return t.register("authEvent",i=>(V(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qo,{type:Qo},i=>{var o;let a=(o=i?.[0])===null||o===void 0?void 0:o[Qo];a!==void 0&&t(!!a),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=w_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hh()||jh()||_a()}},dd=la,Wi=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ke("unexpected MultiFactorSessionType")}}},ha=class n extends Wi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Bg(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return n_(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Hi=class{constructor(){}static assertion(e){return ha._fromCredential(e)}};Hi.FACTOR_ID="phone";var Qi=class{static assertionForEnrollment(e,t){return Ji._fromSecret(e,t)}static assertionForSignIn(e,t){return Ji._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;V(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await qg(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Yi._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Qi.FACTOR_ID="totp";var Ji=class n extends Wi{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return V(typeof this.secret<"u",e,"argument-error"),jg(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){V(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return r_(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Yi=class n{constructor(e,t,r,i,o,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(bi(e)||bi(t))&&(i=!0),i&&(bi(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),bi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function bi(n){return typeof n>"u"||n?.length===0}var Ph="@firebase/auth",Ch="1.7.9";var da=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function G_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K_(n){gt(new Ve("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(n)},d=new ra(r,i,o,l);return wg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gt(new Ve("auth-internal",e=>{let t=jt(e.getProvider("auth").getImmediate());return(r=>new da(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Ph,Ch,G_(n)),Be(Ph,Ch,"esm2017")}var $_=5*60,W_=No("authIdTokenMaxAge")||$_,Dh=null,H_=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>W_)return;let i=t?.token;Dh!==i&&(Dh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ba(n=Ti()){let e=ar(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Xh(n,{popupRedirectResolver:dd,persistence:[cd,id,Ia]}),r=No("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let o=new URL(r,location.origin);if(location.origin===o.origin){let a=H_(o.toString());rd(t,a,()=>a(t.currentUser)),nd(t,c=>a(c))}}let i=Co("auth");return i&&Zh(t,`http://${i}`),t}function Q_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gg({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let o=je("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Q_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K_("Browser");var fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pd={};var It,Sa;(function(){var n;function e(w,m){function _(){}_.prototype=m.prototype,w.D=m.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(v,E,A){for(var g=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)g[Xe-2]=arguments[Xe];return m.prototype[E].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)v[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)v[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=w.g[0],_=w.g[1],E=w.g[2];var A=w.g[3],g=m+(A^_&(E^A))+v[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+v[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+v[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+v[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(A^_&(E^A))+v[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+v[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+v[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+v[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(A^_&(E^A))+v[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+v[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+v[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+v[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(A^_&(E^A))+v[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(E^m&(_^E))+v[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=E+(_^A&(m^_))+v[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(m^E&(A^m))+v[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^A&(_^E))+v[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+v[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+v[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+v[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^A&(_^E))+v[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+v[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+v[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+v[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^A&(_^E))+v[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+v[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+v[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+v[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^A&(_^E))+v[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(m^_))+v[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(A^m))+v[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(E^A))+v[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^A)+v[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+v[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+v[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+v[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^A)+v[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+v[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+v[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+v[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^A)+v[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+v[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+v[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+v[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^A)+v[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^E)+v[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=E+(A^m^_)+v[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^m)+v[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~A))+v[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+v[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+v[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+v[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~A))+v[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+v[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+v[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+v[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~A))+v[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+v[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+v[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+v[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~A))+v[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~E))+v[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=E+(m^(A|~_))+v[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~m))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var _=m-this.blockSize,v=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=_;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<m;)if(v[E++]=w.charCodeAt(A++),E==this.blockSize){i(this,v),E=0;break}}else for(;A<m;)if(v[E++]=w[A++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var _=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=_&255,_/=256;for(this.u(w),w=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)w[_++]=this.g[m]>>>v&255;return w};function o(w,m){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=m(w)}function a(w,m){this.h=m;for(var _=[],v=!0,E=w.length-1;0<=E;E--){var A=w[E]|0;v&&A==m||(_[E]=A,v=!1)}this.g=_}var c={};function l(w){return-128<=w&&128>w?o(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return N(d(-w));for(var m=[],_=1,v=0;w>=_;v++)m[v]=w/_|0,_*=4294967296;return new a(m,0)}function p(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return N(p(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=y,E=0;E<w.length;E+=8){var A=Math.min(8,w.length-E),g=parseInt(w.substring(E,E+A),m);8>A?(A=d(Math.pow(m,A)),v=v.j(A).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var y=l(0),I=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-N(this).m();for(var w=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);w+=(0<=v?v:4294967296+v)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(O(this))return"-"+N(this).toString(w);for(var m=d(Math.pow(w,6)),_=this,v="";;){var E=Y(_,m).g;_=B(_,E.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=E,C(_))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=B(this,w),O(w)?-1:C(w)?0:1};function N(w){for(var m=w.g.length,_=[],v=0;v<m;v++)_[v]=~w.g[v];return new a(_,~w.h).add(I)}n.abs=function(){return O(this)?N(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0,E=0;E<=m;E++){var A=v+(this.i(E)&65535)+(w.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);v=g>>>16,A&=65535,g&=65535,_[E]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(w,m){return w.add(N(m))}n.j=function(w){if(C(this)||C(w))return y;if(O(this))return O(w)?N(this).j(N(w)):N(N(this).j(w));if(O(w))return N(this.j(N(w)));if(0>this.l(S)&&0>w.l(S))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<w.g.length;E++){var A=this.i(v)>>>16,g=this.i(v)&65535,Xe=w.i(E)>>>16,Bn=w.i(E)&65535;_[2*v+2*E]+=g*Bn,z(_,2*v+2*E),_[2*v+2*E+1]+=A*Bn,z(_,2*v+2*E+1),_[2*v+2*E+1]+=g*Xe,z(_,2*v+2*E+1),_[2*v+2*E+2]+=A*Xe,z(_,2*v+2*E+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function z(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function G(w,m){this.g=w,this.h=m}function Y(w,m){if(C(m))throw Error("division by zero");if(C(w))return new G(y,y);if(O(w))return m=Y(N(w),m),new G(N(m.g),N(m.h));if(O(m))return m=Y(w,N(m)),new G(N(m.g),m.h);if(30<w.g.length){if(O(w)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,v=m;0>=v.l(w);)_=Ae(_),v=Ae(v);var E=Q(_,1),A=Q(v,1);for(v=Q(v,2),_=Q(_,2);!C(v);){var g=A.add(v);0>=g.l(w)&&(E=E.add(_),A=g),v=Q(v,1),_=Q(_,1)}return m=B(w,E.j(m)),new G(E,m)}for(E=y;0<=w.l(m);){for(_=Math.max(1,Math.floor(w.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(_),g=A.j(m);O(g)||0<g.l(w);)_-=v,A=d(_),g=A.j(m);C(A)&&(A=I),E=E.add(A),w=B(w,g)}return new G(E,w)}n.A=function(w){return Y(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&w.i(v);return new a(_,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|w.i(v);return new a(_,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^w.i(v);return new a(_,this.h^w.h)};function Ae(w){for(var m=w.g.length+1,_=[],v=0;v<m;v++)_[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(_,w.h)}function Q(w,m){var _=m>>5;m%=32;for(var v=w.g.length-_,E=[],A=0;A<v;A++)E[A]=0<m?w.i(A+_)>>>m|w.i(A+_+1)<<32-m:w.i(A+_);return new a(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sa=pd.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,It=pd.Integer=a}).apply(typeof fd<"u"?fd:typeof self<"u"?self:typeof window<"u"?window:{});var es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},st={};var Ra,J_,pn,Pa,wr,ts,Ca,Da,Na;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,h){return s==Array.prototype||s==Object.prototype||(s[u]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof es=="object"&&es];for(var u=0;u<s.length;++u){var h=s[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(s,u){if(u)e:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in h))break e;h=h[T]}s=s[s.length-1],f=h[s],u=u(f),u!=f&&u!=null&&e(h,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var h=0,f=!1,T={next:function(){if(!f&&h<s.length){var b=h++;return{value:u(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,h){return h})}});var a=a||{},c=this||self;function l(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function p(s,u,h){return s.call.apply(s.bind,arguments)}function y(s,u,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(u,T)}}return function(){return s.apply(u,arguments)}}function I(s,u,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,I.apply(null,arguments)}function S(s,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function C(s,u){function h(){}h.prototype=u.prototype,s.aa=u.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,T,b){for(var D=Array(arguments.length-2),J=2;J<arguments.length;J++)D[J-2]=arguments[J];return u.prototype[T].apply(f,D)}}function O(s){let u=s.length;if(0<u){let h=Array(u);for(let f=0;f<u;f++)h[f]=s[f];return h}return[]}function N(s,u){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let T=s.length||0,b=f.length||0;s.length=T+b;for(let D=0;D<b;D++)s[T+D]=f[D]}else s.push(f)}}class B{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var Ae=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Q(s,u,h){for(let f in s)u.call(h,s[f],f,s)}function w(s,u){for(let h in s)u.call(void 0,s[h],h,s)}function m(s){let u={};for(let h in s)u[h]=s[h];return u}let _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,u){let h,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(h in f)s[h]=f[h];for(let b=0;b<_.length;b++)h=_[b],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function E(s){var u=1;s=s.split(":");let h=[];for(;0<u&&s.length;)h.push(s.shift()),u--;return s.length&&h.push(s.join(":")),h}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Zs;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class Xe{constructor(){this.h=this.g=null}add(u,h){let f=Bn.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Bn=new B(()=>new op,s=>s.reset());class op{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let qn,jn=!1,Zs=new Xe,Uu=()=>{let s=c.Promise.resolve(void 0);qn=()=>{s.then(ap)}};var ap=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){A(h)}var u=Bn;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}jn=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var cp=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return s}();function zn(s,u){if(me.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(Ae){e:{try{Y(u.nodeName);var T=!0;break e}catch{}T=!1}T||(u=null)}}else h=="mouseover"?u=s.fromElement:h=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:up[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&zn.aa.h.call(this)}}C(zn,me);var up={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Gn="closure_listenable_"+(1e6*Math.random()|0),lp=0;function hp(s,u,h,f,T){this.listener=s,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=T,this.key=++lp,this.da=this.fa=!1}function ti(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ni(s){this.src=s,this.g={},this.h=0}ni.prototype.add=function(s,u,h,f,T){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var D=to(s,u,f,T);return-1<D?(u=s[D],h||(u.fa=!1)):(u=new hp(u,this.src,b,!!f,T),u.fa=h,s.push(u)),u};function eo(s,u){var h=u.type;if(h in s.g){var f=s.g[h],T=Array.prototype.indexOf.call(f,u,void 0),b;(b=0<=T)&&Array.prototype.splice.call(f,T,1),b&&(ti(u),s.g[h].length==0&&(delete s.g[h],s.h--))}}function to(s,u,h,f){for(var T=0;T<s.length;++T){var b=s[T];if(!b.da&&b.listener==u&&b.capture==!!h&&b.ha==f)return T}return-1}var no="closure_lm_"+(1e6*Math.random()|0),ro={};function Bu(s,u,h,f,T){if(f&&f.once)return ju(s,u,h,f,T);if(Array.isArray(u)){for(var b=0;b<u.length;b++)Bu(s,u[b],h,f,T);return null}return h=ao(h),s&&s[Gn]?s.K(u,h,d(f)?!!f.capture:!!f,T):qu(s,u,h,!1,f,T)}function qu(s,u,h,f,T,b){if(!u)throw Error("Invalid event type");var D=d(T)?!!T.capture:!!T,J=so(s);if(J||(s[no]=J=new ni(s)),h=J.add(u,h,f,D,b),h.proxy)return h;if(f=dp(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)cp||(T=D),T===void 0&&(T=!1),s.addEventListener(u.toString(),f,T);else if(s.attachEvent)s.attachEvent(Gu(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function dp(){function s(h){return u.call(s.src,s.listener,h)}let u=fp;return s}function ju(s,u,h,f,T){if(Array.isArray(u)){for(var b=0;b<u.length;b++)ju(s,u[b],h,f,T);return null}return h=ao(h),s&&s[Gn]?s.L(u,h,d(f)?!!f.capture:!!f,T):qu(s,u,h,!0,f,T)}function zu(s,u,h,f,T){if(Array.isArray(u))for(var b=0;b<u.length;b++)zu(s,u[b],h,f,T);else f=d(f)?!!f.capture:!!f,h=ao(h),s&&s[Gn]?(s=s.i,u=String(u).toString(),u in s.g&&(b=s.g[u],h=to(b,h,f,T),-1<h&&(ti(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete s.g[u],s.h--)))):s&&(s=so(s))&&(u=s.g[u.toString()],s=-1,u&&(s=to(u,h,f,T)),(h=-1<s?u[s]:null)&&io(h))}function io(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[Gn])eo(u.i,s);else{var h=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(h,f,s.capture):u.detachEvent?u.detachEvent(Gu(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=so(u))?(eo(h,s),h.h==0&&(h.src=null,u[no]=null)):ti(s)}}}function Gu(s){return s in ro?ro[s]:ro[s]="on"+s}function fp(s,u){if(s.da)s=!0;else{u=new zn(u,this);var h=s.listener,f=s.ha||s.src;s.fa&&io(s),s=h.call(f,u)}return s}function so(s){return s=s[no],s instanceof ni?s:null}var oo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ao(s){return typeof s=="function"?s:(s[oo]||(s[oo]=function(u){return s.handleEvent(u)}),s[oo])}function ge(){lt.call(this),this.i=new ni(this),this.M=this,this.F=null}C(ge,lt),ge.prototype[Gn]=!0,ge.prototype.removeEventListener=function(s,u,h,f){zu(this,s,u,h,f)};function be(s,u){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new me(u,s);else if(u instanceof me)u.target=u.target||s;else{var T=u;u=new me(f,s),v(u,T)}if(T=!0,h)for(var b=h.length-1;0<=b;b--){var D=u.g=h[b];T=ri(D,f,!0,u)&&T}if(D=u.g=s,T=ri(D,f,!0,u)&&T,T=ri(D,f,!1,u)&&T,h)for(b=0;b<h.length;b++)D=u.g=h[b],T=ri(D,f,!1,u)&&T}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var h=s.g[u],f=0;f<h.length;f++)ti(h[f]);delete s.g[u],s.h--}}this.F=null},ge.prototype.K=function(s,u,h,f){return this.i.add(String(s),u,!1,h,f)},ge.prototype.L=function(s,u,h,f){return this.i.add(String(s),u,!0,h,f)};function ri(s,u,h,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var T=!0,b=0;b<u.length;++b){var D=u[b];if(D&&!D.da&&D.capture==h){var J=D.listener,de=D.ha||D.src;D.fa&&eo(s.i,D),T=J.call(de,f)!==!1&&T}}return T&&!f.defaultPrevented}function Ku(s,u,h){if(typeof s=="function")h&&(s=I(s,h));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(s,u||0)}function $u(s){s.g=Ku(()=>{s.g=null,s.i&&(s.i=!1,$u(s))},s.l);let u=s.h;s.h=null,s.m.apply(null,u)}class pp extends lt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$u(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(s){lt.call(this),this.h=s,this.g={}}C(Kn,lt);var Wu=[];function Hu(s){Q(s.g,function(u,h){this.g.hasOwnProperty(h)&&io(u)},s),s.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),Hu(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var co=c.JSON.stringify,mp=c.JSON.parse,gp=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function uo(){}uo.prototype.h=null;function Qu(s){return s.h||(s.h=s.i())}function Ju(){}var $n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lo(){me.call(this,"d")}C(lo,me);function ho(){me.call(this,"c")}C(ho,me);var Ct={},Yu=null;function ii(){return Yu=Yu||new ge}Ct.La="serverreachability";function Xu(s){me.call(this,Ct.La,s)}C(Xu,me);function Wn(s){let u=ii();be(u,new Xu(u))}Ct.STAT_EVENT="statevent";function Zu(s,u){me.call(this,Ct.STAT_EVENT,s),this.stat=u}C(Zu,me);function Se(s){let u=ii();be(u,new Zu(u,s))}Ct.Ma="timingevent";function el(s,u){me.call(this,Ct.Ma,s),this.size=u}C(el,me);function Hn(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},u)}function Qn(){this.g=!0}Qn.prototype.xa=function(){this.g=!1};function _p(s,u,h,f,T,b){s.info(function(){if(s.g)if(b)for(var D="",J=b.split("&"),de=0;de<J.length;de++){var W=J[de].split("=");if(1<W.length){var _e=W[0];W=W[1];var ye=_e.split("_");D=2<=ye.length&&ye[1]=="type"?D+(_e+"="+W+"&"):D+(_e+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+u+`
`+h+`
`+D})}function yp(s,u,h,f,T,b,D){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+u+`
`+h+`
`+b+" "+D})}function nn(s,u,h,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ip(s,h)+(f?" "+f:"")})}function vp(s,u){s.info(function(){return"TIMEOUT: "+u})}Qn.prototype.info=function(){};function Ip(s,u){if(!s.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return co(h)}catch{return u}}var si={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fo;function oi(){}C(oi,uo),oi.prototype.g=function(){return new XMLHttpRequest},oi.prototype.i=function(){return{}},fo=new oi;function ht(s,u,h,f){this.j=s,this.i=u,this.l=h,this.R=f||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var rl={},po={};function mo(s,u,h){s.L=1,s.v=li(Ze(u)),s.m=h,s.P=!0,il(s,null)}function il(s,u){s.F=Date.now(),ai(s),s.A=Ze(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),yl(h.i,"t",f),s.C=0,h=s.j.J,s.h=new nl,s.g=Ll(s.j,h?u:null,!s.m),0<s.O&&(s.M=new pp(I(s.Y,s,s.g),s.O)),u=s.U,h=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Wu[0]=T.toString()),T=Wu);for(var b=0;b<T.length;b++){var D=Bu(h,T[b],f||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Wn(),_p(s.i,s.u,s.A,s.l,s.R,s.m)}ht.prototype.ca=function(s){s=s.target;let u=this.M;u&&et(s)==3?u.j():this.Y(s)},ht.prototype.Y=function(s){try{if(s==this.g)e:{let ye=et(this.g);var u=this.g.Ba();let on=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||bl(this.g)))){this.J||ye!=4||u==7||(u==8||0>=on?Wn(3):Wn(2)),go(this);var h=this.g.Z();this.X=h;t:if(sl(this)){var f=bl(this.g);s="";var T=f.length,b=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),Jn(this);var D="";break t}this.h.i=new c.TextDecoder}for(u=0;u<T;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(b&&u==T-1)});f.length=0,this.h.g+=s,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,yp(this.i,this.u,this.A,this.l,this.R,ye,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,de=this.g;if((J=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(J)){var W=J;break t}}W=null}if(h=W)nn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_o(this,h);else{this.o=!1,this.s=3,Se(12),Dt(this),Jn(this);break e}}if(this.P){h=!0;let Ue;for(;!this.J&&this.C<D.length;)if(Ue=wp(this,D),Ue==po){ye==4&&(this.s=4,Se(14),h=!1),nn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==rl){this.s=4,Se(15),nn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else nn(this.i,this.l,Ue,null),_o(this,Ue);if(sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||D.length!=0||this.h.h||(this.s=1,Se(16),h=!1),this.o=this.o&&h,!h)nn(this.i,this.l,D,"[Invalid Chunked Response]"),Dt(this),Jn(this);else if(0<D.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),To(_e),_e.M=!0,Se(11))}}else nn(this.i,this.l,D,null),_o(this,D);ye==4&&Dt(this),this.o&&!this.J&&(ye==4?kl(this.j,this):(this.o=!1,ai(this)))}else Fp(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Dt(this),Jn(this)}}}catch{}finally{}};function sl(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function wp(s,u){var h=s.C,f=u.indexOf(`
`,h);return f==-1?po:(h=Number(u.substring(h,f)),isNaN(h)?rl:(f+=1,f+h>u.length?po:(u=u.slice(f,f+h),s.C=f+h,u)))}ht.prototype.cancel=function(){this.J=!0,Dt(this)};function ai(s){s.S=Date.now()+s.I,ol(s,s.I)}function ol(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Hn(I(s.ba,s),u)}function go(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ht.prototype.ba=function(){this.B=null;let s=Date.now();0<=s-this.S?(vp(this.i,this.A),this.L!=2&&(Wn(),Se(17)),Dt(this),this.s=2,Jn(this)):ol(this,this.S-s)};function Jn(s){s.j.G==0||s.J||kl(s.j,s)}function Dt(s){go(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Hu(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function _o(s,u){try{var h=s.j;if(h.G!=0&&(h.g==s||yo(h.h,s))){if(!s.K&&yo(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)mi(h),fi(h);else break e;Eo(h),Se(18)}}else h.za=T[1],0<h.za-h.T&&37500>T[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hn(I(h.Za,h),6e3));if(1>=ul(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else kt(h,11)}else if((s.K||h.g==s)&&mi(h),!z(u))for(T=h.Da.g.parse(u),u=0;u<T.length;u++){let W=T[u];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];let _e=W[3];_e!=null&&(h.la=_e,h.j.info("VER="+h.la));let ye=W[4];ye!=null&&(h.Aa=ye,h.j.info("SVER="+h.Aa));let on=W[5];on!=null&&typeof on=="number"&&0<on&&(f=1.5*on,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let Ue=s.g;if(Ue){let _i=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var b=f.h;b.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(vo(b,b.h),b.h=null))}if(f.D){let Ao=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(f.ya=Ao,X(f.I,f.D,Ao))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=s;if(f.qa=Vl(f,f.J?f.ia:null,f.W),D.K){ll(f.h,D);var J=D,de=f.L;de&&(J.I=de),J.B&&(go(J),ai(J)),f.g=D}else Dl(f);0<h.i.length&&pi(h)}else W[0]!="stop"&&W[0]!="close"||kt(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?kt(h,7):wo(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}Wn(4)}catch{}}var Ep=class{constructor(s,u){this.g=s,this.map=u}};function al(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cl(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ul(s){return s.h?1:s.g?s.g.size:0}function yo(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function vo(s,u){s.g?s.g.add(u):s.h=u}function ll(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}al.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let s of this.g.values())s.cancel();this.g.clear()}};function hl(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(let h of s.g.values())u=u.concat(h.D);return u}return O(s.i)}function Tp(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(l(s)){for(var u=[],h=s.length,f=0;f<h;f++)u.push(s[f]);return u}u=[],h=0;for(f in s)u[h++]=s[f];return u}function Ap(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(l(s)||typeof s=="string"){var u=[];s=s.length;for(var h=0;h<s;h++)u.push(h);return u}u=[],h=0;for(let f in s)u[h++]=f;return u}}}function dl(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(l(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var h=Ap(s),f=Tp(s),T=f.length,b=0;b<T;b++)u.call(void 0,f[b],h&&h[b],s)}var fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bp(s,u){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),T=null;if(0<=f){var b=s[h].substring(0,f);T=s[h].substring(f+1)}else b=s[h];u(b,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Nt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Nt){this.h=s.h,ci(this,s.j),this.o=s.o,this.g=s.g,ui(this,s.s),this.l=s.l;var u=s.i,h=new Zn;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),pl(this,h),this.m=s.m}else s&&(u=String(s).match(fl))?(this.h=!1,ci(this,u[1]||"",!0),this.o=Yn(u[2]||""),this.g=Yn(u[3]||"",!0),ui(this,u[4]),this.l=Yn(u[5]||"",!0),pl(this,u[6]||"",!0),this.m=Yn(u[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Nt.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Xn(u,ml,!0),":");var h=this.g;return(h||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Xn(u,ml,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(Xn(h,h.charAt(0)=="/"?Pp:Rp,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",Xn(h,Dp)),s.join("")};function Ze(s){return new Nt(s)}function ci(s,u,h){s.j=h?Yn(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function ui(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function pl(s,u,h){u instanceof Zn?(s.i=u,Np(s.i,s.h)):(h||(u=Xn(u,Cp)),s.i=new Zn(u,s.h))}function X(s,u,h){s.i.set(u,h)}function li(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Yn(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Xn(s,u,h){return typeof s=="string"?(s=encodeURI(s).replace(u,Sp),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Sp(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ml=/[#\/\?@]/g,Rp=/[#\?:]/g,Pp=/[#\?]/g,Cp=/[#\?@]/g,Dp=/#/g;function Zn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function dt(s){s.g||(s.g=new Map,s.h=0,s.i&&bp(s.i,function(u,h){s.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Zn.prototype,n.add=function(s,u){dt(this),this.i=null,s=rn(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(u),this.h+=1,this};function gl(s,u){dt(s),u=rn(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function _l(s,u){return dt(s),u=rn(s,u),s.g.has(u)}n.forEach=function(s,u){dt(this),this.g.forEach(function(h,f){h.forEach(function(T){s.call(u,T,f,this)},this)},this)},n.na=function(){dt(this);let s=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){let T=s[f];for(let b=0;b<T.length;b++)h.push(u[f])}return h},n.V=function(s){dt(this);let u=[];if(typeof s=="string")_l(this,s)&&(u=u.concat(this.g.get(rn(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)u=u.concat(s[h])}return u},n.set=function(s,u){return dt(this),this.i=null,s=rn(this,s),_l(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function yl(s,u,h){gl(s,u),0<h.length&&(s.i=null,s.g.set(rn(s,u),O(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let s=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];let b=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var T=b;D[f]!==""&&(T+="="+encodeURIComponent(String(D[f]))),s.push(T)}}return this.i=s.join("&")};function rn(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Np(s,u){u&&!s.j&&(dt(s),s.i=null,s.g.forEach(function(h,f){var T=f.toLowerCase();f!=T&&(gl(this,f),yl(this,T,h))},s)),s.j=u}function kp(s,u){let h=new Qn;if(c.Image){let f=new Image;f.onload=S(ft,h,"TestLoadImage: loaded",!0,u,f),f.onerror=S(ft,h,"TestLoadImage: error",!1,u,f),f.onabort=S(ft,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(ft,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function Op(s,u){let h=new Qn,f=new AbortController,T=setTimeout(()=>{f.abort(),ft(h,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(T),b.ok?ft(h,"TestPingServer: ok",!0,u):ft(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(T),ft(h,"TestPingServer: error",!1,u)})}function ft(s,u,h,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(h)}catch{}}function xp(){this.g=new gp}function Vp(s,u,h){let f=h||"";try{dl(s,function(T,b){let D=T;d(T)&&(D=co(T)),u.push(f+b+"="+encodeURIComponent(D))})}catch(T){throw u.push(f+"type="+encodeURIComponent("_badmap")),T}}function er(s){this.l=s.Ub||null,this.j=s.eb||!1}C(er,uo),er.prototype.g=function(){return new hi(this.l,this.j)},er.prototype.i=function(s){return function(){return s}}({});function hi(s,u){ge.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(hi,ge),n=hi.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,nr(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?tr(this):nr(this),this.readyState==3&&vl(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,tr(this))},n.Qa=function(s){this.g&&(this.response=s,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,nr(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let s=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=u.next();return s.join(`\r
`)};function nr(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Il(s){let u="";return Q(s,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function Io(s,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Il(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):X(s,u,h))}function ne(s){ge.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ne,ge);var Lp=/^https?$/i,Mp=["POST","PUT"];n=ne.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fo.g(),this.v=this.o?Qu(this.o):Qu(fo),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(b){wl(this,b);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)h.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Mp,u,void 0))||f||T||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[b,D]of h)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Al(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){wl(this,b)}};function wl(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,El(s),di(s)}function El(s){s.A||(s.A=!0,be(s,"complete"),be(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,be(this,"complete"),be(this,"abort"),di(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),di(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Tl(this):this.bb())},n.bb=function(){Tl(this)};function Tl(s){if(s.h&&typeof a<"u"&&(!s.v[1]||et(s)!=4||s.Z()!=2)){if(s.u&&et(s)==4)Ku(s.Ea,0,s);else if(be(s,"readystatechange"),et(s)==4){s.h=!1;try{let D=s.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=D===0){var T=String(s.D).match(fl)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!Lp.test(T?T.toLowerCase():"")}h=f}if(h)be(s,"complete"),be(s,"success");else{s.m=6;try{var b=2<et(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",El(s)}}finally{di(s)}}}}function di(s,u){if(s.g){Al(s);let h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||be(s,"ready");try{h.onreadystatechange=f}catch{}}}function Al(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function et(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),mp(u)}};function bl(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Fp(s){let u={};s=(s.g&&2<=et(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var h=E(s[f]);let T=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let b=u[T]||[];u[T]=b,b.push(h)}w(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(s,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||u}function Sl(s){this.Aa=0,this.i=[],this.j=new Qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,s),this.cb=rr("retryDelaySeedMs",1e4,s),this.Wa=rr("forwardChannelMaxRetries",2,s),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new al(s&&s.concurrentRequestLimit),this.Da=new xp,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sl.prototype,n.la=8,n.G=1,n.connect=function(s,u,h,f){Se(0),this.W=s,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Vl(this,null,this.W),pi(this)};function wo(s){if(Rl(s),s.G==3){var u=s.U++,h=Ze(s.I);if(X(h,"SID",s.K),X(h,"RID",u),X(h,"TYPE","terminate"),ir(s,h),u=new ht(s,s.j,u),u.L=2,u.v=li(Ze(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=Ll(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ai(u)}xl(s)}function fi(s){s.g&&(To(s),s.g.cancel(),s.g=null)}function Rl(s){fi(s),s.u&&(c.clearTimeout(s.u),s.u=null),mi(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function pi(s){if(!cl(s.h)&&!s.s){s.s=!0;var u=s.Ga;qn||Uu(),jn||(qn(),jn=!0),Zs.add(u,s),s.B=0}}function Up(s,u){return ul(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Hn(I(s.Ga,s,u),Ol(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;let T=new ht(this,this.j,s),b=this.o;if(this.S&&(b?(b=m(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(T.H=b,b=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Cl(this,T,u),h=Ze(this.I),X(h,"RID",s),X(h,"CVER",22),this.D&&X(h,"X-HTTP-Session-Id",this.D),ir(this,h),b&&(this.O?u="headers="+encodeURIComponent(String(Il(b)))+"&"+u:this.m&&Io(h,this.m,b)),vo(this.h,T),this.Ua&&X(h,"TYPE","init"),this.P?(X(h,"$req",u),X(h,"SID","null"),T.T=!0,mo(T,h,null)):mo(T,h,u),this.G=2}}else this.G==3&&(s?Pl(this,s):this.i.length==0||cl(this.h)||Pl(this))};function Pl(s,u){var h;u?h=u.l:h=s.U++;let f=Ze(s.I);X(f,"SID",s.K),X(f,"RID",h),X(f,"AID",s.T),ir(s,f),s.m&&s.o&&Io(f,s.m,s.o),h=new ht(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Cl(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),vo(s.h,h),mo(h,f,u)}function ir(s,u){s.H&&Q(s.H,function(h,f){X(u,f,h)}),s.l&&dl({},function(h,f){X(u,f,h)})}function Cl(s,u,h){h=Math.min(s.i.length,h);var f=s.l?I(s.l.Na,s.l,s):null;e:{var T=s.i;let b=-1;for(;;){let D=["count="+h];b==-1?0<h?(b=T[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let J=!0;for(let de=0;de<h;de++){let W=T[de].g,_e=T[de].map;if(W-=b,0>W)b=Math.max(0,T[de].g-100),J=!1;else try{Vp(_e,D,"req"+W+"_")}catch{f&&f(_e)}}if(J){f=D.join("&");break e}}}return s=s.i.splice(0,h),u.D=s,f}function Dl(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;qn||Uu(),jn||(qn(),jn=!0),Zs.add(u,s),s.v=0}}function Eo(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Hn(I(s.Fa,s),Ol(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Hn(I(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),fi(this),Nl(this))};function To(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Nl(s){s.g=new ht(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Ze(s.qa);X(u,"RID","rpc"),X(u,"SID",s.K),X(u,"AID",s.T),X(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(u,"TO",s.ja),X(u,"TYPE","xmlhttp"),ir(s,u),s.m&&s.o&&Io(u,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=li(Ze(u)),h.m=null,h.P=!0,il(h,s)}n.Za=function(){this.C!=null&&(this.C=null,fi(this),Eo(this),Se(19))};function mi(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function kl(s,u){var h=null;if(s.g==u){mi(s),To(s),s.g=null;var f=2}else if(yo(s.h,u))h=u.D,ll(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var T=s.B;f=ii(),be(f,new el(f,h)),pi(s)}else Dl(s);else if(T=u.s,T==3||T==0&&0<u.X||!(f==1&&Up(s,u)||f==2&&Eo(s)))switch(h&&0<h.length&&(u=s.h,u.i=u.i.concat(h)),T){case 1:kt(s,5);break;case 4:kt(s,10);break;case 3:kt(s,6);break;default:kt(s,2)}}}function Ol(s,u){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*u}function kt(s,u){if(s.j.info("Error code "+u),u==2){var h=I(s.fb,s),f=s.Xa;let T=!f;f=new Nt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ci(f,"https"),li(f),T?kp(f.toString(),h):Op(f.toString(),h)}else Se(2);s.G=0,s.l&&s.l.sa(u),xl(s),Rl(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function xl(s){if(s.G=0,s.ka=[],s.l){let u=hl(s.h);(u.length!=0||s.i.length!=0)&&(N(s.ka,u),N(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Vl(s,u,h){var f=h instanceof Nt?Ze(h):new Nt(h);if(f.g!="")u&&(f.g=u+"."+f.g),ui(f,f.s);else{var T=c.location;f=T.protocol,u=u?u+"."+T.hostname:T.hostname,T=+T.port;var b=new Nt(null);f&&ci(b,f),u&&(b.g=u),T&&ui(b,T),h&&(b.l=h),f=b}return h=s.D,u=s.ya,h&&u&&X(f,h,u),X(f,"VER",s.la),ir(s,f),f}function Ll(s,u,h){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new ne(new er({eb:h})):new ne(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ml(){}n=Ml.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gi(){}gi.prototype.g=function(s,u){return new Ce(s,u)};function Ce(s,u){ge.call(this),this.g=new Sl(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!z(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new sn(this)}C(Ce,ge),Ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){wo(this.g)},Ce.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=co(s),s=h);u.i.push(new Ep(u.Ya++,s)),u.G==3&&pi(u)},Ce.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,Ce.aa.N.call(this)};function Fl(s){lo.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){e:{for(let h in u){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}C(Fl,lo);function Ul(){ho.call(this),this.status=1}C(Ul,ho);function sn(s){this.g=s}C(sn,Ml),sn.prototype.ua=function(){be(this.g,"a")},sn.prototype.ta=function(s){be(this.g,new Fl(s))},sn.prototype.sa=function(s){be(this.g,new Ul)},sn.prototype.ra=function(){be(this.g,"b")},gi.prototype.createWebChannel=gi.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Na=st.createWebChannelTransport=function(){return new gi},Da=st.getStatEventTarget=function(){return ii()},Ca=st.Event=Ct,ts=st.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},si.NO_ERROR=0,si.TIMEOUT=8,si.HTTP_ERROR=6,wr=st.ErrorCode=si,tl.COMPLETE="complete",Pa=st.EventType=tl,Ju.EventType=$n,$n.OPEN="a",$n.CLOSE="b",$n.ERROR="c",$n.MESSAGE="d",ge.prototype.listen=ge.prototype.K,pn=st.WebChannel=Ju,J_=st.FetchXmlHttpFactory=er,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,Ra=st.XhrIo=ne}).apply(typeof es<"u"?es:typeof self<"u"?self:typeof window<"u"?window:{});var md="@firebase/firestore";var ue=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");var Ln="10.14.0";var Kt=new pt("@firebase/firestore");function Er(){return Kt.logLevel}function x(n,...e){if(Kt.logLevel<=q.DEBUG){let t=e.map(fu);Kt.debug(`Firestore (${Ln}): ${n}`,...t)}}function ot(n,...e){if(Kt.logLevel<=q.ERROR){let t=e.map(fu);Kt.error(`Firestore (${Ln}): ${n}`,...t)}}function wn(n,...e){if(Kt.logLevel<=q.WARN){let t=e.map(fu);Kt.warn(`Firestore (${Ln}): ${n}`,...t)}}function fu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function M(n="Unexpected state"){let e=`FIRESTORE (${Ln}) INTERNAL ASSERTION FAILED: `+n;throw ot(e),new Error(e)}function $(n,e){n||M()}function U(n,e){return n}var R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},k=class extends De{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Fe=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var os=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Va=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ue.UNAUTHENTICATED))}shutdown(){}},La=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Ma=class{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),o=new Fe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Fe,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Fe)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($(typeof r.accessToken=="string"),new os(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new ue(e)}},Fa=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},Ua=class{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Fa(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Ba=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},qa=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){$(this.o===void 0);let r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};let i=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){let o=this.A.getImmediate({optional:!0});o?i(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string"),this.R=t.token,new Ba(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Y_(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}var as=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=Y_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}};function H(n,e){return n<e?-1:n>e?1:0}function En(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var fe=class n{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new k(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new n(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var F=class n{constructor(e){this.timestamp=e}static fromTimestamp(e){return new n(e)}static min(){return new n(new fe(0,0))}static max(){return new n(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var cs=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(),r===void 0?r=e.length-t:r>e.length-t&&M(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}},Z=class n extends cs{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new k(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},X_=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Ne=class n extends cs{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return X_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new n(["__name__"])}static fromServerFormat(e){let t=[],r="",i=0,o=()=>{if(r.length===0)throw new k(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new k(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new k(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var L=class n{constructor(e){this.path=e}static fromPath(e){return new n(Z.fromString(e))}static fromName(e){return new n(Z.fromString(e).popFirst(5))}static empty(){return new n(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new Z(e.slice()))}};var ja=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};ja.UNKNOWN_ID=-1;function Z_(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new $t(i,L.empty(),e)}function ey(n){return new $t(n.readTime,n.key,-1)}var $t=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(F.min(),L.empty(),-1)}static max(){return new n(F.max(),L.empty(),-1)}};function ty(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}var ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",za=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Wr(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==ny)throw n;x("LocalStore","Unexpectedly lost primary lease")}var P=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},l=>r(l))}),a=!0,o===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let o=e.length,a=new Array(o),c=0;for(let l=0;l<o;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++c,c===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}};function ry(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hr(n){return n.name==="IndexedDbTransactionError"}var Cr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};Cr.oe=-1;function Qr(n){return n==null}function Dr(n){return n===0&&1/n==-1/0}function iy(n){return typeof n=="number"&&Number.isInteger(n)&&!Dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var sy=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xw=[...sy,"documentOverlays"],oy=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ay=oy,cy=[...ay,"indexConfiguration","indexState","indexEntries"];var Vw=[...cy,"globals"];function gd(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zt(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qd(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var re=class n{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yn(this.root,e,this.comparator,!1)}getReverseIterator(){return new yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yn(this.root,e,this.comparator,!0)}},yn=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},He=class n{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=o??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new n(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();let e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}};He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,r,i,o){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var we=class n{constructor(e){this.comparator=e,this.data=new re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new us(this.data.getIterator())}getIteratorFrom(e){return new us(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},us=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Me=class n{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new n([])}unionWith(e){let t=new we(Ne.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var ls=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Te=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ls("Invalid base64 string: "+o):o}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Te.EMPTY_BYTE_STRING=new Te("");var uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(n){if($(!!n),typeof n=="string"){let e=0,t=uy.exec(n);if($(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:te(n.seconds),nanos:te(n.nanos)}}function te(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function At(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}function pu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function mu(n){let e=n.mapValue.fields.__previous_value__;return pu(e)?mu(e):e}function Nr(n){let e=at(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}var Ga=class{constructor(e,t,r,i,o,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}},hs=class n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pu(n)?4:Yd(n)?9007199254740991:Jd(n)?10:11:M()}function Je(n,e){if(n===e)return!0;let t=Wt(n);if(t!==Wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nr(n).isEqual(Nr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;let a=at(i.timestampValue),c=at(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return At(i.bytesValue).isEqual(At(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return te(i.geoPointValue.latitude)===te(o.geoPointValue.latitude)&&te(i.geoPointValue.longitude)===te(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return te(i.integerValue)===te(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){let a=te(i.doubleValue),c=te(o.doubleValue);return a===c?Dr(a)===Dr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return function(i,o){let a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(gd(a)!==gd(c))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Je(a[l],c[l])))return!1;return!0}(n,e);default:return M()}}function kr(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function Tn(n,e){if(n===e)return 0;let t=Wt(n),r=Wt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){let c=te(o.integerValue||o.doubleValue),l=te(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return _d(n.timestampValue,e.timestampValue);case 4:return _d(Nr(n),Nr(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,a){let c=At(o),l=At(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){let c=o.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){let p=H(c[d],l[d]);if(p!==0)return p}return H(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){let c=H(te(o.latitude),te(a.latitude));return c!==0?c:H(te(o.longitude),te(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return yd(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,l,d,p;let y=o.fields||{},I=a.fields||{},S=(c=y.value)===null||c===void 0?void 0:c.arrayValue,C=(l=I.value)===null||l===void 0?void 0:l.arrayValue,O=H(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((p=C?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:yd(S,C)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===ns.mapValue&&a===ns.mapValue)return 0;if(o===ns.mapValue)return 1;if(a===ns.mapValue)return-1;let c=o.fields||{},l=Object.keys(c),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){let I=H(l[y],p[y]);if(I!==0)return I;let S=Tn(c[l[y]],d[p[y]]);if(S!==0)return S}return H(l.length,p.length)}(n.mapValue,e.mapValue);default:throw M()}}function _d(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);let t=at(n),r=at(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function yd(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let o=Tn(t[i],r[i]);if(o)return o}return H(t.length,r.length)}function An(n){return Ka(n)}function Ka(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=at(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return At(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let o of t.values||[])i?i=!1:r+=",",r+=Ka(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",o=!0;for(let a of r)o?o=!1:i+=",",i+=`${a}:${Ka(t.fields[a])}`;return i+"}"}(n.mapValue):M()}function vd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $a(n){return!!n&&"integerValue"in n}function gu(n){return!!n&&"arrayValue"in n}function Id(n){return!!n&&"nullValue"in n}function wd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function is(n){return!!n&&"mapValue"in n}function Jd(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Zt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ar(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ar(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Yd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Pe=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(t)}setAll(e){let t=Ne.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Ar(a):i.push(c.lastSegment())});let o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){let t=this.field(e.popLast());is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];is(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Zt(t,(i,o)=>e[i]=o);for(let i of r)delete e[i]}clone(){return new n(Ar(this.value))}};function Xd(n){let e=[];return Zt(n.fields,(t,r)=>{let i=new Ne([t]);if(is(r)){let o=Xd(r.mapValue).fields;if(o.length===0)e.push(i);else for(let a of o)e.push(i.child(a))}else e.push(i)}),new Me(e)}var Oe=class n{constructor(e,t,r,i,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,F.min(),F.min(),F.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,F.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,F.min(),F.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,F.min(),F.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var bn=class{constructor(e,t){this.position=e,this.inclusive=t}};function Ed(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=Tn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}var Ht=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function ly(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var ds=class{},oe=class n extends ds{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ha(e,t,r):t==="array-contains"?new Ya(e,r):t==="in"?new Xa(e,r):t==="not-in"?new Za(e,r):t==="array-contains-any"?new ec(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qa(e,r):new Ja(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Tn(t,this.value)):t!==null&&Wt(this.value)===Wt(t)&&this.matchesComparison(Tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ze=class n extends ds{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new n(e,t)}matches(e){return Zd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function Zd(n){return n.op==="and"}function ef(n){return hy(n)&&Zd(n)}function hy(n){for(let e of n.filters)if(e instanceof ze)return!1;return!0}function Wa(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+An(n.value);if(ef(n))return n.filters.map(e=>Wa(e)).join(",");{let e=n.filters.map(t=>Wa(t)).join(",");return`${n.op}(${e})`}}function tf(n,e){return n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Je(r.value,i.value)}(n,e):n instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&tf(a,i.filters[c]),!0):!1}(n,e):void M()}function nf(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${An(t.value)}`}(n):n instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(nf).join(" ,")+"}"}(n):"Filter"}var Ha=class extends oe{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){let t=L.comparator(e.key,this.key);return this.matchesComparison(t)}},Qa=class extends oe{constructor(e,t){super(e,"in",t),this.keys=rf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Ja=class extends oe{constructor(e,t){super(e,"not-in",t),this.keys=rf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function rf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}var Ya=class extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return gu(t)&&kr(t.arrayValue,this.value)}},Xa=class extends oe{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&kr(this.value.arrayValue,t)}},Za=class extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&!kr(this.value.arrayValue,t)}},ec=class extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!gu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>kr(this.value.arrayValue,r))}};var tc=class{constructor(e,t=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}};function Ad(n,e=null,t=[],r=[],i=null,o=null,a=null){return new tc(n,e,t,r,i,o,a)}function _u(n){let e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>An(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>An(r)).join(",")),e.ue=t}return e.ue}function yu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ly(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Td(n.startAt,e.startAt)&&Td(n.endAt,e.endAt)}function nc(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var bt=class{constructor(e,t=null,r=[],i=[],o=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function dy(n,e,t,r,i,o,a,c){return new bt(n,e,t,r,i,o,a,c)}function Bs(n){return new bt(n)}function bd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sf(n){return n.collectionGroup!==null}function br(n){let e=U(n);if(e.ce===null){e.ce=[];let t=new Set;for(let o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new we(Ne.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ht(o,r))}),t.has(Ne.keyField().canonicalString())||e.ce.push(new Ht(Ne.keyField(),r))}return e.ce}function Qe(n){let e=U(n);return e.le||(e.le=fy(e,br(n))),e.le}function fy(n,e){if(n.limitType==="F")return Ad(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let o=i.dir==="desc"?"asc":"desc";return new Ht(i.field,o)});let t=n.endAt?new bn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bn(n.startAt.position,n.startAt.inclusive):null;return Ad(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function rc(n,e){let t=n.filters.concat([e]);return new bt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fs(n,e,t){return new bt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qs(n,e){return yu(Qe(n),Qe(e))&&n.limitType===e.limitType}function of(n){return`${_u(Qe(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>nf(i)).join(", ")}]`),Qr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>An(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>An(i)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function js(n,e){return e.isFoundDocument()&&function(r,i){let o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(let o of br(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){let d=Ed(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,br(r),i)||r.endAt&&!function(a,c,l){let d=Ed(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,br(r),i))}(n,e)}function py(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function af(n){return(e,t)=>{let r=!1;for(let i of br(n)){let o=my(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function my(n,e,t){let r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,c){let l=a.data.field(o),d=c.data.field(o);return l!==null&&d!==null?Tn(l,d):M()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}var St=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,(t,r)=>{for(let[i,o]of r)e(i,o)})}isEmpty(){return Qd(this.inner)}size(){return this.innerSize}};var gy=new re(L.comparator);function ct(){return gy}var cf=new re(L.comparator);function Tr(...n){let e=cf;for(let t of n)e=e.insert(t.key,t);return e}function uf(n){let e=cf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return Sr()}function lf(){return Sr()}function Sr(){return new St(n=>n.toString(),(n,e)=>n.isEqual(e))}var _y=new re(L.comparator),yy=new we(L.comparator);function j(...n){let e=yy;for(let t of n)e=e.add(t);return e}var vy=new we(H);function Iy(){return vy}function vu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(e)?"-0":e}}function hf(n){return{integerValue:""+n}}function wy(n,e){return iy(e)?hf(e):vu(n,e)}var Sn=class{constructor(){this._=void 0}};function Ey(n,e,t){return n instanceof Rn?function(i,o){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&pu(o)&&(o=mu(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Qt?ff(n,e):n instanceof Jt?pf(n,e):function(i,o){let a=df(i,o),c=Sd(a)+Sd(i.Pe);return $a(a)&&$a(i.Pe)?hf(c):vu(i.serializer,c)}(n,e)}function Ty(n,e,t){return n instanceof Qt?ff(n,e):n instanceof Jt?pf(n,e):t}function df(n,e){return n instanceof Pn?function(r){return $a(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}var Rn=class extends Sn{},Qt=class extends Sn{constructor(e){super(),this.elements=e}};function ff(n,e){let t=mf(e);for(let r of n.elements)t.some(i=>Je(i,r))||t.push(r);return{arrayValue:{values:t}}}var Jt=class extends Sn{constructor(e){super(),this.elements=e}};function pf(n,e){let t=mf(e);for(let r of n.elements)t=t.filter(i=>!Je(i,r));return{arrayValue:{values:t}}}var Pn=class extends Sn{constructor(e,t){super(),this.serializer=e,this.Pe=t}};function Sd(n){return te(n.integerValue||n.doubleValue)}function mf(n){return gu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ay(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Qt&&i instanceof Qt||r instanceof Jt&&i instanceof Jt?En(r.elements,i.elements,Je):r instanceof Pn&&i instanceof Pn?Je(r.Pe,i.Pe):r instanceof Rn&&i instanceof Rn}(n.transform,e.transform)}var ic=class{constructor(e,t){this.version=e,this.transformResults=t}},le=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ss(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Cn=class{};function gf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Xt(n.key,le.none()):new Yt(n.key,n.data,le.none());{let t=n.data,r=Pe.empty(),i=new we(Ne.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ye(n.key,r,new Me(i.toArray()),le.none())}}function by(n,e,t){n instanceof Yt?function(i,o,a){let c=i.value.clone(),l=Pd(i.fieldTransforms,o,a.transformResults);c.setAll(l),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Ye?function(i,o,a){if(!ss(i.precondition,o))return void o.convertToUnknownDocument(a.version);let c=Pd(i.fieldTransforms,o,a.transformResults),l=o.data;l.setAll(_f(i)),l.setAll(c),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Rr(n,e,t,r){return n instanceof Yt?function(o,a,c,l){if(!ss(o.precondition,a))return c;let d=o.value.clone(),p=Cd(o.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ye?function(o,a,c,l){if(!ss(o.precondition,a))return c;let d=Cd(o.fieldTransforms,l,a),p=a.data;return p.setAll(_f(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(o,a,c){return ss(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Sy(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),o=df(r.transform,i||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function Rd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&En(r,i,(o,a)=>Ay(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Yt=class extends Cn{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Ye=class extends Cn{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function _f(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Pd(n,e,t){let r=new Map;$(n.length===t.length);for(let i=0;i<t.length;i++){let o=n[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,Ty(a,c,t[i]))}return r}function Cd(n,e,t){let r=new Map;for(let i of n){let o=i.transform,a=t.data.field(i.field);r.set(i.field,Ey(o,a,e))}return r}var Xt=class extends Cn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},ps=class extends Cn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var sc=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let o=this.mutations[i];o.key.isEqual(e.key)&&by(o,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Rr(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Rr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=lf();return this.mutations.forEach(i=>{let o=e.get(i.key),a=o.overlayedDocument,c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;let l=gf(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,(t,r)=>Rd(t,r))&&En(this.baseMutations,e.baseMutations,(t,r)=>Rd(t,r))}},oc=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){$(e.mutations.length===r.length);let i=function(){return _y}(),o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new n(e,t,r,i)}};var ac=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var cc=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ie,K;function yf(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function vf(n){if(n===void 0)return ot("GRPC error has no .code"),R.UNKNOWN;switch(n){case ie.OK:return R.OK;case ie.CANCELLED:return R.CANCELLED;case ie.UNKNOWN:return R.UNKNOWN;case ie.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ie.INTERNAL:return R.INTERNAL;case ie.UNAVAILABLE:return R.UNAVAILABLE;case ie.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ie.NOT_FOUND:return R.NOT_FOUND;case ie.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ie.ABORTED:return R.ABORTED;case ie.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ie.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(K=ie||(ie={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";var Dd=null;function Ry(){return new TextEncoder}var Py=new It([4294967295,4294967295],0);function Nd(n){let e=Ry().encode(n),t=new Sa;return t.update(e),new Uint8Array(t.digest())}function kd(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new It([t,r],0),new It([i,o],0)]}var uc=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gt(`Invalid padding: ${t}`);if(r<0)throw new Gt(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gt(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gt(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=It.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(It.fromNumber(r)));return i.compare(Py)===1&&(i=new It([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;let t=Nd(e),[r,i]=kd(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new n(o,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;let t=Nd(e),[r,i]=kd(t);for(let o=0;o<this.hashCount;o++){let a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Gt=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var ms=class n{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Or.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(F.min(),i,new re(H),ct(),j())}},Or=class n{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,j(),j(),j())}};var vn=class{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}},gs=class{constructor(e,t){this.targetId=e,this.me=t}},_s=class{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},ys=class{constructor(){this.fe=0,this.ge=xd(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=j(),t=j(),r=j();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Or(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=xd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}},lc=class{constructor(e){this.Le=e,this.Be=new Map,this.ke=ct(),this.qe=Od(),this.Qe=new re(H)}Ke(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{let r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){let t=e.targetId,r=e.me.count,i=this.Je(t);if(i){let o=i.target;if(nc(o))if(r===0){let a=new L(o.path);this.Ue(t,a,Oe.newNoDocument(a,F.min()))}else $(r===1);else{let a=this.Ye(t);if(a!==r){let c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}Dd?.et(function(p,y,I,S,C){var O,N,B,z,G,Y;let Ae={localCacheCount:p,existenceFilterCount:y.count,databaseId:I.database,projectId:I.projectId},Q=y.unchangedNames;return Q&&(Ae.bloomFilter={applied:C===0,hashCount:(O=Q?.hashCount)!==null&&O!==void 0?O:0,bitmapLength:(z=(B=(N=Q?.bits)===null||N===void 0?void 0:N.bitmap)===null||B===void 0?void 0:B.length)!==null&&z!==void 0?z:0,padding:(Y=(G=Q?.bits)===null||G===void 0?void 0:G.padding)!==null&&Y!==void 0?Y:0,mightContain:w=>{var m;return(m=S?.mightContain(w))!==null&&m!==void 0&&m}}),Ae}(a,e.me,this.Le.tt(),c,l))}}}}Ze(e){let t=e.me.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t,a,c;try{a=At(r).toUint8Array()}catch(l){if(l instanceof ls)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new uc(a,i,o)}catch(l){return wn(l instanceof Gt?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){let r=this.Le.getRemoteKeysForTarget(t),i=0;return r.forEach(o=>{let a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),i++)}),i}rt(e){let t=new Map;this.Be.forEach((o,a)=>{let c=this.Je(a);if(c){if(o.current&&nc(c.target)){let l=new L(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Oe.newNoDocument(l,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=j();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(l=>{let d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));let i=new ms(e,t,this.Qe,this.ke,r);return this.ke=ct(),this.qe=Od(),this.Qe=new re(H),i}$e(e,t){if(!this.ze(e))return;let r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;let i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){let t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ys,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new we(H),this.qe=this.qe.insert(e,t)),t}ze(e){let t=this.Je(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}Je(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ys),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}};function Od(){return new re(L.comparator)}function xd(){return new re(L.comparator)}var Cy={asc:"ASCENDING",desc:"DESCENDING"},Dy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ny={and:"AND",or:"OR"},hc=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function dc(n,e){return n.useProto3Json||Qr(e)?e:{value:e}}function vs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function If(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ky(n,e){return vs(n,e.toTimestamp())}function ke(n){return $(!!n),F.fromTimestamp(function(t){let r=at(t);return new fe(r.seconds,r.nanos)}(n))}function Iu(n,e){return fc(n,e).canonicalString()}function fc(n,e){let t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function wf(n){let e=Z.fromString(n);return $(Rf(e)),e}function Is(n,e){return Iu(n.databaseId,e.path)}function Pr(n,e){let t=wf(e);if(t.get(1)!==n.databaseId.projectId)throw new k(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Tf(t))}function Ef(n,e){return Iu(n.databaseId,e)}function Oy(n){let e=wf(n);return e.length===4?Z.emptyPath():Tf(e)}function pc(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tf(n){return $(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Vd(n,e,t){return{name:Is(n,e),fields:t.value.mapValue.fields}}function xy(n,e){return"found"in e?function(r,i){$(!!i.found),i.found.name,i.found.updateTime;let o=Pr(r,i.found.name),a=ke(i.found.updateTime),c=i.found.createTime?ke(i.found.createTime):F.min(),l=new Pe({mapValue:{fields:i.found.fields}});return Oe.newFoundDocument(o,a,c,l)}(n,e):"missing"in e?function(r,i){$(!!i.missing),$(!!i.readTime);let o=Pr(r,i.missing),a=ke(i.readTime);return Oe.newNoDocument(o,a)}(n,e):M()}function Vy(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?($(p===void 0||typeof p=="string"),Te.fromBase64String(p||"")):($(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Te.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){let p=d.code===void 0?R.UNKNOWN:vf(d.code);return new k(p,d.message||"")}(a);t=new _s(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Pr(n,r.document.name),o=ke(r.document.updateTime),a=r.document.createTime?ke(r.document.createTime):F.min(),c=new Pe({mapValue:{fields:r.document.fields}}),l=Oe.newFoundDocument(i,o,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new vn(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Pr(n,r.document),o=r.readTime?ke(r.readTime):F.min(),a=Oe.newNoDocument(i,o),c=r.removedTargetIds||[];t=new vn([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Pr(n,r.document),o=r.removedTargetIds||[];t=new vn([],o,i,null)}else{if(!("filter"in e))return M();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:o}=r,a=new cc(i,o),c=r.targetId;t=new gs(c,a)}}return t}function Af(n,e){let t;if(e instanceof Yt)t={update:Vd(n,e.key,e.value)};else if(e instanceof Xt)t={delete:Is(n,e.key)};else if(e instanceof Ye)t={update:Vd(n,e.key,e.data),updateMask:Gy(e.fieldMask)};else{if(!(e instanceof ps))return M();t={verify:Is(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){let c=a.transform;if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Jt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw M()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:ky(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,e.precondition)),t}function Ly(n,e){return n&&n.length>0?($(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?ke(i.updateTime):ke(o);return a.isEqual(F.min())&&(a=ke(o)),new ic(a,i.transformResults||[])}(t,e))):[]}function My(n,e){return{documents:[Ef(n,e.path)]}}function Fy(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ef(n,i);let o=function(d){if(d.length!==0)return Sf(ze.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);let a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:gn(I.field),direction:qy(I.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=dc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Uy(n){let e=Oy(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){$(r===1);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(y){let I=bf(y);return I instanceof ze&&ef(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(C){return new Ht(_n(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(y){let I;return I=typeof y=="object"?y.value:y,Qr(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(y){let I=!!y.before,S=y.values||[];return new bn(S,I)}(t.startAt));let d=null;return t.endAt&&(d=function(y){let I=!y.before,S=y.values||[];return new bn(S,I)}(t.endAt)),dy(e,i,a,o,c,"F",l,d)}function By(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=_n(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=_n(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=_n(t.unaryFilter.field);return oe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=_n(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(t){return oe.create(_n(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(r=>bf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(n):M()}function qy(n){return Cy[n]}function jy(n){return Dy[n]}function zy(n){return Ny[n]}function gn(n){return{fieldPath:n.canonicalString()}}function _n(n){return Ne.fromServerFormat(n.fieldPath)}function Sf(n){return n instanceof oe?function(t){if(t.op==="=="){if(wd(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(Id(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wd(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(Id(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:jy(t.op),value:t.value}}}(n):n instanceof ze?function(t){let r=t.getFilters().map(i=>Sf(i));return r.length===1?r[0]:{compositeFilter:{op:zy(t.op),filters:r}}}(n):M()}function Gy(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Rf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var xr=class n{constructor(e,t,r,i,o=F.min(),a=F.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var mc=class{constructor(e){this.ct=e}};function Ky(n){let e=Uy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fs(e,e.limit,"L"):e}var ws=class{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(te(e.integerValue));else if("doubleValue"in e){let r=te(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Dr(r)?t.At(0):t.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(t,20),typeof r=="string"&&(r=at(r)),t.Rt(`${r.seconds||""}`),t.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(At(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?Yd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Jd(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):M()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){let r=e.fields||{};this.dt(t,55);for(let i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}wt(e,t){var r,i;let o=e.fields||{};this.dt(t,53);let a="value",c=((i=(r=o[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(te(c)),this.Vt(a,t),this.Tt(o[a],t)}bt(e,t){let r=e.values||[];this.dt(t,50);for(let i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),L.fromName(e).path.forEach(r=>{this.dt(t,60),this.Dt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}};ws.vt=new ws;var gc=class{constructor(){this.un=new _c}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve($t.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}},_c=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new we(Z.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(Z.comparator)).toArray()}};var Mw=new Uint8Array(0);var We=class n{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(41943040,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);var Vr=class n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new n(0)}static kn(){return new n(-1)}};var yc=class{constructor(){this.changes=new St(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var vc=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Ic=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Rr(r.mutation,i,Me.empty(),fe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){let i=zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Tr();return o.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){let i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let o=ct(),a=Sr(),c=function(){return Sr()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ye)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Rr(p.mutation,d,p.mutation.getFieldMask(),fe.now())):a.set(d.key,Me.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return c.set(d,new vc(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){let r=Sr(),i=new re((a,c)=>a-c),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||Me.empty();p=c.applyToLocalView(d,p),r.set(l,p);let y=(i.get(c.batchId)||j()).add(l);i=i.insert(c.batchId,y)})}).next(()=>{let a=[],c=i.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,p=l.value,y=lf();p.forEach(I=>{if(!o.has(I)){let S=gf(t.get(I),r.get(I));S!==null&&y.set(I,S),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{let a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):P.resolve(zt()),c=-1,l=o;return a.next(d=>P.forEach(d,(p,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{l=l.insert(p,I)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,j())).next(p=>({batchId:c,changes:uf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=Tr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let o=t.collectionGroup,a=Tr();return this.indexManager.getCollectionParents(e,o).next(c=>P.forEach(c,l=>{let d=function(y,I){return new bt(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,Oe.newInvalidDocument(p)))});let c=Tr();return a.forEach((l,d)=>{let p=o.get(l);p!==void 0&&Rr(p.mutation,d,Me.empty(),fe.now()),js(t,d)&&(c=c.insert(l,d))}),c})}};var wc=class{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ke(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Ky(i.bundledQuery),readTime:ke(i.readTime)}}(t)),P.resolve()}};var Ec=class{constructor(){this.overlays=new re(L.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){let r=zt();return P.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){let i=zt(),o=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new re((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=zt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let c=zt(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return P.resolve(c)}ht(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ac(t,r));let o=this.Ir.get(t);o===void 0&&(o=j(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}};var Tc=class{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}};var Lr=class{constructor(){this.Tr=new we(se.Er),this.dr=new we(se.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){let r=new se(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new se(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){let t=new L(new Z([])),r=new se(t,e),i=new se(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){let t=new L(new Z([])),r=new se(t,e),i=new se(t,e+1),o=j();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){let t=new se(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},se=class{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||L.comparator(e.key,t.key)}};var Ac=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new we(se.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new sc(o,t,r,i);this.mutationQueue.push(a);for(let c of i)this.br=this.br.add(new se(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.vr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new se(t,0),i=new se(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{let c=this.Dr(a.wr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new we(H);return t.forEach(i=>{let o=new se(i,0),a=new se(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,o=r;L.isDocumentKey(o)||(o=o.child(""));let a=new se(new L(o),0),c=new we(H);return this.br.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(l.wr)),!0)},a),P.resolve(this.Cr(c))}Cr(e){let t=[];return e.forEach(r=>{let i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){$(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,i=>{let o=new se(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){let r=new se(t,0),i=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){let t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var bc=class{constructor(e){this.Mr=e,this.docs=function(){return new re(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(i=>{let o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Oe.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=ct(),a=t.path,c=new L(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ty(ey(p),r)<=0||(i.has(p.key)||js(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,i){M()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Sc(this)}getSize(e){return P.resolve(this.size)}},Sc=class extends yc{constructor(e){super(),this.cr=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}};var Rc=class{constructor(e){this.persistence=e,this.Nr=new St(t=>_u(t),yu),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lr,this.targetCount=0,this.kr=Vr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.kr=new Vr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0,o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){let r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);let i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}};var Pc=class{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Cr(0),this.Kr=!1,this.Kr=!0,this.$r=new Tc,this.referenceDelegate=e(this),this.Ur=new Rc(this),this.indexManager=new gc,this.remoteDocumentCache=function(i){return new bc(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mc(t),this.Gr=new wc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ec,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Ac(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);let i=new Cc(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}},Cc=class extends za{constructor(e){super(),this.currentSequenceNumber=e}},Dc=class n{constructor(e){this.persistence=e,this.Jr=new Lr,this.Yr=null}static Zr(e){return new n(e)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{let i=L.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,F.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}};var Nc=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=j(),i=j();for(let o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new n(e,t.fromCache,r,i)}};var kc=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Oc=class{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jl()?8:ry(ae())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){let o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new kc;return this.Xi(e,t,a).next(c=>{if(o.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Er()<=q.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Er()<=q.DEBUG&&x("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Er()<=q.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):P.resolve())}Yi(e,t){if(bd(t))return P.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=fs(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{let a=j(...o);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.ts(t,c);return this.ns(t,d,a,l.readTime)?this.Yi(e,fs(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,i){return bd(t)||i.isEqual(F.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(o=>{let a=this.ts(t,o);return this.ns(t,a,r,i)?P.resolve(null):(Er()<=q.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(t)),this.rs(e,a,t,Z_(i,-1)).next(c=>c))})}ts(e,t){let r=new we(af(e));return t.forEach((i,o)=>{js(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Er()<=q.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",mn(t)),this.Ji.getDocumentsMatchingQuery(e,t,$t.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}};var xc=class{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new re(H),this._s=new St(o=>_u(o),yu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ic(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}};function $y(n,e,t,r){return new xc(n,e,t,r)}async function Pf(n,e){let t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{let a=[],c=[],l=j();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of o){c.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Wy(n,e){let t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,p){let y=d.batch,I=y.keys(),S=P.resolve();return I.forEach(C=>{S=S.next(()=>p.getEntry(l,C)).next(O=>{let N=d.docVersions.get(C);$(N!==null),O.version.compareTo(N)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Cf(n){let e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Hy(n,e){let t=U(n),r=e.snapshotVersion,i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;let c=[];e.targetChanges.forEach((p,y)=>{let I=i.get(y);if(!I)return;c.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,y)));let S=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(Te.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(y,S),function(O,N,B){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(I,S,p)&&c.push(t.Ur.updateTargetData(o,S))});let l=ct(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(Qy(o,a,e.documentUpdates).next(p=>{l=p.Ps,d=p.Is})),!r.isEqual(F.min())){let p=t.Ur.getLastRemoteSnapshotVersion(o).next(y=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(t.os=i,o))}function Qy(n,e,t){let r=j(),i=j();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=ct();return t.forEach((c,l)=>{let d=o.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:i}})}function Jy(n,e){let t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Yy(n,e){let t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new xr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Vc(n,e,t){let r=U(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Hr(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ld(n,e,t){let r=U(n),i=F.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let y=U(l),I=y._s.get(p);return I!==void 0?P.resolve(y.os.get(I)):y.Ur.getTargetData(d,p)}(r,a,Qe(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:F.min(),t?o:j())).next(c=>(Xy(r,py(e),c),{documents:c,Ts:o})))}function Xy(n,e,t){let r=n.us.get(e)||F.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}var Es=class{constructor(){this.activeTargetIds=Iy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Lc=class{constructor(){this.so=new Es,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Es,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Mc=class{_o(e){}shutdown(){}};var Ts=class{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.ho)e(0)}lo(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var rs=null;function ka(){return rs===null?rs=function(){return 268435456+Math.round(2147483648*Math.random())}():rs++,"0x"+rs.toString(16)}var Zy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var Fc=class{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}};var Ie="WebChannelConnection",Uc=class extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){let c=ka(),l=this.xo(t,r.toUriEncodedString());x("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);let d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,l,d,i).then(p=>(x("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw wn("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",l,"request:",i),p})}Lo(t,r,i,o,a,c){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ln}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){let i=Zy[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){let o=ka();return new Promise((a,c)=>{let l=new Ra;l.setWithCredentials(!0),l.listenOnce(Pa.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wr.NO_ERROR:let p=l.getResponseJson();x(Ie,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case wr.TIMEOUT:x(Ie,`RPC '${e}' ${o} timed out`),c(new k(R.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:let y=l.getStatus();if(x(Ie,`RPC '${e}' ${o} failed with status:`,y,"response text:",l.getResponseText()),y>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);let S=I?.error;if(S&&S.status&&S.message){let C=function(N){let B=N.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(S.status);c(new k(C,S.message))}else c(new k(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new k(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{x(Ie,`RPC '${e}' ${o} completed.`)}});let d=JSON.stringify(i);x(Ie,`RPC '${e}' ${o} sending request:`,i),l.send(t,"POST",d,r,15)})}Bo(e,t,r){let i=ka(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Na(),c=Da(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=o.join("");x(Ie,`Creating RPC '${e}' stream ${i}: ${p}`,l);let y=a.createWebChannel(p,l),I=!1,S=!1,C=new Fc({Io:N=>{S?x(Ie,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(I||(x(Ie,`Opening RPC '${e}' stream ${i} transport.`),y.open(),I=!0),x(Ie,`RPC '${e}' stream ${i} sending:`,N),y.send(N))},To:()=>y.close()}),O=(N,B,z)=>{N.listen(B,G=>{try{z(G)}catch(Y){setTimeout(()=>{throw Y},0)}})};return O(y,pn.EventType.OPEN,()=>{S||(x(Ie,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),O(y,pn.EventType.CLOSE,()=>{S||(S=!0,x(Ie,`RPC '${e}' stream ${i} transport closed`),C.So())}),O(y,pn.EventType.ERROR,N=>{S||(S=!0,wn(Ie,`RPC '${e}' stream ${i} transport errored:`,N),C.So(new k(R.UNAVAILABLE,"The operation could not be completed")))}),O(y,pn.EventType.MESSAGE,N=>{var B;if(!S){let z=N.data[0];$(!!z);let G=z,Y=G.error||((B=G[0])===null||B===void 0?void 0:B.error);if(Y){x(Ie,`RPC '${e}' stream ${i} received error:`,Y);let Ae=Y.status,Q=function(_){let v=ie[_];if(v!==void 0)return vf(v)}(Ae),w=Y.message;Q===void 0&&(Q=R.INTERNAL,w="Unknown error status: "+Ae+" with message "+Y.message),S=!0,C.So(new k(Q,w)),y.close()}else x(Ie,`RPC '${e}' stream ${i} received:`,z),C.bo(z)}}),O(c,Ca.STAT_EVENT,N=>{N.stat===ts.PROXY?x(Ie,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ts.NOPROXY&&x(Ie,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}};function Oa(){return typeof document<"u"?document:null}function zs(n){return new hc(n,!0)}var Mr=class{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();let t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}};var As=class{constructor(e,t,r,i,o,a,c,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mr(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;let e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{let i=new k(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){let r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Bc=class extends As{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();let t=Vy(this.serializer,e),r=function(o){if(!("targetChange"in o))return F.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?ke(a.readTime):F.min()}(e);return this.listener.d_(t,r)}A_(e){let t={};t.database=pc(this.serializer),t.addTarget=function(o,a){let c,l=a.target;if(c=nc(l)?{documents:My(o,l)}:{query:Fy(o,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=If(o,a.resumeToken);let d=dc(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=vs(o,a.snapshotVersion.toTimestamp());let d=dc(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);let r=By(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){let t={};t.database=pc(this.serializer),t.removeTarget=e,this.a_(t)}},qc=class extends As{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return $(!!e.streamToken),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){$(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();let t=Ly(e.writeResults,e.commitTime),r=ke(e.commitTime);return this.listener.g_(r,t)}p_(){let e={};e.database=pc(this.serializer),this.a_(e)}m_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Af(this.serializer,r))};this.a_(t)}};var jc=class extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new k(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,fc(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(R.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,fc(t,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(R.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}},zc=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ot(t),this.D_=!1):x("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}};var Gc=class{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{en(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(l){let d=U(l);d.L_.add(4),await Jr(d),d.q_.set("Unknown"),d.L_.delete(4),await Gs(d)}(this))})}),this.q_=new zc(r,i)}};async function Gs(n){if(en(n))for(let e of n.B_)await e(!0)}async function Jr(n){for(let e of n.B_)await e(!1)}function Df(n,e){let t=U(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Au(t)?Tu(t):Mn(t).r_()&&Eu(t,e))}function wu(n,e){let t=U(n),r=Mn(t);t.N_.delete(e),r.r_()&&Nf(t,e),t.N_.size===0&&(r.r_()?r.o_():en(t)&&t.q_.set("Unknown"))}function Eu(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mn(n).A_(e)}function Nf(n,e){n.Q_.xe(e),Mn(n).R_(e)}function Tu(n){n.Q_=new lc({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Mn(n).start(),n.q_.v_()}function Au(n){return en(n)&&!Mn(n).n_()&&n.N_.size>0}function en(n){return U(n).L_.size===0}function kf(n){n.Q_=void 0}async function ev(n){n.q_.set("Online")}async function tv(n){n.N_.forEach((e,t)=>{Eu(n,e)})}async function nv(n,e){kf(n),Au(n)?(n.q_.M_(e),Tu(n)):n.q_.set("Unknown")}async function rv(n,e,t){if(n.q_.set("Online"),e instanceof _s&&e.state===2&&e.cause)try{await async function(i,o){let a=o.cause;for(let c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bs(n,r)}else if(e instanceof vn?n.Q_.Ke(e):e instanceof gs?n.Q_.He(e):n.Q_.We(e),!t.isEqual(F.min()))try{let r=await Cf(n.localStore);t.compareTo(r)>=0&&await function(o,a){let c=o.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{let p=o.N_.get(l);if(!p)return;o.N_.set(l,p.withResumeToken(Te.EMPTY_BYTE_STRING,p.snapshotVersion)),Nf(o,l);let y=new xr(p.target,l,d,p.sequenceNumber);Eu(o,y)}),o.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await bs(n,r)}}async function bs(n,e,t){if(!Hr(e))throw e;n.L_.add(1),await Jr(n),n.q_.set("Offline"),t||(t=()=>Cf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Gs(n)})}function Of(n,e){return e().catch(t=>bs(n,t,e))}async function Ks(n){let e=U(n),t=Rt(e),r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;iv(e);)try{let i=await Jy(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,sv(e,i)}catch(i){await bs(e,i)}xf(e)&&Vf(e)}function iv(n){return en(n)&&n.O_.length<10}function sv(n,e){n.O_.push(e);let t=Rt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function xf(n){return en(n)&&!Rt(n).n_()&&n.O_.length>0}function Vf(n){Rt(n).start()}async function ov(n){Rt(n).p_()}async function av(n){let e=Rt(n);for(let t of n.O_)e.m_(t.mutations)}async function cv(n,e,t){let r=n.O_.shift(),i=oc.from(r,e,t);await Of(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ks(n)}async function uv(n,e){e&&Rt(n).V_&&await async function(r,i){if(function(a){return yf(a)&&a!==R.ABORTED}(i.code)){let o=r.O_.shift();Rt(r).s_(),await Of(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ks(r)}}(n,e),xf(n)&&Vf(n)}async function Md(n,e){let t=U(n);t.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");let r=en(t);t.L_.add(3),await Jr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Gs(t)}async function lv(n,e){let t=U(n);e?(t.L_.delete(2),await Gs(t)):e||(t.L_.add(2),await Jr(t),t.q_.set("Unknown"))}function Mn(n){return n.K_||(n.K_=function(t,r,i){let o=U(t);return o.w_(),new Bc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:ev.bind(null,n),Ro:tv.bind(null,n),mo:nv.bind(null,n),d_:rv.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Au(n)?Tu(n):n.q_.set("Unknown")):(await n.K_.stop(),kf(n))})),n.K_}function Rt(n){return n.U_||(n.U_=function(t,r,i){let o=U(t);return o.w_(),new qc(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ov.bind(null,n),mo:uv.bind(null,n),f_:av.bind(null,n),g_:cv.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ks(n)):(await n.U_.stop(),n.O_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}var Kc=class n{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){let a=Date.now()+r,c=new n(e,t,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function bu(n,e){if(ot("AsyncQueue",`${e}: ${n}`),Hr(n))return new k(R.UNAVAILABLE,`${e}: ${n}`);throw n}var Ss=class n{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Tr(),this.sortedSet=new re(this.comparator)}static emptySet(e){return new n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Rs=class{constructor(){this.W_=new re(L.comparator)}track(e){let t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):M():this.W_=this.W_.insert(t,e)}G_(){let e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}},Dn=class n{constructor(e,t,r,i,o,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Ss.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var $c=class{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}},Wc=class{constructor(){this.queries=Fd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){let i=U(t),o=i.queries;i.queries=Fd(),o.forEach((a,c)=>{for(let l of c.j_)l.onError(r)})})(this,new k(R.ABORTED,"Firestore shutting down"))}};function Fd(){return new St(n=>of(n),qs)}async function Su(n,e){let t=U(n),r=3,i=e.query,o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new $c,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let c=bu(a,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Pu(t)}async function Ru(n,e){let t=U(n),r=e.query,i=3,o=t.queries.get(r);if(o){let a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function hv(n,e){let t=U(n),r=!1;for(let i of e){let o=i.query,a=t.queries.get(o);if(a){for(let c of a.j_)c.X_(i)&&(r=!0);a.z_=i}}r&&Pu(t)}function dv(n,e,t){let r=U(n),i=r.queries.get(e);if(i)for(let o of i.j_)o.onError(t);r.queries.delete(e)}function Pu(n){n.Y_.forEach(e=>{e.next()})}var Hc,Ud;(Ud=Hc||(Hc={})).ea="default",Ud.Cache="cache";var Fr=class{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Dn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;let r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;let t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Dn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Hc.Cache}};var Ps=class{constructor(e){this.key=e}},Cs=class{constructor(e){this.key=e}},Qc=class{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=j(),this.mutatedKeys=j(),this.Aa=af(e),this.Ra=new Ss(this.Aa)}get Va(){return this.Ta}ma(e,t){let r=t?t.fa:new Rs,i=t?t.Ra:this.Ra,o=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{let I=i.get(p),S=js(this.query,y)?y:null,C=!!I&&this.mutatedKeys.has(I.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),N=!1;I&&S?I.data.isEqual(S.data)?C!==O&&(r.track({type:3,doc:S}),N=!0):this.ga(I,S)||(r.track({type:2,doc:S}),N=!0,(l&&this.Aa(S,l)>0||d&&this.Aa(S,d)<0)&&(c=!0)):!I&&S?(r.track({type:0,doc:S}),N=!0):I&&!S&&(r.track({type:1,doc:I}),N=!0,(l||d)&&(c=!0)),N&&(S?(a=a.add(S),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;let a=e.fa.G_();a.sort((p,y)=>function(S,C){let O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return O(S)-O(C)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),i=i!=null&&i;let c=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Dn(this.query,e.Ra,o,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rs,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];let e=this.da;this.da=j(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});let t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Cs(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Ps(r))}),t}ba(e){this.Ta=e.Ts,this.da=j();let t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Dn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}},Jc=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Yc=class{constructor(e){this.key=e,this.va=!1}},Xc=class{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new St(c=>of(c),qs),this.Ma=new Map,this.xa=new Set,this.Oa=new re(L.comparator),this.Na=new Map,this.La=new Lr,this.Ba={},this.ka=new Map,this.qa=Vr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}};async function fv(n,e,t=!0){let r=qf(n),i,o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Lf(r,e,t,!0),i}async function pv(n,e){let t=qf(n);await Lf(t,e,!0,!1)}async function Lf(n,e,t,r){let i=await Yy(n.localStore,Qe(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t),c;return r&&(c=await mv(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Df(n.remoteStore,i),c}async function mv(n,e,t,r,i){n.Ka=(y,I,S)=>async function(O,N,B,z){let G=N.view.ma(B);G.ns&&(G=await Ld(O.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,G)));let Y=z&&z.targetChanges.get(N.targetId),Ae=z&&z.targetMismatches.get(N.targetId)!=null,Q=N.view.applyChanges(G,O.isPrimaryClient,Y,Ae);return qd(O,N.targetId,Q.wa),Q.snapshot}(n,y,I,S);let o=await Ld(n.localStore,e,!0),a=new Qc(e,o.Ts),c=a.ma(o.documents),l=Or.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,l);qd(n,t,d.wa);let p=new Jc(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function gv(n,e,t){let r=U(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!qs(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&wu(r.remoteStore,i.targetId),Zc(r,i.targetId)}).catch(Wr)):(Zc(r,i.targetId),await Vc(r.localStore,i.targetId,!0))}async function _v(n,e){let t=U(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wu(t.remoteStore,r.targetId))}async function yv(n,e,t){let r=bv(n);try{let i=await function(a,c){let l=U(a),d=fe.now(),p=c.reduce((S,C)=>S.add(C.key),j()),y,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=ct(),O=j();return l.cs.getEntries(S,p).next(N=>{C=N,C.forEach((B,z)=>{z.isValidDocument()||(O=O.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,C)).next(N=>{y=N;let B=[];for(let z of c){let G=Sy(z,y.get(z.key).overlayedDocument);G!=null&&B.push(new Ye(z.key,G,Xd(G.value.mapValue),le.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,B,c)}).next(N=>{I=N;let B=N.applyToLocalDocumentSet(y,O);return l.documentOverlayCache.saveOverlays(S,N.batchId,B)})}).then(()=>({batchId:I.batchId,changes:uf(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new re(H)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await Yr(r,i.changes),await Ks(r.remoteStore)}catch(i){let o=bu(i,"Failed to persist write");t.reject(o)}}async function Mf(n,e){let t=U(n);try{let r=await Hy(t.localStore,e);e.targetChanges.forEach((i,o)=>{let a=t.Na.get(o);a&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?$(a.va):i.removedDocuments.size>0&&($(a.va),a.va=!1))}),await Yr(t,r,e)}catch(r){await Wr(r)}}function Bd(n,e,t){let r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Fa.forEach((o,a)=>{let c=a.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){let l=U(a);l.onlineState=c;let d=!1;l.queries.forEach((p,y)=>{for(let I of y.j_)I.Z_(c)&&(d=!0)}),d&&Pu(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vv(n,e,t){let r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Na.get(e),o=i&&i.key;if(o){let a=new re(L.comparator);a=a.insert(o,Oe.newNoDocument(o,F.min()));let c=j().add(o),l=new ms(F.min(),new Map,new re(H),a,c);await Mf(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),Cu(r)}else await Vc(r.localStore,e,!1).then(()=>Zc(r,e,t)).catch(Wr)}async function Iv(n,e){let t=U(n),r=e.batch.batchId;try{let i=await Wy(t.localStore,e);Uf(t,r,null),Ff(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(t,i)}catch(i){await Wr(i)}}async function wv(n,e,t){let r=U(n);try{let i=await function(a,c){let l=U(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,c).next(y=>($(y!==null),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Uf(r,e,t),Ff(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Yr(r,i)}catch(i){await Wr(i)}}function Ff(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Uf(n,e,t){let r=U(n),i=r.Ba[r.currentUser.toKey()];if(i){let o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Zc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Bf(n,r)})}function Bf(n,e){n.xa.delete(e.path.canonicalString());let t=n.Oa.get(e);t!==null&&(wu(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Cu(n))}function qd(n,e,t){for(let r of t)r instanceof Ps?(n.La.addReference(r.key,e),Ev(n,r)):r instanceof Cs?(x("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Bf(n,r.key)):M()}function Ev(n,e){let t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(x("SyncEngine","New document in limbo: "+t),n.xa.add(r),Cu(n))}function Cu(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){let e=n.xa.values().next().value;n.xa.delete(e);let t=new L(Z.fromString(e)),r=n.qa.next();n.Na.set(r,new Yc(t)),n.Oa=n.Oa.insert(t,r),Df(n.remoteStore,new xr(Qe(Bs(t.path)),r,"TargetPurposeLimboResolution",Cr.oe))}}async function Yr(n,e,t){let r=U(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let y=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){i.push(d);let y=Nc.Wi(l.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(l,d){let p=U(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>P.forEach(d,I=>P.forEach(I.$i,S=>p.persistence.referenceDelegate.addReference(y,I.targetId,S)).next(()=>P.forEach(I.Ui,S=>p.persistence.referenceDelegate.removeReference(y,I.targetId,S)))))}catch(y){if(!Hr(y))throw y;x("LocalStore","Failed to update sequence numbers: "+y)}for(let y of d){let I=y.targetId;if(!y.fromCache){let S=p.os.get(I),C=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(I,O)}}}(r.localStore,o))}async function Tv(n,e){let t=U(n);if(!t.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());let r=await Pf(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(c=>{c.forEach(l=>{l.reject(new k(R.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yr(t,r.hs)}}function Av(n,e){let t=U(n),r=t.Na.get(e);if(r&&r.va)return j().add(r.key);{let i=j(),o=t.Ma.get(e);if(!o)return i;for(let a of o){let c=t.Fa.get(a);i=i.unionWith(c.view.Va)}return i}}function qf(n){let e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Av.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vv.bind(null,e),e.Ca.d_=hv.bind(null,e.eventManager),e.Ca.$a=dv.bind(null,e.eventManager),e}function bv(n){let e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Iv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wv.bind(null,e),e}var Nn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zs(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return $y(this.persistence,new Oc,e.initialUser,this.serializer)}Ga(e){return new Pc(Dc.Zr,this.serializer)}Wa(e){return new Lc}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Nn.provider={build:()=>new Nn};var Ur=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tv.bind(null,this.syncEngine),await lv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Wc}()}createDatastore(e){let t=zs(e.databaseInfo.databaseId),r=function(o){return new Uc(o)}(e.databaseInfo);return function(o,a,c,l){return new jc(o,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,c){return new Gc(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Bd(this.syncEngine,t,0),function(){return Ts.D()?new Ts:new Mc}())}createSyncEngine(e,t){return function(i,o,a,c,l,d,p){let y=new Xc(i,o,a,c,l,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let o=U(i);x("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Jr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Ur.provider={build:()=>new Ur};var Br=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var eu=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new k(R.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(i,o){let a=U(i),c={documents:o.map(y=>Is(a.serializer,y))},l=await a.Lo("BatchGetDocuments",a.serializer.databaseId,Z.emptyPath(),c,o.length),d=new Map;l.forEach(y=>{let I=xy(a.serializer,y);d.set(I.key.toString(),I)});let p=[];return o.forEach(y=>{let I=d.get(y.toString());$(!!I),p.push(I)}),p}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Xt(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{let i=L.fromPath(r);this.mutations.push(new ps(i,this.precondition(i)))}),await async function(r,i){let o=U(r),a={writes:i.map(c=>Af(o.serializer,c))};await o.Mo("Commit",o.serializer.databaseId,Z.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw M();t=F.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new k(R.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(F.min())?le.exists(!1):le.updateTime(t):le.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(F.min()))throw new k(R.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return le.updateTime(t)}return le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};var tu=class{constructor(e,t,r,i,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=o,this._u=r.maxAttempts,this.t_=new Mr(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{let e=new eu(this.datastore),t=this.cu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{let t=this.updateFunction(e);return!Qr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){let t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!yf(t)}return!1}};var nu=class{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ue.UNAUTHENTICATED,this.clientId=as.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=bu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function xa(n,e){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jd(n,e){n.asyncQueue.verifyOperationInProgress();let t=await Sv(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Md(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Md(e.remoteStore,i)),n._onlineComponents=e}async function Sv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await xa(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await xa(n,new Nn)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await xa(n,new Nn);return n._offlineComponents}async function Du(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await jd(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await jd(n,new Ur))),n._onlineComponents}function Rv(n){return Du(n).then(e=>e.syncEngine)}function Pv(n){return Du(n).then(e=>e.datastore)}async function Ds(n){let e=await Du(n),t=e.eventManager;return t.onListen=fv.bind(null,e.syncEngine),t.onUnlisten=gv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_v.bind(null,e.syncEngine),t}function Cv(n,e,t={}){let r=new Fe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,d){let p=new Br({next:I=>{p.Za(),a.enqueueAndForget(()=>Ru(o,y));let S=I.docs.has(c);!S&&I.fromCache?d.reject(new k(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?d.reject(new k(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new Fr(Bs(c.path),p,{includeMetadataChanges:!0,_a:!0});return Su(o,y)}(await Ds(n),n.asyncQueue,e,t,r)),r.promise}function Dv(n,e,t={}){let r=new Fe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,l,d){let p=new Br({next:I=>{p.Za(),a.enqueueAndForget(()=>Ru(o,y)),I.fromCache&&l.source==="server"?d.reject(new k(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new Fr(c,p,{includeMetadataChanges:!0,_a:!0});return Su(o,y)}(await Ds(n),n.asyncQueue,e,t,r)),r.promise}function jf(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var zd=new Map;function zf(n,e,t){if(!t)throw new k(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Nv(n,e,t,r){if(e===!0&&r===!0)throw new k(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gd(n){if(!L.isDocumentKey(n))throw new k(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Kd(n){if(L.isDocumentKey(n))throw new k(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M()}function Ee(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=$s(n);throw new k(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Gf(n,e){if(e<=0)throw new k(R.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}var Ns=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},kn=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ns({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ns(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Va;switch(r.type){case"firstParty":return new Ua(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=zd.get(t);r&&(x("ComponentProvider","Removing Datastore"),zd.delete(t),r.terminate())}(this),Promise.resolve()}};function kv(n,e,t,r={}){var i;let o=(n=Ee(n,kn))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ue.MOCK_USER;else{c=Gl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new k(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ue(d)}n._authCredentials=new La(new os(c,l))}}var ut=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},pe=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}},Tt=class n extends ut{constructor(e,t,r){super(e,t,Bs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new L(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function tn(n,e,...t){if(n=ee(n),zf("collection","path",e),n instanceof kn){let r=Z.fromString(e,...t);return Kd(r),new Tt(n,null,r)}{if(!(n instanceof pe||n instanceof Tt))throw new k(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Z.fromString(e,...t));return Kd(r),new Tt(n.firestore,null,r)}}function Re(n,e,...t){if(n=ee(n),arguments.length===1&&(e=as.newId()),zf("doc","path",e),n instanceof kn){let r=Z.fromString(e,...t);return Gd(r),new pe(n,null,new L(r))}{if(!(n instanceof pe||n instanceof Tt))throw new k(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Z.fromString(e,...t));return Gd(r),new pe(n.firestore,n instanceof Tt?n.converter:null,new L(r))}}var ks=class{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mr(this,"async_queue_retry"),this.Vu=()=>{let r=Oa();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;let t=Oa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;let t=Oa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});let t=new Fe;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Hr(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){let t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;let i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);let i=Kc.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(let t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){let t=this.Tu.indexOf(e);this.Tu.splice(t,1)}};function $d(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}var xe=class extends kn{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ks,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new ks(e),this._firestoreClient=void 0,await e}}};function Kf(n,e){let t=typeof n=="object"?n:Ti(),r=typeof n=="string"?n:e||"(default)",i=ar(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let o=zl("firestore");o&&kv(i,...o)}return i}function Fn(n){if(n._terminated)throw new k(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ov(n),n._firestoreClient}function Ov(n){var e,t,r;let i=n._freezeSettings(),o=function(c,l,d,p){return new Ga(c,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,jf(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new nu(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var On=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Te.fromBase64String(e))}catch(t){throw new k(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var Pt=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var qr=class{constructor(e){this._methodName=e}};var jr=class{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}};var zr=class{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}};var xv=/^__.*__$/,ru=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ye(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yt(e,this.data,t,this.fieldTransforms)}},Os=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ye(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function $f(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}var iu=class n{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($f(this.Cu)&&xv.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}},su=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||zs(e)}Qu(e,t,r,i=!1){return new iu({Cu:e,methodName:t,qu:r,path:Ne.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Un(n){let e=n._freezeSettings(),t=zs(n._databaseId);return new su(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ws(n,e,t,r,i,o={}){let a=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);Ou("Data must be an object, but it was:",a,r);let c=Wf(r,a),l,d;if(o.merge)l=new Me(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){let p=[];for(let y of o.mergeFields){let I=ou(e,y,t);if(!a.contains(I))throw new k(R.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Qf(p,I)||p.push(I)}l=new Me(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new ru(new Pe(c),l,d)}var xs=class n extends qr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Nu(n,e,t,r){let i=n.Qu(1,e,t);Ou("Data must be an object, but it was:",i,r);let o=[],a=Pe.empty();Zt(r,(l,d)=>{let p=xu(e,l,t);d=ee(d);let y=i.Nu(p);if(d instanceof xs)o.push(p);else{let I=Xr(d,y);I!=null&&(o.push(p),a.set(p,I))}});let c=new Me(o);return new Os(a,c,i.fieldTransforms)}function ku(n,e,t,r,i,o){let a=n.Qu(1,e,t),c=[ou(e,r,t)],l=[i];if(o.length%2!=0)throw new k(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)c.push(ou(e,o[I])),l.push(o[I+1]);let d=[],p=Pe.empty();for(let I=c.length-1;I>=0;--I)if(!Qf(d,c[I])){let S=c[I],C=l[I];C=ee(C);let O=a.Nu(S);if(C instanceof xs)d.push(S);else{let N=Xr(C,O);N!=null&&(d.push(S),p.set(S,N))}}let y=new Me(d);return new Os(p,y,a.fieldTransforms)}function Vv(n,e,t,r=!1){return Xr(t,n.Qu(r?4:3,e))}function Xr(n,e){if(Hf(n=ee(n)))return Ou("Unsupported field value:",e,n),Wf(n,e);if(n instanceof qr)return function(r,i){if(!$f(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);let o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){let o=[],a=0;for(let c of r){let l=Xr(c,i.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let o=fe.fromDate(r);return{timestampValue:vs(i.serializer,o)}}if(r instanceof fe){let o=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vs(i.serializer,o)}}if(r instanceof jr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:If(i.serializer,r._byteString)};if(r instanceof pe){let o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Iu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof zr)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return vu(c.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${$s(r)}`)}(n,e)}function Wf(n,e){let t={};return Qd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(n,(r,i)=>{let o=Xr(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Hf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof jr||n instanceof On||n instanceof pe||n instanceof qr||n instanceof zr)}function Ou(n,e,t){if(!Hf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){let r=$s(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ou(n,e,t){if((e=ee(e))instanceof Pt)return e._internalPath;if(typeof e=="string")return xu(n,e);throw Vs("Field path arguments must be of type string or ",n,!1,void 0,t)}var Lv=new RegExp("[~\\*/\\[\\]]");function xu(n,e,t){if(e.search(Lv)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Pt(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vs(n,e,t,r,i){let o=r&&!r.isEmpty(),a=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(o||a)&&(l+=" (found",o&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new k(R.INVALID_ARGUMENT,c+n+l)}function Qf(n,e){return n.some(t=>t.isEqual(e))}var xn=class{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new au(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Hs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},au=class extends xn{data(){return super.data()}};function Hs(n,e){return typeof e=="string"?xu(n,e):e instanceof Pt?e._internalPath:e._delegate._internalPath}function Jf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Gr=class{},Kr=class extends Gr{};function Qs(n,e,...t){let r=[];e instanceof Gr&&r.push(e),r=r.concat(t),function(o){let a=o.filter(l=>l instanceof cu).length,c=o.filter(l=>l instanceof Ls).length;if(a>1||a>0&&c>0)throw new k(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)n=i._apply(n);return n}var Ls=class n extends Kr{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new n(e,t,r)}_apply(e){let t=this._parse(e);return ep(e._query,t),new ut(e.firestore,e.converter,rc(e._query,t))}_parse(e){let t=Un(e.firestore);return function(o,a,c,l,d,p,y){let I;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Hd(y,p);let S=[];for(let C of y)S.push(Wd(l,o,C));I={arrayValue:{values:S}}}else I=Wd(l,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Hd(y,p),I=Vv(c,a,y,p==="in"||p==="not-in");return oe.create(d,p,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}};function Js(n,e,t){let r=e,i=Hs("where",n);return Ls._create(i,r,t)}var cu=class n extends Gr{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new n(e,t)}_parse(e){let t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ze.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i,c=o.getFlattenedFilters();for(let l of c)ep(a,l),a=rc(a,l)}(e._query,t),new ut(e.firestore,e.converter,rc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var uu=class n extends Kr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new n(e,t)}_apply(e){let t=function(i,o,a){if(i.startAt!==null)throw new k(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new k(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ht(o,a)}(e._query,this._field,this._direction);return new ut(e.firestore,e.converter,function(i,o){let a=i.explicitOrderBy.concat([o]);return new bt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}};function Yf(n,e="asc"){let t=e,r=Hs("orderBy",n);return uu._create(r,t)}var Ms=class n extends Kr{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new n(e,t,r)}_apply(e){return new ut(e.firestore,e.converter,fs(e._query,this._limit,this._limitType))}};function Xf(n){return Gf("limit",n),Ms._create("limit",n,"F")}function Zf(n){return Gf("limitToLast",n),Ms._create("limitToLast",n,"L")}function Wd(n,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new k(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sf(e)&&t.indexOf("/")!==-1)throw new k(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);let r=e.path.child(Z.fromString(t));if(!L.isDocumentKey(r))throw new k(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vd(n,new L(r))}if(t instanceof pe)return vd(n,t._key);throw new k(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$s(t)}.`)}function Hd(n,e){if(!Array.isArray(n)||n.length===0)throw new k(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ep(n,e){let t=function(i,o){for(let a of i)for(let c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}var Fs=class{convertValue(e,t="none"){switch(Wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(At(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Zt(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;let o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>te(a.doubleValue));return new zr(o)}convertGeoPoint(e){return new jr(te(e.latitude),te(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=mu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nr(e));default:return null}}convertTimestamp(e){let t=at(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Z.fromString(e);$(Rf(r));let i=new hs(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(t)||ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}};function Ys(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var lu=class extends Fs{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}};var Et=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},$r=class extends xn{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new In(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(Hs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},In=class extends $r{data(e={}){return super.data(e)}},Us=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Et(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new In(this._firestore,this._userDataWriter,r.key,r,new Et(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{let l=new In(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Et(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{let l=new In(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Et(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Mv(c.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Mv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function Zr(n){n=Ee(n,pe);let e=Ee(n.firestore,xe);return Cv(Fn(e),n._key).then(t=>ip(e,n,t))}var Vn=class extends Fs{constructor(e){super(),this.firestore=e}convertBytes(e){return new On(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}};function Vu(n){n=Ee(n,ut);let e=Ee(n.firestore,xe),t=Fn(e),r=new Vn(e);return Jf(n._query),Dv(t,n._query).then(i=>new Us(e,r,n,i))}function Lu(n,e,t){n=Ee(n,pe);let r=Ee(n.firestore,xe),i=Ys(n.converter,e,t);return ei(r,[Ws(Un(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,le.none())])}function tp(n,e,t,...r){n=Ee(n,pe);let i=Ee(n.firestore,xe),o=Un(i),a;return a=typeof(e=ee(e))=="string"||e instanceof Pt?ku(o,"updateDoc",n._key,e,t,r):Nu(o,"updateDoc",n._key,e),ei(i,[a.toMutation(n._key,le.exists(!0))])}function np(n){return ei(Ee(n.firestore,xe),[new Xt(n._key,le.none())])}function rp(n,e){let t=Ee(n.firestore,xe),r=Re(n),i=Ys(n.converter,e);return ei(t,[Ws(Un(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,le.exists(!1))]).then(()=>r)}function Xs(n,...e){var t,r,i;n=ee(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||$d(e[a])||(o=e[a],a++);let c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if($d(e[a])){let y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let l,d,p;if(n instanceof pe)d=Ee(n.firestore,xe),p=Bs(n._key.path),l={next:y=>{e[a]&&e[a](ip(d,n,y))},error:e[a+1],complete:e[a+2]};else{let y=Ee(n,ut);d=Ee(y.firestore,xe),p=y._query;let I=new Vn(d);l={next:S=>{e[a]&&e[a](new Us(d,I,y,S))},error:e[a+1],complete:e[a+2]},Jf(n._query)}return function(I,S,C,O){let N=new Br(O),B=new Fr(S,N,C);return I.asyncQueue.enqueueAndForget(async()=>Su(await Ds(I),B)),()=>{N.Za(),I.asyncQueue.enqueueAndForget(async()=>Ru(await Ds(I),B))}}(Fn(d),p,c,l)}function ei(n,e){return function(r,i){let o=new Fe;return r.asyncQueue.enqueueAndForget(async()=>yv(await Rv(r),i,o)),o.promise}(Fn(n),e)}function ip(n,e,t){let r=t.docs.get(e._key),i=new Vn(n);return new $r(n,i,e._key,r,new Et(t.hasPendingWrites,t.fromCache),e.converter)}var Fv={maxAttempts:5};var hu=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Un(e)}set(e,t,r){this._verifyNotCommitted();let i=wt(e,this._firestore),o=Ys(i.converter,t,r),a=Ws(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,le.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let o=wt(e,this._firestore),a;return a=typeof(t=ee(t))=="string"||t instanceof Pt?ku(this._dataReader,"WriteBatch.update",o._key,t,r,i):Nu(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(a.toMutation(o._key,le.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=wt(e,this._firestore);return this._mutations=this._mutations.concat(new Xt(t._key,le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(R.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function wt(n,e){if((n=ee(n)).firestore!==e)throw new k(R.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}var du=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=Un(t)}get(t){let r=wt(t,this._firestore),i=new lu(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return M();let a=o[0];if(a.isFoundDocument())return new xn(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new xn(this._firestore,i,r._key,null,r.converter);throw M()})}set(t,r,i){let o=wt(t,this._firestore),a=Ys(o.converter,r,i),c=Ws(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,i);return this._transaction.set(o._key,c),this}update(t,r,i,...o){let a=wt(t,this._firestore),c;return c=typeof(r=ee(r))=="string"||r instanceof Pt?ku(this._dataReader,"Transaction.update",a._key,r,i,o):Nu(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,c),this}delete(t){let r=wt(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=wt(e,this._firestore),r=new Vn(this._firestore);return super.get(e).then(i=>new $r(this._firestore,r,t._key,i._document,new Et(!1,!1),t.converter))}};function sp(n,e,t){n=Ee(n,xe);let r=Object.assign(Object.assign({},Fv),t);return function(o){if(o.maxAttempts<1)throw new k(R.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,c){let l=new Fe;return o.asyncQueue.enqueueAndForget(async()=>{let d=await Pv(o);new tu(o.asyncQueue,d,c,a,l).au()}),l.promise}(Fn(n),i=>e(new du(n,i)),r)}function Mu(n){return Fn(n=Ee(n,xe)),new hu(n,e=>ei(n,e))}(function(e,t=!0){(function(i){Ln=i})(_t),gt(new Ve("firestore",(r,{instanceIdentifier:i,options:o})=>{let a=r.getProvider("app").getImmediate(),c=new xe(new Ma(r.getProvider("auth-internal")),new qa(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Be(md,"4.7.3",e),Be(md,"4.7.3","esm2017")})();var Fu=window.BONFIRE_FIREBASE,he={enabled:!!(Fu&&Fu.apiKey)};window.BF=he;if(he.enabled){let n=Wo(Fu),e=ba(n),t=Kf(n),r=null,i=null,o=(c,l)=>[c,l].sort().join("_"),a=()=>{let c="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",l=d=>Array.from({length:d},()=>c[Math.floor(Math.random()*c.length)]).join("");return"BNF-"+l(4)+"-"+l(4)};he.onAuth=c=>ya(e,l=>{r=l,l||(i=null),c(l)}),he.signIn=async()=>{let c=new Ut;try{await Ta(e,c)}catch(l){if(l&&(l.code==="auth/popup-blocked"||l.code==="auth/operation-not-supported-in-this-environment"))return Aa(e,c);throw l}},he.signOut=()=>va(e),he.loadProfile=async()=>{let c=Re(t,"users",r.uid),l=await Zr(c);if(l.exists())return i=l.data(),i;let d=(r.displayName||"Friend").slice(0,40);for(let p=0;p<6;p++){let y=a(),I={name:d,nameLower:d.toLowerCase(),bondId:y,vis:"nobody",allowed:[]};try{return await sp(t,async S=>{let C=Re(t,"bondIds",y);if((await S.get(C)).exists())throw new Error("taken");S.set(C,{uid:r.uid,name:d}),S.set(c,I)}),i=I,i}catch(S){if(S.message!=="taken")throw S}}throw new Error("Could not create an ID")},he.setVisibility=async(c,l,d)=>{let p=Mu(t);p.update(Re(t,"users",r.uid),{vis:c,allowed:l});let y=Re(t,"directory",r.uid);c==="everyone"?p.set(y,{name:i.name,nameLower:i.nameLower,bondId:i.bondId}):p.delete(y),d.forEach(I=>{let S=Re(t,"visibleTo",I,"by",r.uid);c==="selected"&&l.indexOf(I)>-1?p.set(S,{name:i.name,bondId:i.bondId}):p.delete(S)}),await p.commit(),i.vis=c,i.allowed=l},he.lookup=async c=>{let l=await Zr(Re(t,"bondIds",String(c).toUpperCase()));return l.exists()?l.data():null},he.search=async c=>{if(c=String(c||"").trim().toLowerCase(),c.length<2)return[];let l=[];return(await Vu(Qs(tn(t,"directory"),Js("nameLower",">=",c),Js("nameLower","<",c+"\uF8FF"),Xf(10)))).forEach(y=>{y.id!==r.uid&&l.push({uid:y.id,...y.data()})}),(await Vu(tn(t,"visibleTo",r.uid,"by"))).forEach(y=>{let I=y.data();String(I.name).toLowerCase().indexOf(c)===0&&!l.some(S=>S.uid===y.id)&&l.push({uid:y.id,...I})}),l},he.sendPigeon=async(c,l)=>{let d=await he.lookup(c);if(!d)throw{code:"notfound"};if(d.uid===r.uid)throw{code:"self"};if((await Zr(Re(t,"chats",o(r.uid,d.uid)))).exists())throw{code:"already"};return await Lu(Re(t,"inbox",d.uid,"requests",r.uid),{fromName:i.name,fromBondId:i.bondId,note:String(l||"").slice(0,240),at:Date.now()}),d},he.onInbox=c=>Xs(tn(t,"inbox",r.uid,"requests"),l=>c(l.docs.map(d=>({uid:d.id,...d.data()}))),()=>{}),he.acceptRequest=async c=>{let l=Re(t,"inbox",r.uid,"requests",c),d=await Zr(l);if(!d.exists())throw new Error("gone");let p=d.data(),y=[r.uid,c].sort(),I=Mu(t);I.set(Re(t,"chats",o(r.uid,c)),{members:y,names:{[r.uid]:i.name,[c]:p.fromName},at:Date.now(),last:null,opening:{from:c,text:p.note||""}}),I.delete(l),await I.commit()},he.declineRequest=c=>np(Re(t,"inbox",r.uid,"requests",c)),he.onChats=c=>Xs(Qs(tn(t,"chats"),Js("members","array-contains",r.uid)),l=>c(l.docs.map(d=>({id:d.id,...d.data()}))),()=>{}),he.onMessages=(c,l)=>Xs(Qs(tn(t,"chats",c,"messages"),Yf("at"),Zf(100)),d=>l(d.docs.map(p=>({id:p.id,...p.data()}))),()=>{}),he.sendMessage=async(c,l)=>{let d=Date.now(),p=String(l.text||"").slice(0,2e3),y=l.kind==="letter"?"letter":"text";await rp(tn(t,"chats",c,"messages"),{from:r.uid,text:p,kind:y,at:d}),await tp(Re(t,"chats",c),{last:{text:p.slice(0,80),at:d,from:r.uid}})},he.saveFeedback=c=>Lu(Re(t,"feedback",r.uid),{...c,uid:r.uid,at:Date.now()})}})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-68602d24.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
