import React from 'react';
import Profile from "./pages/profile/Profile"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import {Switch, BrowserRouter  as Router ,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home"  >
         <Home/>
        </Route>
        <Route  path="/login" >
          <Login/>
        </Route>
        <Route path="/register">
           <Register/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
