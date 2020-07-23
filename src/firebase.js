import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAMW3ReoJUdI2XjjksGewsKQIpM1pE4MmA",
  authDomain: "intergr8-42df9.firebaseapp.com",
  databaseURL: "https://intergr8-42df9.firebaseio.com",
  projectId: "intergr8-42df9",
  storageBucket: "intergr8-42df9.appspot.com",
  messagingSenderId: "648450503153",
  appId: "1:648450503153:web:680b25c0f4ee7ceef29450",
  measurementId: "G-L2BT02L4KP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const storageRef = storage.ref();

export const firestore = firebase.firestore();
export default firebase;
