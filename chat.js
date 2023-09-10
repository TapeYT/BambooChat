// Initialize Firebase components
var db = firebase.database();
var messagesRef;
var currentRoom = "default"; // Default room

// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        var user = firebase.auth().currentUser;

        if (user) {
            var message = {
                text: messageText,
                sender: user.displayName, // Use user's display name
                timestamp: new Date().getTime(),
            };

            messagesRef.push(message);
            messageInput.value = "";
        } else {
            // Handle authentication state (user not logged in)
            alert("You are not signed in. Please sign in to send messages.");
        }
    }
}

// Function to sign out
function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("You have been signed out.");
    }).catch(function(error) {
        // An error happened.
        console.error("Sign out error:", error);
    });
}

// Function to sign in with Google using redirect
function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

// Function to create a room
function createRoom() {
    var roomInput = document.getElementById("roomInput");
    var roomName = roomInput.value.trim();

    if (roomName !== "") {
        // Store the room information in the database
        db.ref("/Chat/folder" + roomName).set({
            created_at: new Date().toISOString(),
        });

        // Set the current room to the created room
        currentRoom = roomName;
        initializeRoom();
        roomInput.value = ""; // Clear the room input field
    } else {
        alert("Please enter a room name.");
    }
}

// Function to join an existing room
function joinRoom() {
    var joinRoomInput = document.getElementById("joinRoomInput");
    var roomCode = joinRoomInput.value.trim();

    if (roomCode !== "") {
        currentRoom = roomCode;
        initializeRoom();
        joinRoomInput.value = ""; // Clear the room code input field
    } else {
        alert("Please enter a room code.");
    }
}

// Function to initialize the selected or created room
function initializeRoom() {
    // Update messagesRef to the specific room
    messagesRef = db.ref("rooms/" + currentRoom + "/messages");

    // Clear existing messages
    var messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";

    // Load messages for the new room
    messagesRef.on("child_added", function(snapshot) {
        var message = snapshot.val();
        var messageDiv = document.createElement("div");
        messageDiv.textContent = message.sender + ": " + message.text;
        messagesDiv.appendChild(messageDiv);
    });
}

// Initialize Firebase Authentication
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        alert("Welcome, " + user.displayName + "!");
        initializeRoom(); // Initialize with the default room
    } else {
        // User is signed out or hasn't signed in yet.
        alert("You are not signed in. Please sign in.");
    }
});
