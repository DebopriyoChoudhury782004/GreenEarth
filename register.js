// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXpUWrLrO4VAcJkfrTPoCY3ZJDch3D7l4",
  authDomain: "grean-b55a1.firebaseapp.com",
  projectId: "grean-b55a1",
  storageBucket: "grean-b55a1.firebasestorage.app",
  messagingSenderId: "231681146599",
  appId: "1:231681146599:web:12aa98a56ae78b628b2c42"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevents the form from submitting the default way

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Create user with Firebase Authentication
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    console.log("User registered:", userCredential.user);
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "login.html"; // Redirect to login page
  } catch (error) {
    console.error("Error registering user:", error.message);
    alert(`Error: ${error.message}`);
  }
});
