import firebase from 'firebase/compat/app';


const constants = {"projectId":"fir-flutter-162b4", "appId":"1:724786210784:android:1d6d5c2cdb8ad953c3ed85" }

const app = !firebase.apps.length ? firebase.initializeApp({
  // apiKey: 'apiKey',
  authDomain: `${constants.projectId}.firebaseapp.com`,
  databaseURL: 'https://projectId.firebaseio.com',
  projectId: constants.projectId,
  storageBucket: `${constants.projectId}.appspot.com`,
//   messagingSenderId: 'sender-id',
  appId: constants.appId,
  measurementId: 'G-measurement-id',
}): firebase.app();

export default app;

