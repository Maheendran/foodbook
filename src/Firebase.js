// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyChtgiC3osNOSh5li0ncSY8jxdS-CFYqFc",
  authDomain: "foodbook-app-98aac.firebaseapp.com",
  projectId: "foodbook-app-98aac",
  storageBucket: "foodbook-app-98aac.appspot.com",
  messagingSenderId: "952133334478",
  appId: "1:952133334478:web:a84d6bcaee7d631322e79f"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth};