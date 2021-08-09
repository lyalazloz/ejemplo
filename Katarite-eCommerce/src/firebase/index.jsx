import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDnvtILNNV6g_KXCNMhnBd11-Lx6qOPx64",
    authDomain: "katarite.firebaseapp.com",
    projectId: "katarite",
    storageBucket: "katarite.appspot.com",
    messagingSenderId: "274931686380",
    appId: "1:274931686380:web:3948b081f8b32070b6bec9"
  });

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}