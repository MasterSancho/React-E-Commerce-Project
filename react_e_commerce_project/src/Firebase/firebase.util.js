import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDut1Y7JxlslDaQ1JXQa2Ov1jwHTCN01fg',
    authDomain: 'ecomm-2.firebaseapp.com',
    databaseURL: 'https://ecomm-2.firebaseio.com',
    projectId: 'ecomm-2',
    storageBucket: 'ecomm-2.appspot.com',
    messagingSenderId: '1090560432807',
    appId: '1:1090560432807:web:8213dfc86a733f2b279982',
    measurementId: 'G-HGKQ63FND0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
