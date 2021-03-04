import './App.css'
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import Post from "./components/Post/index";
import Feed from "./pages/Feed/index";
import Categories from "./pages/Categories/index";
import Community from "./pages/Community/index";
import Chat from "./pages/Chat/index";
import User from "./pages/User/index";
import MyProfile from "./pages/MyProfile/index";
import EditProfile from "./pages/EditProfile/index";
import SignUp from "./pages/SignUp/index";
import SignIn from "./pages/SignIn";
import CreatePost from "./pages/CreatePost/index";
import SearchResults from "./pages/SearchResults/index";
import Home from "./pages/Home/index";
import PrivateChat from "./pages/PrivateChat/Index";
import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from 'firebase';

const RedirectAuth = () =>{
    const [user, loading, error] = useAuthState(firebase.auth());
    const history = useHistory();


    useEffect(() => {
        if(user || loading || history.location.pathname.indexOf('signin') !== -1){
            return
        }
        history.push('/signin');

    }, [user, loading])

    return null
}

function App() {
    return (
        <div className="mr-3 ml-3">
            <Router>
                <RedirectAuth />
                <Switch>
                    <Route exact path={"/feed"} component={Feed}/>
                    <Route exact path={"/categories"} component={Categories}/>
                    <Route exact path={"/categories/:id"} component={Post}/>
                    <Route exact path={"/community"} component={Community}/>
                    <Route exact path={"/chat"} component={Chat}/>
                    <Route exact path={"/myprofile"} component={MyProfile}/>
                    <Route exact path={"/editprofile"} component={EditProfile}/>
                    <Route exact path={"/users/:id"} component={User}/>
                    <Route exact path={"/signup"} component={SignUp}/>
                    <Route exact path={"/signin"}  component={SignIn}/>
                    <Route exact path={"/createpost/:id"} component={CreatePost}/>
                    <Route exact path={"/searchresults"} component={SearchResults}/>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/privatechat"} component={PrivateChat}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
