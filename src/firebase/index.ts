// See: https://github.com/zeit/next.js/tree/master/examples/with-firebase

import * as firebase from 'firebase/app';
import 'firebase/firestore'; // Only import the Firebase modules you use.
import 'firebase/analytics';

const clientCredentials = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) firebase.initializeApp(clientCredentials);
if (typeof window !== 'undefined') firebase.analytics();

export default firebase;
