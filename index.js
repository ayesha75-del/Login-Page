const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyAcmN8arvxpNTfSO5KfQb6AB3QpxAn0scE",
  authDomain: "auth-form-89599.firebaseapp.com",
  projectId: "auth-form-89599",
  storageBucket: "auth-form-89599.appspot.com", 
  messagingSenderId: "563778614421",
  appId: "1:563778614421:web:befa2e34746691cb7c579c",
  measurementId: "G-F4758WPY9W"
});

const auth = firebaseApp.auth();

const signup = () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert("✅ Signup successful!");
      console.log(result.user);
    })
    .catch((error) => {
      console.error("Signup Error:", error.code, error.message);
      alert(`Error: ${error.message}`);
    });
};

const signin = () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      alert("✅ Login successful!");
      console.log(result.user);
    })
    .catch((error) => {
      console.error("Login Error:", error.code, error.message);
      alert(`Error: ${error.message}`);
    });
};
