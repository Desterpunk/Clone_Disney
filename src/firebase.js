import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8Pp1eKV-c5e5zveEwkchq178AqKSaYCw",
  authDomain: "disney-clone-492b4.firebaseapp.com",
  projectId: "disney-clone-492b4",
  storageBucket: "disney-clone-492b4.appspot.com",
  messagingSenderId: "1041644896161",
  appId: "1:1041644896161:web:e49b892f0ff0f3e89a95e0",
  measurementId: "G-FZ1DTQED72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
