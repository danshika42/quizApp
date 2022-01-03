import React ,{useContext} from 'react'
import {ScoreContext} from './ScoreContext'
import './Color.css'

function Question({question,index}) {
    const {scoreArr}=useContext(ScoreContext);
    const optArr=[0,1,2,3];
    const updateArr=(value,opt)=>{
        question.answerOptions[opt].isAttempted=true;
        question.questionAttempted=true;
        optArr.map(optNum=>{
          if(optNum!=opt){
            question.answerOptions[optNum].isAttempted=false;
          }  
        })
        scoreArr[index]=value;
    }

    return (
        <div>
            <p>{question.questionText}</p>
            <ul>
                <li><button className={question.answerOptions[0].isAttempted?'marked':''} onClick={()=>{updateArr(question.answerOptions[0].isCorrect,0)}}>{question.answerOptions[0].answerText}</button></li><br/>
                <li><button className={question.answerOptions[1].isAttempted?'marked':''} onClick={()=>{updateArr(question.answerOptions[1].isCorrect,1)}}>{question.answerOptions[1].answerText}</button></li><br/>
                <li><button className={question.answerOptions[2].isAttempted?'marked':''}onClick={()=>{updateArr(question.answerOptions[2].isCorrect,2)}}>{question.answerOptions[2].answerText}</button></li><br/>
                <li><button className={question.answerOptions[3].isAttempted?'marked':''} onClick={()=>{updateArr(question.answerOptions[3].isCorrect,3)}}>{question.answerOptions[3].answerText}</button></li><br/>
            </ul>
        </div>
    )
}

export default Question
