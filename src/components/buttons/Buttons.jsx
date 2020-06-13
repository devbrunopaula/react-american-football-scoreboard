import React, {useContext} from 'react'
import {ScoreContext} from '../../ScoreContext'


function Buttons() {
    const [homeScore, setHomeScore, homeFieldGoal, setHomeFieldGoal, awayScore, setAwayScore, awayFieldGoal, setAwayFieldGoal] = useContext(ScoreContext)

    function incrementHomeScore() {
        setHomeScore(prevScore => prevScore  + 7)
      }
      function fieldGoalHomeScore() {
        setHomeFieldGoal(prevScore => prevScore + 3)
      }
      function incrementAwayScore() {
        setAwayScore(prevScore => prevScore  + 7)
      }
      function fieldGoalAwayScore() {
        setAwayFieldGoal(prevScore => prevScore + 3)
      }
      

     


    return (
       <>
        <div className="homeButtons">
                <button  onClick={incrementHomeScore} className="homeButtons__touchdown">Home Touchdown</button>
                <button  onClick={fieldGoalHomeScore} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button onClick={incrementAwayScore} className="awayButtons__touchdown">Away Touchdown</button>
                <button onClick={fieldGoalAwayScore} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
       </>
    )
}

export default Buttons
