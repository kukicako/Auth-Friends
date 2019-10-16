import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { UserForm } from "./components/LoginForm";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/FriendList" component={FriendList} />
          <Route path="/login" component={UserForm} />
          <Route component={UserForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;