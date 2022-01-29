import React ,{useContext,useState,useEffect} from 'react'
import Question from './Question'
import {NavLink} from 'react-router-dom'
import {ScoreContext} from './ScoreContext'
import swal from 'sweetalert';
import {v4 as uuid} from 'uuid'
import './Test.css'

function Test() {
  const {handleScore,scoreArr,score,name,handleName,questions} =useContext(ScoreContext);
  
  const [index,setIndex]=useState(0);

  // const [question,setQuestion]=useState(questions[0]);
  
  // useEffect(()=>{
  //   setQuestion(questions[index]);
  // },[index]);

  
  const [flag,setFlag]=useState(new Array(questions.length).fill(false));
  const handleFlag=(index)=>{
    setFlag(
    flag.map((ele,num)=>{
    if(num===index)
     return !ele;
    else
     return ele;
    })
    )
  }

  const [attempted,setAttempted]=useState(new Array(questions.length).fill(false));
  const handleAttempted=(index)=>{
    setAttempted(
    attempted.map((ele,num)=>{
    if(num===index)
     return true;
    else
     return ele;
    })
    )
  }
  
  const handleClear=()=>{
    questions[index].answerOptions.map((ansopt)=>{
      ansopt.isAttempted=false;
    })
    if(scoreArr.has(index))
    scoreArr.delete(index);
  
    attempted[index]=false;
  }
  
  
  const [minutes, setMinutes] = useState(9)
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
  
  if(toggle){
    return(
      <>
            <h1 className='Test-end'> {name===''?'No Name 🥱':name} ,Your score {score}</h1>
            <NavLink className='Test-retry'  to='/' >Retry</NavLink>
      </>
    )
  }

  return (
        <div className='Test'>           
            <>
              <div className='Test-wrapper'>
                  { minutes === 0 && seconds === 0 ? (
                      <>
                        {setToggle(!toggle)}
                      </>
                  ) : (
                      <>
                          <h1 className='Test-clock'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                      </>
                  )}
              </div>
            </>
           
            <span className='Test-index'>{`${index+1}/${questions.length}`}</span>
           
            <Question question={questions[index]} index={index} handleAttempted={handleAttempted}/>
           
            <button 
                className='Test-chevron-p' 
                onClick={()=>index!==0 && setIndex(index-1) }>
                  <i className="fas fa-chevron-left"></i>
            </button>
           
            <button 
                className='Test-chevron-n'
                onClick={()=>index<questions.length-1 && setIndex(index+1) }>
                  <i className="fas fa-chevron-right"></i>
            </button><br/>
           
            <button 
                className='Test-clear' 
                onClick={()=>handleClear()}>
                  <i className="fas fa-broom"></i> Clear
            </button>
            
            <button 
                className='Test-flag' 
                onClick={()=>handleFlag(index)}>
                  <i className="far fa-flag"></i>  Flag
            </button><br/>
           
            <button className='Test-submit' onClick={()=>{setToggle(!toggle) ; swal("Quiz Submitted!", {
              icon: "success",
            }); }} >Submit</button>
            <br/>
            
              {
                questions.map((question,opt)=>
                  <button 
                    className='Test-button'  
                    key={uuid()}
                    style={{backgroundColor:flag[opt]?'#BF40BF':attempted[opt]?'#4CAF50':'cadetblue'}}  
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
