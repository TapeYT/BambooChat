// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3T6-J7fcIysgRRNC6PU1h1AGvmBhe12s",
    authDomain: "baboochat2.firebaseapp.com",
    databaseURL: "gs://baboochat2.appspot.com",
    projectId: "baboochat2",
    storageBucket: "baboochat2.appspot.com",
    messagingSenderId: "641194041752",
    appId: "1:641194041752:web:7699a3e5369066628a8bed",
    measurementId: "G-1TZ5810DP6"
};

// Initialize Firebase with the configuration
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

