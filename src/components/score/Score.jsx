import React from 'react'

function Score({teamName, match, score}) {
    return (
        <div className={match}>
      <h2 className={match +"__name"}>{teamName}</h2>
        <div className={match +"__score"}>{score}</div>
    </div>
    )
}

export default Score
