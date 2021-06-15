import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQyDO8YnzMGXXD-SDpMGdYTYzu8kERkhc",
    authDomain: "mentalhealth-app.firebaseapp.com",
    projectId: "mentalhealth-app",
    storageBucket: "mentalhealth-app.appspot.com",
    messagingSenderId: "796346458202",
    appId: "1:796346458202:web:5df1c957f9b76087acf863"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;