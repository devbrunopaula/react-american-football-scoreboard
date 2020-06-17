import React from 'react'
import Timer from 'react-compound-timer'



function GameTimer() {

const timerBtn={
    padding: "5px 20px", 
    margin: '0 20px', 
    borderRadius: '10px',
    outline: 'none'
}

    return (
    <div className="timer">
        <Timer initialTime={900000} direction="backward">{({resume, pause}) => (
            <>
                <Timer.Minutes/> : <Timer.Seconds />
                <div style={{fontFamily: "arial", padding: "0 80px"}}>
                    <button style={timerBtn} onClick={resume}>Resume</button>
                    <button style={timerBtn} onClick={pause}>Pause</button>
                </div>
            </>)}
        </Timer>
    </div>)
}

export default GameTimer
