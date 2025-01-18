// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSmDefNgNeSfWxuDMmBL_pgIB_YBP5wwc",
    authDomain: "legacyapp-c4ed8.firebaseapp.com",
    projectId: "legacyapp-c4ed8",
    storageBucket: "legacyapp-c4ed8.firebasestorage.app",
    messagingSenderId: "846687932027",
    appId: "1:846687932027:web:f53b00b149797a19b09cde",
    measurementId: "G-F171NBTCQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
const db = getFirestore(app);

// Authentication instance
const auth = getAuth(app);

// Storage instance
const storage = getStorage(app);

export { app, db, auth, storage };
