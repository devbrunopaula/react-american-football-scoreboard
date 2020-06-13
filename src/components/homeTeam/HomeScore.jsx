import React, {useContext} from 'react'
import {ScoreContext} from '../../ScoreContext'

function HomeScorePoints({name}){

  const [homeScore, setHomeScore, homeFieldGoal, setHomeFieldGoal, awayScore, setAwayScore, awayFieldGoal, setAwayFieldGoal] = useContext(ScoreContext)



return ( 
    <div className="home">
      <h2 className="home__name">{name}</h2>
        <div className="home__score">{homeScore + homeFieldGoal}</div>
    </div>

    )
}
 

export default HomeScorePoints

