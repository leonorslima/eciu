import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Feed from "./pages/Feed/index"
import Categories from "./pages/Categories/index"
import Community from "./pages/Community/index"
import Chat from "./pages/Chat/index"
import Profile from "./pages/Profile/index"
import Restaurants from "./pages/Restaurants/index"
import SignUp from "./pages/SignUp/index"
import CreatePost from "./pages/CreatePost/index"


import styled from "styled-components";


function App() {
  return (
    <div className="mr-3 ml-3">
        <Router>
        <Header />
            <Switch>
                <Route exact path={"/feed"} component={Feed} />
                <Route exact path={"/categories"} component={Categories} />
                <Route exact path={"/community"} component={Community} />
                <Route exact path={"/chat"} component={Chat}/>
                <Route exact path={"/profile"} component={Profile}/>
                <Route exact path={"/restaurants"} component={Restaurants}/>
                <Route exact path={"/signup"} component={SignUp}/>
                <Route exact path={"/createpost"} component={CreatePost}/>


            </Switch>
        </Router>
        <Navbar />
    </div>
  );
}

export default App;
