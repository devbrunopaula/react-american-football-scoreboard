//TODO: STEP 1 - Import the useState hook.
import React from 'react'
// import {ScoreContext} from '../ScoreContext'
import BottomRow from "./BottomRow";
import "./App.css";
import HomeScore from "./components/homeTeam/HomeScore";
import {ScoreProvider} from "./ScoreContext"
import Buttons from "./components/buttons/Buttons";
import AwayScorePoints from './components/awayTeam/AwayScore';




function App() {
  return (
    <ScoreProvider>
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
         <HomeScore name="Lions"/>
          <div className="timer">00:03</div>
          <AwayScorePoints name="Tigers"/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons/>
      </section>
    </div>
    </ScoreProvider>
  );
}

export default App;
