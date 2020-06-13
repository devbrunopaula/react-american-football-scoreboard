import React, {useContext} from 'react'
import {ScoreContext} from '../../ScoreContext'

function AwayScorePoints({name}){

  const [homeScore, setHomeScore, homeFieldGoal, setHomeFieldGoal, awayScore, setAwayScore, awayFieldGoal, setAwayFieldGoal] = useContext(ScoreContext)

return (
    <div className="away">
      <h2 className="away__name">{name}</h2>
      <div className="away__score">{awayScore + awayFieldGoal}</div>
    </div>

    )
}


export default AwayScorePoints

