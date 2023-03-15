import React from 'react'
import { Link } from 'react-router-dom';
import IconRocketLaunch from './IconRocketLaunch'
import "./Thanks.css";


const Thanks = () => {
    return (
        <>
            <div className="formDiv">
                <div className="heading">Enigma Induction 2023</div>
                <div id='messageBox'>
                    <h1 className='thanksmessage'>Thank you! <br/>You are successfully registered.</h1>
                </div>
                    {/* <div style={{textAlign: "center"}}><Link to="/"><button>BACK TO HOME</button></Link></div> */}
                <div className="copyThanks">
                    <p>Enigma VSSUT &copy; 2023 </p>
                </div>
            </div>
        </>
    )
}

export default Thanks