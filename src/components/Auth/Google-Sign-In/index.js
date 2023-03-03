import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function popupSignIn(callback) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = result.user;
      const next_service_user = {
        name: user.displayName,
        email: user.email,
      };
      sessionStorage.setItem("user", JSON.stringify(next_service_user));
      const urlToRedirect =
        window.location.origin + (sessionStorage.getItem("redirectUrl") || "/");
      window.location = urlToRedirect;
      callback(false);
    })
    .catch((error) => {
      alert(error);
      callback(false);
    });
}
