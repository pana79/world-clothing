import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyDbzLM5A5-Abveio07ZvHCA15NGQrj730s",
    authDomain: "world-clothing-6e7ad.firebaseapp.com",
    databaseURL: "https://world-clothing-6e7ad.firebaseio.com",
    projectId: "world-clothing-6e7ad",
    storageBucket: "world-clothing-6e7ad.appspot.com",
    messagingSenderId: "143371232508",
    appId: "1:143371232508:web:c33417df9e78f0a88b6379",
    measurementId: "G-943BB8VZZH"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
      if(!userAuth) return
      
      const userRef =firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get()

      if(!snapShot.exists) {
          const { displayName, email } = userAuth
          const createdAt = new Date()

          try {
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.message)
          }
      }
    return userRef
  }
  firebase.initializeApp(config)

  export const auth= firebase.auth()
  export const firestore= firebase.firestore()

  const provider= new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle=() => auth.signInWithPopup(provider)
  
  export default firebase