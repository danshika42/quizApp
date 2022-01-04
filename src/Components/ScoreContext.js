import React,{createContext,useState} from 'react'

export const ScoreContext= createContext();



export function ScoreProvider(props){
    const [name,setName]=useState('');
    const handleName=(nameVal)=>{
        setName(nameVal);
    }
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
        <ScoreContext.Provider value={{handleScore,score,scoreArr,handleName,name}} >
            {props.children}
        </ScoreContext.Provider>
    )
}