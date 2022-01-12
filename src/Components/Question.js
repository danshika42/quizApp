import React ,{useContext} from 'react'
import {ScoreContext} from './ScoreContext'
import './Question.css'
import {v4 as uuid} from 'uuid'


function Question({question,index,handleAttempted}) {
    const {scoreArr}=useContext(ScoreContext);
   
    const updateArr=(value,opt)=>{
        if(value===opt){
            scoreArr.add(index);
        }else if(scoreArr.has(index)){
            scoreArr.delete(index);
        }
       
        handleAttempted(index);
       
        question.answerOptions.map((ansopt,num)=>{
            if(num===opt)
            ansopt.isAttempted=true;
            else
            ansopt.isAttempted=false;
        })
       
    }

    return (
        <>
            <span className='Question-text'>{question.questionText}</span>
            <ul className='Question-list'>
                {
                    question.answerOptions.map(
                        (option,opt)=>(
                        <li key={uuid()} >
                            <button 
                            onClick={()=>{updateArr(question.correctOption,opt)}}
                            style={{backgroundColor:option.isAttempted?'#4CAF50':'cadetblue'}} 
                            className='Question-option' 
                            >
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
