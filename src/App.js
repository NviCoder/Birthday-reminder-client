import React, { useState } from 'react'

import AddNewFriend from './Pages/AddNewFriend';
import Home from './Pages/Home';
import LoginOrRegister from './Pages/LoginAndRegister/LoginOrRegister';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Protected from './components/Protected';


function App() {
  const [isAuth,setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          {/* <Login changeAuthState={(isAuth) => setAuth(isAuth)}></Login> */}
          <LoginOrRegister changeAuthState={(isAuth) => setAuth(isAuth)}></LoginOrRegister>
        </Route>
        <Protected path="/home" component={Home} isAuth={isAuth}/>
        <Protected path="/add-new-friend" component={AddNewFriend} isAuth={isAuth}/>
      </Switch>
    </Router>
  )
}

export default App;


{/* <Route exact path="/home" >
          <Home></Home>
        </Route> */}
        
        {/* <Route exact path="/add-new-friend">
          <AddNewFriend></AddNewFriend>
        </Route> */}