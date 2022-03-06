import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_FB_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FB_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FB_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_HOST_API,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
