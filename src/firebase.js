import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAGrHVQalFDSLhLPrJgSmktn6ymgZcCEM",
    authDomain: "crooms-arts-festival.firebaseapp.com",
    databaseURL: "https://crooms-arts-festival.firebaseio.com",
    projectId: "crooms-arts-festival",
    storageBucket: "crooms-arts-festival.appspot.com",
    messagingSenderId: "833965826870",
    appId: "1:833965826870:web:6c4ce773395468cbe8c997"
};

firebase.initializeApp(config);
const db = firebase.firestore();
export { db };
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;