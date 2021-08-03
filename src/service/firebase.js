  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE__DB_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);