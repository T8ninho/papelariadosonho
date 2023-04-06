import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCT1JGvwGeubMAAOOmUenqvAfLMnoK2AWo",
  authDomain: "papelariadosonho.firebaseapp.com",
  projectId: "papelariadosonho",
  storageBucket: "papelariadosonho.appspot.com",
  messagingSenderId: "124080250294",
  appId: "1:124080250294:web:0e5bfb12adc9ac722cf517",
  measurementId: "G-NVQENNP23E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);