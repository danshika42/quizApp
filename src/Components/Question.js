import React ,{useContext} from 'react'
import {ScoreContext} from './ScoreContext'
import './Question.css'

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
        <>
            <span className='Question-text'>{question.questionText}</span>
            <ul className='Question-list'>
                <li><button style={{backgroundColor:question.answerOptions[0].isAttempted?'#4CAF50':'cadetblue'}} className='Question-option' onClick={()=>{updateArr(question.answerOptions[0].isCorrect,0)}}>{question.answerOptions[0].answerText}</button></li>
                <li><button style={{backgroundColor:question.answerOptions[1].isAttempted?'#4CAF50':'cadetblue'}} className='Question-option' onClick={()=>{updateArr(question.answerOptions[1].isCorrect,1)}}>{question.answerOptions[1].answerText}</button></li>
                <li><button style={{backgroundColor:question.answerOptions[2].isAttempted?'#4CAF50':'cadetblue'}} className='Question-option' onClick={()=>{updateArr(question.answerOptions[2].isCorrect,2)}}>{question.answerOptions[2].answerText}</button></li>
                <li><button style={{backgroundColor:question.answerOptions[3].isAttempted?'#4CAF50':'cadetblue'}} className='Question-option' onClick={()=>{updateArr(question.answerOptions[3].isCorrect,3)}}>{question.answerOptions[3].answerText}</button></li>
            </ul>
        </>
    )
}

export default Question
