import React,{useState, createContext} from 'react'


export const ScoreContext = createContext()

export const ScoreProvider = (props) => { 
    const [homeScore, setHomeScore] = useState(1)
    const [homeFieldGoal, setHomeFieldGoal] = useState(0)
    const [awayScore, setAwayScore] = useState(2)
    const [awayFieldGoal, setAwayFieldGoal] = useState(0)
    


    return (
        <ScoreContext.Provider value={[homeScore, setHomeScore, homeFieldGoal, setHomeFieldGoal, awayScore, setAwayScore, awayFieldGoal, setAwayFieldGoal]}>
            {props.children}
        </ScoreContext.Provider>
    )


}