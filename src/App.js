import './App.css'
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Post from "./components/Post/index";
import Feed from "./pages/Feed/index";
import Categories from "./pages/Categories/index";
import Community from "./pages/Community/index";
import Chat from "./pages/Chat/index";
import Profile from "./pages/Profile/index";
import MyProfile from "./pages/MyProfile/index";
import EditProfile from "./pages/EditProfile/index";
import SignUp from "./pages/SignUp/index";
import SignIn from "./pages/SignIn";
import CreatePost from "./pages/CreatePost/index";
import SearchResults from "./pages/SearchResults/index";
import Home from "./pages/Home/index";
import PrivateChat from "./pages/PrivateChat/Index";
import firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from './scripts/FirebaseConfig';
import {FirebaseAuthProvider} from "@react-firebase/auth";
import { Redirect } from "react-router-dom";

function App() {

        const [user, setUser] = useState('')

        /*useEffect(() => {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    setUser(user.uid);
                    console.log(user.uid)
                } else {
                    <Redirect to={"/signin"} />
                }
            })
        }, []);


    const handleLogin = (email, password) => {

        FirebaseConfig
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({user}) =>
                    setUser(user.uid),
                window.location.href = "/categories"


            )
            .catch(err => {
                switch (err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":

                        break;
                    case "auth/wrong-password":

                        break;
                }})
        console.log(email, password);
    }*/



    /*useEffect(() => {

        let CheckUserAuth = null;
        CheckUserAuth = auth.onAuthStateChanged(user => {
            if (user) {
                props.setCurrentUser(user);
            }
        });

        return () => {
            CheckUserAuth()
        }

    }, [props.users, props.setCurrentUser]);


    const authListener =() =>{
        FirebaseConfig.auth().onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            }else {
                setUser('');
            }})}
    useEffect(()=>{
        authListener();
    }, []);
*/
    return (
        <FirebaseAuthProvider firebase={firebase} {...FirebaseConfig}>
            {
                <div className="mr-3 ml-3">
                    <Router>
                        <Switch>
                            <Route exact path={"/"} user={user} component={Feed}/>
                            <Route exact path={"/feed"} component={Feed} />
                            <Route exact path={"/categories"}  user={user} component={Categories} />
                            <Route exact path={"/categories/:id"} user={user} component={Post} />
                            <Route exact path={"/community"} component={Community} />
                            <Route exact path={"/chat"} component={Chat}/>
                            <Route exact path={"/myprofile"} component={MyProfile}/>
                            <Route exact path={"/editprofile"} component={EditProfile}/>
                            <Route exact path={"/profile"} user={user} component={Profile}/>
                            <Route exact path={"/profile/:id"} user={user} component={Profile}/>
                            <Route exact path={"/signup"} component={SignUp}/>
                            <Route exact path={"/signin"} setUser={setUser} component={SignIn}/>
                            <Route exact path={"/createpost/:id"} user={user} component={CreatePost}/>
                            <Route exact path={"/searchresults"} component={SearchResults}/>
                            <Route exact path={"/home"} component={Home}/>
                            <Route exact path={"/privatechat"} component={PrivateChat}/>
                        </Switch>
                    </Router>
                </div>
            }
        </FirebaseAuthProvider>

  );
}

export default App;
