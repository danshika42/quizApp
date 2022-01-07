import React ,{useContext,useState,useEffect} from 'react'
import Question from './Question'
import {NavLink} from 'react-router-dom'
import {ScoreContext} from './ScoreContext'
import swal from 'sweetalert';
import './Test.css'

function Test() {
  const {handleScore,scoreArr,score,name,questions} =useContext(ScoreContext);
  
  const [index,setIndex]=useState(0);
  
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(59)
  useEffect(() => {
        let myInterval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1)
          } if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(myInterval)
            } else {
              setMinutes(minutes - 1)
              setSeconds(59)
            }
          }
        }, 1000)
        return () => {
          clearInterval(myInterval)
        }
  })
  const [toggle,setToggle]=useState(false);
  useEffect(()=>{
    handleScore();
    },[toggle])

  const handleClear=()=>{
    scoreArr[index]=false; 
    questions[index].questionAttempted=false
    
    questions[index].answerOptions.map(ansOpt=>{
      // if(ansOpt.isAttempted) 
        ansOpt.isAttempted=false
    })
  }
  
  if(minutes === 0 && seconds === 0){
    setToggle(!toggle)
  }
  
  if(toggle){
    
    return(
      <>
            <h1 className='Test-end'> {name===''?'No Name 🥱':name} ,Your score {score}</h1>
            <NavLink className='Test-retry'  to='/quizApp' >Retry</NavLink>
      </>
    )
  }
  return (
        <div className='Test'>           
            <>
              <div className='Test-wrapper'>
                  <h1 className='Test-clock'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
              </div>
            </>
           
            <span className='Test-index'>{`${index+1}/${questions.length}`}</span>
           
            <Question question={questions[index]} index={index}/>
           
            <button 
                className='Test-chevron-p' 
                onClick={()=>index!==0 && setIndex(index-1) }>
                  <i class="fas fa-chevron-left"></i>
            </button>
           
            <button 
                className='Test-chevron-n'
                onClick={()=>index<questions.length-1 && setIndex(index+1) }>
                  <i class="fas fa-chevron-right"></i>
            </button><br/>
           
            <button 
                className='Test-clear' 
                onClick={()=>handleClear()}>
                  <i class="fas fa-broom"></i>Clear
            </button>
            
            <button 
                className='Test-flag' 
                onClick={()=>{questions[index].isFlagged=!questions[index].isFlagged}}>
                  <i class="far fa-flag"></i>Flag
            </button><br/>
           
            <button className='Test-submit' onClick={()=>{setToggle(!toggle) ; swal("Quiz Submitted!", {
              icon: "success",
            }); }} >submit</button>
            <br/>
              {
                questions.map(question=>
                  <button 
                      className='Test-button'  
                      style={{backgroundColor:question.isFlagged?'#BF40BF':question.questionAttempted?'#4CAF50':'cadetblue'}}  
                      onClick={(e)=>{setIndex(e.target.value-1)}} 
                      value={question.questionNo}>
                        {question.questionNo}
                  </button>
                )
              }
        </div>
  )

}

export default Test
