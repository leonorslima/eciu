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



function App() {
  return (
    <div>
        <Router>
        <Header />
            <Switch>
                <Route exact path={"/feed"} component={Feed} />
                <Route exact path={"/categories"} component={Categories} />
                <Route exact path={"/community"} component={Community} />
                <Route exact path={"/chat"} component={Chat}/>
                <Route exact path={"/profile"} component={Profile}/>
            </Switch>
            <Navbar />
        </Router>
    </div>
  );
}

export default App;
