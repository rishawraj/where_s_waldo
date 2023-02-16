import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC41_frMA9ZumvkX4L5QgbtMtrVu2WK8jM",
  authDomain: "where-s-waldo-5948f.firebaseapp.com",
  projectId: "where-s-waldo-5948f",
  storageBucket: "where-s-waldo-5948f.appspot.com",
  messagingSenderId: "699710708879",
  appId: "1:699710708879:web:8408a3e6bd7502ede1a4fa",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
//   messagingSenderId: import.meta.env
//     .VITE_FIREBASE_MESSAGING_SENDER_ID as string,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
