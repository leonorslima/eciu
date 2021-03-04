import firebase from 'firebase';


var initializeFirebase = {
        apiKey: "AIzaSyC0AFItD29TxbntOwVmVFZItIaWY3iSnis",
        authDomain: "eciu-buddy.firebaseapp.com",
        projectId: "eciu-buddy",
        storageBucket: "eciu-buddy.appspot.com",
        messagingSenderId: "609927129041",
        appId: "1:609927129041:web:ec32e95d59d6ffcfb2a2f0",
        measurementId: "G-57H6DQQHWS"

};


export default () => firebase.initializeApp(initializeFirebase);