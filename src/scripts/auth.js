import firebase from "firebase";

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        setLoggeduser(user.uid);
        console.log(user.uid)


    } else {
        console.log("nao ha login")
        // window.location.href = "/signin"
    }
})
