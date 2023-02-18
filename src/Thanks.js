import React from 'react'
import IconRocketLaunch from './IconRocketLaunch'
import "./Thanks.css";


const Thanks = () => {
    return (
        <>
            <div className="formDiv">
                <div className="heading">Lift-Off C  <IconRocketLaunch /></div>
                <div id='messageBox'>
                    <h1 className='thanksmessage'>Thanks for registering!</h1>
                </div>
                <div className="copyThanks">
                    <p>Enigma VSSUT &copy; 2023 </p>
                </div>
            </div>
        </>
    )
}

export default Thanks