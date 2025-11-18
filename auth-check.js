<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

  // Deine Firebase Config (gleich wie im Login)
  const firebaseConfig = {
    apiKey: "AIzaSyDEq-PhrcS4CMNKiDvrCNquPSyo9wIcup0",
    authDomain: "fox-web-44.firebaseapp.com",
    projectId: "fox-web-44",
    storageBucket: "fox-web-44.firebasestorage.app",
    messagingSenderId: "113992857383",
    appId: "1:113992857383:web:821b53cb52865b09fbdb02",
    measurementId: "G-965DD6PJ0W"
  };

  // Init Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Check ob eingeloggt
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // nicht eingeloggt → redirect
      window.location.href = "login.html";
    }
  });
</script>
