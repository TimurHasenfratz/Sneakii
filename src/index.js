
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

    const firebaseConfig = {
      apiKey: "AIzaSyC3QZ1_Jl-CSMkyMXiDQ2s7kahPYZ4bTUo",
      authDomain: "sneakii-f947e.firebaseapp.com",
      projectId: "sneakii-f947e",
      storageBucket: "sneakii-f947e.appspot.com",
      messagingSenderId: "819713979760",
      appId: "1:819713979760:web:5c464b0315c04a0d488bb5",
      measurementId: "G-JDHRMCG0TP"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);