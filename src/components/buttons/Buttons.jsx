import React from 'react'



function Buttons({className, label, onClick, score, points}) {

 function handleIncrement(){
   onClick( score + points)
 }
     
return <button  onClick={handleIncrement} className={className}> {label}</button>
       
    
}

export default Buttons






// import React from 'react'



// function Buttons({className, label, onClick, score, points}) {

//  function handleIncrement(){
//    onClick( score + points)
//  }
     
// return <button  onClick={handleIncrement} className={className}> {label}</button>
       
    
// }

// export default Buttons