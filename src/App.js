//TODO: STEP 1 - Import the useState hook.
import React, {useState} from 'react'

import BottomRow from "./BottomRow";
import "./App.css";
import Score from './components/score/Score';
import Timer from './components/timer/Timer';
import ButtonRow from './components/buttons/ButtonRow';



function App() {

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  
  return (
    
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Score teamName={'Lions'} match={'home'} score={homeScore}/>
          <Timer/>
          <Score teamName={'Tigers'} match={'away'} score={awayScore}/>
        </div>
        <BottomRow/>
      </section>
      <section className="buttons">
        <ButtonRow homeScore={homeScore}  setHomeScore={ setHomeScore} awayScore={awayScore} setAwayScore={setAwayScore} />
      </section>
     </div> 
   
  );
}

export default App;
