import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBEU9OZOLwQlCX00bmK1FERVCOQv8BHdrA",
    authDomain: "wily-dba19.firebaseapp.com",
    databaseURL: "https://wily-dba19-default-rtdb.firebaseio.com",
    projectId: "wily-dba19",
    storageBucket: "wily-dba19.appspot.com",
    messagingSenderId: "670307808292",
    appId: "1:670307808292:web:21ee33455d36efccba14b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();