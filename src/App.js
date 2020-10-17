import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/Dashboard/AddService/AddService';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({isSignedIn: false});
  return (
    <UserContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>
         <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/dashboard/addService">
            <AddService/>
          </PrivateRoute>
          <Route path="/serviceList">
            <ServiceList/>
          </Route>
        <Route exact path='/'>
            <Home/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
