// Replace these placeholders with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3T6-J7fcIysgRRNC6PU1h1AGvmBhe12s",
    authDomain: "momandmechat-196f2.firebaseapp.com",
    databaseURL: "https://momandmechat-196f2-default-rtdb.firebaseio.com",
    projectId: "baboochat2",
    storageBucket: "gs://baboochat2.appspot.com",
    messagingSenderId: "641194041752",
    appId: "1:634171816302:web:f84da0c9c9b9aa4a33697f",
    measurementId: "G-YBRNK2TYH7"
};

// Initialize Firebase with the configuration
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

