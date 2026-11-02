# Turn on real accounts and chat (about 10 minutes)

1. Go to https://console.firebase.google.com and click **Add project**. Name it `bonfire`. You can switch Google Analytics off.
2. **Authentication**: open Build > Authentication > Get started. Under Sign-in method turn on **Google** and save. Then open Settings > Authorized domains and add `YOUR-USERNAME.github.io`.
3. **Database**: open Build > Firestore Database > Create database. Choose Standard, pick a region near your friends (for India, `asia-south1`), and start in **production mode**.
4. **Rules**: in Firestore open the **Rules** tab, delete what is there, paste the whole of `firestore.rules` from this folder, and click **Publish**.
5. **Get your config**: Project settings (gear icon) > General > Your apps > click the web icon `</>`. Register an app named `bonfire`. Copy the `firebaseConfig` object it shows.
6. Open `firebase-config.js` in this folder and replace its content with:

       window.BONFIRE_FIREBASE = {
         apiKey: "...",
         authDomain: "...",
         projectId: "...",
         storageBucket: "...",
         messagingSenderId: "...",
         appId: "..."
       };

   (Paste your own values. These are safe to publish. Your rules protect the data.)
7. Upload the changed `firebase-config.js` to your GitHub repo (open the file on GitHub, click the pencil, paste, commit). Wait a minute, then open your app. You should see "Continue with Google".

## Reading feedback
Friends' feedback is stored in Firestore under the `feedback` collection. Open Firestore Database > Data > feedback to read it.

## If something fails
- "Sign-in did not finish": check step 2, especially the authorized domain.
- Messages or invitations fail with "Try again": check that the rules from step 4 were published.
