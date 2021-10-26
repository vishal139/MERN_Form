import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import './Style.css'

const Register = () => {
    const history = useHistory();
    const [user, setuser] = useState({
        name:'',
        email:'',
        password:'',
        Cpassword:''
    })
    const handleChange = (event)=>{
        const{name,value} = event.target;
        setuser({
            ...user,
            [name] : value,
        })
    }

    const register = ()=>{
        const{name,email,password,Cpassword} = user;
        if(name && email && password && Cpassword)
        {
            axios.post('http://localhost:8000/app/signup',user)
            .then((res)=>{
                if(res.data.val==="1")
                {
                    alert(res.data.message);
                    setuser({
                        ...user,
                        email:'',
                    });
                }
                else if(res.data.val==="2")
                {
                    alert(res.data.message);
                    setuser({
                        ...user,
                        email:'',
                    });
                }
                else if(res.data.val==="3")
                {
                    alert(res.data.message);
                    setuser({
                        name:'',
                        email:'',
                        password:'',
                        Cpassword:''
                    })
                    history.push('/login');
                   
                }
            })
            .catch((err)=>{
    
            })
        } 
        else if(password!==Cpassword)
        {
            alert("passwords are not matching");
        }
        else
        {
            alert('please fill all the details carefully');
        }     
       
        
    }
    return (
        <>
            <div className="main">
                <div className="card">
                    <div className="title">Sign Up</div>
                    <div className="content">
                        <form >
                            <input type="text" name="name"  placeholder='Enter your name'  onChange={handleChange} value={user.name}/>
                            <input type="email" name="email"  placeholder='Enter your Email' onChange={handleChange} value={user.email}/>
                            <input type="password" name="password"  placeholder='Enter password' onChange={handleChange} value={user.password}/>
                            <input type="password" name="Cpassword"  placeholder='Confirm password' onChange={handleChange} value={user.Cpassword}/>
                        </form>
                        <div className="btn">
                            <input type="button" value="Login" onClick={()=>{
                                    history.push('/login');
                            }} />
                            <input type="button" value="Sign Up" onClick={register}/>
                        </div>
                    </div>
                </div>    
            </div> 

        </>
    )
}

export default Register
