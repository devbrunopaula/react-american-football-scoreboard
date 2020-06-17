import React from 'react'
import Buttons from './Buttons'

function ButtonRow({ homeScore, setHomeScore, awayScore, setAwayScore}) {
  
    return (
       <>
            <div className="homeButtons">
                <Buttons onClick={setHomeScore} className="homeButtons__touchdown" label={"Home Touchdown"} score={homeScore} points={7} />
                <Buttons onClick={setHomeScore} className="homeButtons__fieldGoal" label={"Home Field Goal"} score={homeScore} points={3} />
            </div>
            <div className="awayButtons">
                <Buttons onClick={setAwayScore} className="awayButtons__touchdown" label={"Away Touchdown"} score={awayScore} points={7}/>
                <Buttons onClick={setAwayScore} className="awayButtons__fieldGoal" label={"Away Field Goal"} score={awayScore} points={3}/>
            </div>
        </>
    )
}

export default ButtonRow
