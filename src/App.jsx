import React,{useState} from 'react';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () =>{
    const [loginUser, setloginUser] = useState({
        name:'',
        email:'',
        password:''
    });
    return(
        <>
        <Router>
            <Switch>
                <Route exact path='/'>
                    {
                        loginUser&&loginUser._id?<Home name={loginUser.name} setloginUser = {setloginUser}/>:<Login setloginUser = {setloginUser}/>
                    }
                </Route>
                <Route exact path='/login'>
                    <Login setloginUser = {setloginUser}/>
                </Route>
                <Route exact path='/register'>
                    <Register/>
                </Route>
            </Switch>
        </Router>
    
        </>
    )
};

export default App;
