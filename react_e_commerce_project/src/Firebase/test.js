import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
    .collection('users')
    .doc('gnLPyzLSj7he36WaYKq4')
    .collection('cartItems')
    .doc('DYpkeH2HnixmYfF5WeGA');
firestore.doc('/users/gnLPyzLSj7he36WaYKq4/cartItems/DYpkeH2HnixmYfF5WeGA');
firestore.collection('/users/gnLPyzLSj7he36WaYKq4/cartItems');
