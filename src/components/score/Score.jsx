import React from 'react'


function Score({teamName, match, score, logo}) {
    return (
        <div>
            <img style={{ width: "100%"}} src={logo} alt=""/>
        <div className={match}>
            
      <h2 className={match +"__name"}>{teamName}</h2>
        <div className={match +"__score"}>{score}</div>
    </div>
    </div>
    )
}

export default Score
