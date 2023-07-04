import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyDPRXS2qgczlCvxQsqqP4lECxnhPkl2Mjc",
    authDomain: "traveladvisor-390015.firebaseapp.com",
    projectId: "traveladvisor-390015",
    storageBucket: "traveladvisor-390015.appspot.com",
    messagingSenderId: "617024996736",
    appId: "1:617024996736:web:48c9639c0309eb1b7b2d65",
    measurementId: "G-F8BG06SLWJ"
  };

  const app = initializeApp(firebaseConfig)
  getAnalytics(app);