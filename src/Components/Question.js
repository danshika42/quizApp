import React ,{useContext} from 'react'
import {ScoreContext} from './ScoreContext'

function Question({question,index}) {
    const {scoreArr}=useContext(ScoreContext);

    const updateArr=(value)=>{
        scoreArr[index]=value;
    }

    return (
        <div>
            <p>{question.questionText}</p>
            <ul>
                <li><button onClick={()=>updateArr(question.answerOptions[0].isCorrect)}>{question.answerOptions[0].answerText}</button></li>
                <li><button onClick={()=>updateArr(question.answerOptions[1].isCorrect)}>{question.answerOptions[1].answerText}</button></li>
                <li><button onClick={()=>updateArr(question.answerOptions[2].isCorrect)}>{question.answerOptions[2].answerText}</button></li>
                <li><button onClick={()=>updateArr(question.answerOptions[3].isCorrect)}>{question.answerOptions[3].answerText}</button></li>
            </ul>
        </div>
    )
}

export default Question
