import React,{useState, createContext} from 'react'


export const ScoreContext = createContext()

export const ScoreProvider = (props) => { 
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)
   
    


    return (
        <ScoreContext.Provider value={[homeScore, setHomeScore,  awayScore, setAwayScore]}>
            {props.children}
        </ScoreContext.Provider>
    )


}