import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Feed from "./pages/Feed/index";
import Categories from "./pages/Categories/index";
import Community from "./pages/Community/index";
import Chat from "./pages/Chat/index";
import Profile from "./pages/Profile/index";
import MyProfile from "./pages/MyProfile/index";
import EditProfile from "./pages/EditProfile/index";
import Restaurants from "./pages/Restaurants/index";
import Accomodation from "./pages/Accomodation/index";
import Transports from "./pages/Transports/index";
import Health from "./pages/Health/index";
import Leisure from "./pages/Leisure/index";
import SignUp from "./pages/SignUp/index";
import SignIn from "./pages/SignIn";
import CreatePost from "./pages/CreatePost/index";
import SearchResults from "./pages/SearchResults/index";
import Home from "./pages/Home/index";


function App() {
  return (
    <div className="mr-3 ml-3">
        <Router>
        <Header />
            <Switch>
                <Route exact path={"/"} component={Feed}/>
                <Route exact path={"/feed"} component={Feed} />
                <Route exact path={"/categories"} component={Categories} />
                <Route exact path={"/community"} component={Community} />
                <Route exact path={"/chat"} component={Chat}/>
                <Route exact path={"/myprofile"} component={MyProfile}/>
                <Route exact path={"/editprofile"} component={EditProfile}/>
                <Route exact path={"/profile"} component={Profile}/>
                <Route exact path={"/restaurants"} component={Restaurants}/>
                <Route exact path={"/accomodation"} component={Accomodation}/>
                <Route exact path={"/transports"} component={Transports}/>
                <Route exact path={"/leisure"} component={Leisure}/>
                <Route exact path={"/health"} component={Health}/>
                <Route exact path={"/signup"} component={SignUp}/>
                <Route exact path={"/signin"} component={SignIn}/>
                <Route exact path={"/createpost"} component={CreatePost}/>
                <Route exact path={"/searchresults"} component={SearchResults}/>
                <Route exact path={"/home"} component={Home}/>
            </Switch>
        </Router>
        <Navbar />
    </div>
  );
}

export default App;
