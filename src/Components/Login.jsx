import React,{useState} from 'react'
import './Style.css'
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = ({setloginUser}) => {
    const history = useHistory();
    const [user, setuser] = useState({
        email:'',
        password:''
    })

    const handleChange = (event) =>{
        const{name,value} = event.target;
        setuser({
            ...user,
            [name]:value,
        })

    }


    const loginUser = ()=>{
      axios.post('http://localhost:8000/app/signin',user)
      .then((res)=>{
            alert(res.data.message);
            setloginUser(res.data.user);
            history.push('/');
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    return (
        <>
            <div className="main">
                <div className="card">
                    <div className="title">Login</div>
                    <div className="content">
                        <form >
                            <input type="email" name="email" placeholder='Enter your Email' value={user.name} onChange={handleChange}/>
                            <input type="password" name="password"  placeholder='Enter password'value={user.password} onChange={handleChange}/>
                        </form>
                        <div className="btn">
                            <input type="button" value="Login" onClick={loginUser}/>
                            <input type="button" value="Sign Up" onClick={()=>{
                                    history.push('/register');
                            }} />
                        </div>
                    </div>
                </div>    
            </div> 
        </>
    )
}

export default Login
