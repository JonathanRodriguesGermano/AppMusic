import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const  firebaseConfig = {
  apiKey: "AIzaSyBJTU883Br2ZBRzRK7rcakNQytNYmEaHco",
  authDomain: "legacymusic-5dff6.firebaseapp.com",
  projectId: "legacymusic-5dff6",
  storageBucket: "legacymusic-5dff6.firebasestorage.app",
  messagingSenderId: "611026766951",
  appId: "1:611026766951:web:f5bf8e94e1a849582558c2",
  measurementId: "G-Q0YRQ3F7W2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//autentificação para (login, logout, estado do usuario)
export const auth = getAuth(app)
