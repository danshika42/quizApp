import React ,{useContext} from 'react'
import {ScoreContext} from './ScoreContext'
import './Question.css'

function Question({question,index,handleAttempted}) {
    const {scoreArr}=useContext(ScoreContext);
   
    const updateArr=(value,opt)=>{
        if(value===opt){
            scoreArr.add(index);
        }else if(scoreArr.has(index)){
            scoreArr.delete(index);
        }
       
        handleAttempted(index);
       
        question.answerOptions.map((ansopt)=>{
            ansopt.isAttempted=false;
        })
        question.answerOptions[opt].isAttempted=true;   
    }

    return (
        <>
            <span className='Question-text'>{question.questionText}</span>
            <ul className='Question-list'>
                {
                    question.answerOptions.map(
                        (option,opt)=>(
                        <li>
                            <button 
                            style={{backgroundColor:option.isAttempted?'#4CAF50':'cadetblue'}} 
                            className='Question-option' 
                            onClick={()=>{updateArr(question.correctOption,opt)}}>
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
