import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "process.env.AIzaSyAzvRIFH3bFcxgj9ZktcS_MCY6V0HY0HRM",
  authDomain: "process.env.react-auth-167ed.firebaseapp.com",
  projectId: "process.env.react-auth-167ed",
  storageBucket: "process.env.react-auth-167ed.appspot.com",
  messagingSenderId: "process.env.513356712391",
  appId: "process.env.1:513356712391:web:294d1ae466d244dec871e2",
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
