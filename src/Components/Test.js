import React ,{useContext,useState,useEffect} from 'react'
import Question from './Question'
import {NavLink} from 'react-router-dom'
import {ScoreContext} from './ScoreContext'
import './Color.css'



let questions = [
  {
    questionText: 'Who is Prime Minister of India?',
    questionNo:1,
    questionAttempted:false,
    isFlagged:false,
    answerOptions: [
      { answerText: 'Vijay Rupani', isCorrect: false,isAttempted:false },
      { answerText: 'Manmohan singh', isCorrect: false,isAttempted:false  },
      { answerText: 'Narendra Modi', isCorrect: true ,isAttempted:false },
      { answerText: 'Deep Patel', isCorrect: false,isAttempted:false  },
    ],
  },
  {
    questionText: 'Who is CEO of Tata?',
    questionNo:2,
    questionAttempted:false,
    isFlagged:false,
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false,isAttempted:false  },
      { answerText: 'Ratan Tata', isCorrect: true ,isAttempted:false },
      { answerText: 'Mukesh Ambani', isCorrect: false,isAttempted:false  },
      { answerText: 'Gautam Adani', isCorrect: false,isAttempted:false  },
    ],
  },
  {
    questionText: 'who is richest person in the world?',
    questionNo:3,
    questionAttempted:false,
    isFlagged:false,
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false,isAttempted:false  },
      { answerText: 'Elon Musk', isCorrect: true ,isAttempted:false },
      { answerText: 'Mukesh Ambani', isCorrect: false,isAttempted:false  },
      { answerText: 'Warren Buffett', isCorrect: false,isAttempted:false  },
    ],
  },
  {
    questionText: 'how many countries in the world?',
    questionNo:4,
    questionAttempted:false,
    isFlagged:false,
    answerOptions: [
      { answerText: '120', isCorrect: false,isAttempted:false  },
      { answerText: '183', isCorrect: false,isAttempted:false  },
      { answerText: '170', isCorrect: false,isAttempted:false  },
      { answerText: '195', isCorrect: true ,isAttempted:false },
    ],
  },
  {
      questionText: 'What is part of a database that holds only one type of information?',
      questionNo:5,
      questionAttempted:false,
      isFlagged:false,
      answerOptions: [
        { answerText: 'File', isCorrect: false,isAttempted:false  },
        { answerText: 'Record', isCorrect: false,isAttempted:false  },
        { answerText: 'Report', isCorrect: false,isAttempted:false  },
        { answerText: 'Field', isCorrect: true ,isAttempted:false },
      ],
  },
  {
      questionText: 'Who developed Yahoo?',
      questionNo:6,
      questionAttempted:false,
      isFlagged:false,
      answerOptions: [
        { answerText: 'Steve Case & Jeff Bezos', isCorrect: false,isAttempted:false  },
        { answerText: 'David Filo & Jerry Yang', isCorrect: true ,isAttempted:false },
        { answerText: 'Dennis Ritchie & Ken Thompson', isCorrect: false,isAttempted:false  },
        { answerText: 'Vint Cerf & Robert Kahn', isCorrect: false,isAttempted:false  },
      ],
    },
    {
      questionText: 'What was the first ARPANET message?',
      questionNo:7,
      questionAttempted:false,
      isFlagged:false,
      answerOptions: [
        { answerText: '"lo"', isCorrect: true ,isAttempted:false },
        { answerText: '"cyberspace, the final frontier"', isCorrect: false,isAttempted:false  },
        { answerText: '"mary had a little lamb"', isCorrect: false,isAttempted:false  },
        { answerText: '"hello world"', isCorrect: false,isAttempted:false  },
      ],
    },
    {
      questionText: 'Which is the hottest Planet?',
      questionNo:8,
      questionAttempted:false,
      isFlagged:false,
      answerOptions: [
        { answerText: 'Venus', isCorrect: true ,isAttempted:false },
        { answerText: 'Mercury', isCorrect: false,isAttempted:false  },
        { answerText: 'Mars', isCorrect: false,isAttempted:false  },
        { answerText: 'Jupitor', isCorrect: false,isAttempted:false  },
      ],
    },
    {
      questionText: 'Who is the current CEO of Github?',
      questionNo:9,
      questionAttempted:false,
      isFlagged:false,
      answerOptions: [
        { answerText: 'Nat Friedman', isCorrect: true ,isAttempted:false },
        { answerText: 'Chris Wanstrath', isCorrect: false,isAttempted:false  },
        { answerText: 'Rajnath Singh', isCorrect: false,isAttempted:false  },
        { answerText: 'Alison Tyler', isCorrect: false,isAttempted:false  },
      ],
    },
    {
      questionText: 'Which was the first ever movie released in India?',
      questionNo:10,
      questionAttempted:false,
      isFlagged:false,
      answerOptions: [
        { answerText: 'Mugle Azam', isCorrect: false,isAttempted:false  },
        { answerText: 'Tere Naam', isCorrect: false,isAttempted:false  },
        { answerText: 'Angoor', isCorrect: false,isAttempted:false  },
        { answerText: 'Raja Harishchandra', isCorrect: true ,isAttempted:false },
      ],
    }
]



function Test() {
  const {handleScore,scoreArr,score} =useContext(ScoreContext);
  
  const [index,setIndex]=useState(0);
  
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
    questions= [
      {
        questionText: 'Who is Prime Minister of India?',
        questionNo:1,
        questionAttempted:false,
        isFlagged:false,
        answerOptions: [
          { answerText: 'Vijay Rupani', isCorrect: false,isAttempted:false },
          { answerText: 'Manmohan singh', isCorrect: false,isAttempted:false  },
          { answerText: 'Narendra Modi', isCorrect: true ,isAttempted:false },
          { answerText: 'Deep Patel', isCorrect: false,isAttempted:false  },
        ],
      },
      {
        questionText: 'Who is CEO of Tata?',
        questionNo:2,
        questionAttempted:false,
        isFlagged:false,
        answerOptions: [
          { answerText: 'Jeff Bezos', isCorrect: false,isAttempted:false  },
          { answerText: 'Ratan Tata', isCorrect: true ,isAttempted:false },
          { answerText: 'Mukesh Ambani', isCorrect: false,isAttempted:false  },
          { answerText: 'Gautam Adani', isCorrect: false,isAttempted:false  },
        ],
      },
      {
        questionText: 'who is richest person in the world?',
        questionNo:3,
        questionAttempted:false,
        isFlagged:false,
        answerOptions: [
          { answerText: 'Jeff Bezos', isCorrect: false,isAttempted:false  },
          { answerText: 'Elon Musk', isCorrect: true ,isAttempted:false },
          { answerText: 'Mukesh Ambani', isCorrect: false,isAttempted:false  },
          { answerText: 'Warren Buffett', isCorrect: false,isAttempted:false  },
        ],
      },
      {
        questionText: 'how many countries in the world?',
        questionNo:4,
        questionAttempted:false,
        isFlagged:false,
        answerOptions: [
          { answerText: '120', isCorrect: false,isAttempted:false  },
          { answerText: '183', isCorrect: false,isAttempted:false  },
          { answerText: '170', isCorrect: false,isAttempted:false  },
          { answerText: '195', isCorrect: true ,isAttempted:false },
        ],
      },
      {
          questionText: 'What is part of a database that holds only one type of information?',
          questionNo:5,
          questionAttempted:false,
          isFlagged:false,
          answerOptions: [
            { answerText: 'File', isCorrect: false,isAttempted:false  },
            { answerText: 'Record', isCorrect: false,isAttempted:false  },
            { answerText: 'Report', isCorrect: false,isAttempted:false  },
            { answerText: 'Field', isCorrect: true ,isAttempted:false },
          ],
      },
      {
          questionText: 'Who developed Yahoo?',
          questionNo:6,
          questionAttempted:false,
          isFlagged:false,
          answerOptions: [
            { answerText: 'Steve Case & Jeff Bezos', isCorrect: false,isAttempted:false  },
            { answerText: 'David Filo & Jerry Yang', isCorrect: true ,isAttempted:false },
            { answerText: 'Dennis Ritchie & Ken Thompson', isCorrect: false,isAttempted:false  },
            { answerText: 'Vint Cerf & Robert Kahn', isCorrect: false,isAttempted:false  },
          ],
        },
        {
          questionText: 'What was the first ARPANET message?',
          questionNo:7,
          questionAttempted:false,
          isFlagged:false,
          answerOptions: [
            { answerText: '"lo"', isCorrect: true ,isAttempted:false },
            { answerText: '"cyberspace, the final frontier"', isCorrect: false,isAttempted:false  },
            { answerText: '"mary had a little lamb"', isCorrect: false,isAttempted:false  },
            { answerText: '"hello world"', isCorrect: false,isAttempted:false  },
          ],
        },
        {
          questionText: 'Which is the hottest Planet?',
          questionNo:8,
          questionAttempted:false,
          isFlagged:false,
          answerOptions: [
            { answerText: 'Venus', isCorrect: true ,isAttempted:false },
            { answerText: 'Mercury', isCorrect: false,isAttempted:false  },
            { answerText: 'Mars', isCorrect: false,isAttempted:false  },
            { answerText: 'Jupitor', isCorrect: false,isAttempted:false  },
          ],
        },
        {
          questionText: 'Who is the current CEO of Github?',
          questionNo:9,
          questionAttempted:false,
          isFlagged:false,
          answerOptions: [
            { answerText: 'Nat Friedman', isCorrect: true ,isAttempted:false },
            { answerText: 'Chris Wanstrath', isCorrect: false,isAttempted:false  },
            { answerText: 'Rajnath Singh', isCorrect: false,isAttempted:false  },
            { answerText: 'Alison Tyler', isCorrect: false,isAttempted:false  },
          ],
        },
        {
          questionText: 'Which was the first ever movie released in India?',
          questionNo:10,
          questionAttempted:false,
          isFlagged:false,
          answerOptions: [
            { answerText: 'Mugle Azam', isCorrect: false,isAttempted:false  },
            { answerText: 'Tere Naam', isCorrect: false,isAttempted:false  },
            { answerText: 'Angoor', isCorrect: false,isAttempted:false  },
            { answerText: 'Raja Harishchandra', isCorrect: true ,isAttempted:false },
          ],
        }
    ]
    },[toggle])

  const handleIndex=()=>{
    scoreArr[index]=false; 
    questions[index].questionAttempted=false
    
    questions[index].answerOptions.map(ansOpt=>{
      if(ansOpt.isAttempted) 
        ansOpt.isAttempted=false
    })
  }
  
  
  if(toggle){
    return(
      <>
            <h1>Your score {score}</h1>
            <NavLink  to='/quizApp' >Retry</NavLink>
      </>
    )
  }
  return (
        <div>
            <h1>Test</h1>
            <p>{`${index+1}/${questions.length}`}</p>
           
            <React.Fragment>
              <div className='wrapper'>
                  { minutes === 0 && seconds === 0 ? (
                      <React.Fragment>
                        {setToggle(!toggle)}
                      </React.Fragment>
                  ) : (
                      <React.Fragment>
                          <h1>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                      </React.Fragment>
                  )}
              </div>
            </React.Fragment>
            
            <Question question={questions[index]} index={index}/><br/>
            <button onClick={()=>index!=0 && setIndex(index-1) }>Previous</button><br/>
            <button onClick={()=>index<questions.length-1 && setIndex(index+1) }>Next</button><br/>
            <button onClick={()=>handleIndex()}>Clear</button><br/>
            <button onClick={()=>{questions[index].isFlagged=true}}>Flag</button>
            <button onClick={()=>setToggle(!toggle)} >submit</button>
            <br/>
            <br/>
              {
                questions.map(question=>
                  <button className={question.isFlagged?'review':question.questionAttempted?'marked':''} onClick={(e)=>{setIndex(e.target.value-1)}} value={question.questionNo}>{question.questionNo}</button>
                )
              }
        </div>
  )

}

export default Test
