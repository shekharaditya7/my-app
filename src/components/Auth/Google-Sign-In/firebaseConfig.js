import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxxlfAiiF5Tdlpj8T8qMs8YdK9mesC524",
  authDomain: "this-is-me-74cbf.firebaseapp.com",
  projectId: "this-is-me-74cbf",
  storageBucket: "this-is-me-74cbf.appspot.com",
  messagingSenderId: "650731524892",
  appId: "1:650731524892:web:3ac920321690130071a0d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
