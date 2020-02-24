import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJE3U_VFj_2E6F_jx3nIYQCLiaHEQ1A7A",
    authDomain: "crown-db-75b41.firebaseapp.com",
    databaseURL: "https://crown-db-75b41.firebaseio.com",
    projectId: "crown-db-75b41",
    storageBucket: "crown-db-75b41.appspot.com",
    messagingSenderId: "9579125617",
    appId: "1:9579125617:web:5f49b7e2e576259cd434d0",
    measurementId: "G-EXN9BJX1JS"
  };
firebase.initializeApp(config);





export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {
            displayName, email
        } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log(error.message);
        }
    }
    return userRef;
};
export default firebase;
