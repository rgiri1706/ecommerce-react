import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCkQLciimxccidEKCo-hZ4WqGa13oCDPkQ",
    authDomain: "shopping-26661.firebaseapp.com",
    projectId: "shopping-26661",
    storageBucket: "shopping-26661.appspot.com",
    messagingSenderId: "173915770843",
    appId: "1:173915770843:web:92655a4bbe1c65a7c0e1fe"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
 if(!userAuth){
   return;
 }
 const userref = firestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userref.get();
 if(!snapShot.exists){
   const { displayName, email } = userAuth;
   const createdAt = new Date();

   try {
     await userref.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
   } catch (error){
     console.log(error);
   }
 }
 return userref;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;