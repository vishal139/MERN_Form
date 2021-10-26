import React from 'react';
import './Style.css'

const Home = (props) =>{
    return(
        <>
            <div className="main">
                <div className="card">
                    <div className="title">
                        Welcome
                    </div>
                    <div className="title">
                        {props.name}
                    </div>
                    <div className="content">
                        <div className="btn">
                            <input type="button" value="Logout" onClick={()=>{props.setloginUser({})}}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;