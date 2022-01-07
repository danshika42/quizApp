import React ,{useContext} from 'react'
import {ScoreContext} from './ScoreContext'
import './Question.css'

function Question({question,index}) {
    const {scoreArr}=useContext(ScoreContext);
    const optArr=[0,1,2,3];
    const updateArr=(value,opt)=>{
        question.questionAttempted=true;
        optArr.map(optNum=>{
            question.answerOptions[optNum].isAttempted=false;
        })
        question.answerOptions[opt].isAttempted=true;
        scoreArr[index]=value;
    }

    return (
        <>
            <span className='Question-text'>{question.questionText}</span>
            <ul className='Question-list'>
                {
                    question.answerOptions.map(
                        (option,index)=>(
                        <li>
                            <button 
                            style={{backgroundColor:option.isAttempted?'#4CAF50':'cadetblue'}} 
                            className='Question-option' 
                            onClick={()=>{updateArr(option.isCorrect,index)}}>
                                {option.answerText}
                            </button>
                        </li>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default Question
