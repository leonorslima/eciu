import './App.css'
import React from 'react';
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

function App() {

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
*/

    return (
        <FirebaseAuthProvider firebase={firebase} {...FirebaseConfig}>
            {
                <div className="mr-3 ml-3">
                    <Router>
                        <Switch>
                            <Route exact path={"/"} component={Feed}/>
                            <Route exact path={"/feed"} component={Feed} />
                            <Route exact path={"/categories"} component={Categories} />
                            <Route exact path={"/categories/:id"} component={Post} />
                            <Route exact path={"/community"} component={Community} />
                            <Route exact path={"/chat"} component={Chat}/>
                            <Route exact path={"/myprofile"} component={MyProfile}/>
                            <Route exact path={"/editprofile"} component={EditProfile}/>
                            <Route exact path={"/profile"} component={Profile}/>
                            <Route exact path={"/profile/:id"} component={Profile}/>
                            <Route exact path={"/signup"} component={SignUp}/>
                            <Route exact path={"/signin"} component={SignIn}/>
                            <Route exact path={"/createpost/:id"} component={CreatePost}/>
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
