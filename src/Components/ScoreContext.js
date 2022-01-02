import React,{createContext,useState} from 'react'

export const ScoreContext= createContext();



export function ScoreProvider(props){
    const scoreArr=[false,false,false,false,false,false,false];
    var count=0;
    const [score,setscore]=useState(0);

   
    const handleScore=()=>{
         for(var i=0;i<scoreArr.length;i++){
            if(scoreArr[i])
            count++;
         }
         setscore(count);
    }

    return(
        <ScoreContext.Provider value={{handleScore,score,scoreArr}} >
            {props.children}
        </ScoreContext.Provider>
    )
}