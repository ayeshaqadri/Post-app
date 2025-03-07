import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4RWWruUA2VquqYVLR23ipUEoPIzlKFJc",
  authDomain: "project-dc717.firebaseapp.com",
  projectId: "project-dc717",
  storageBucket: "project-dc717.firebasestorage.app",
  messagingSenderId: "404723403613",
  appId: "1:404723403613:web:fc81e5a046cc163a2136b4",
  measurementId: "G-LGWX5ZQ714"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);