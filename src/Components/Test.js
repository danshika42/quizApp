import React ,{useContext,useState,useEffect} from 'react'
import Question from './Question'
import {NavLink} from 'react-router-dom'
import {ScoreContext} from './ScoreContext'
import End from './End'

const questions = [
  {
    questionText: 'Who is Prime Minister of India?',
    answerOptions: [
      { answerText: 'Vijay Rupani', isCorrect: false },
      { answerText: 'Manmohan singh', isCorrect: false },
      { answerText: 'Narendra Modi', isCorrect: true },
      { answerText: 'Deep Patel', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tata?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Ratan Tata', isCorrect: true },
      { answerText: 'Mukesh Ambani', isCorrect: false },
      { answerText: 'Gautam Adani', isCorrect: false },
    ],
  },
  {
    questionText: 'who is richest person in the world?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Mukesh Ambani', isCorrect: false },
      { answerText: 'Warren Buffett', isCorrect: false },
    ],
  },
  {
    questionText: 'how many countries in the world?',
    answerOptions: [
      { answerText: '120', isCorrect: false },
      { answerText: '183', isCorrect: false },
      { answerText: '170', isCorrect: false },
      { answerText: '195', isCorrect: true },
    ],
  },
  {
      questionText: 'What is part of a database that holds only one type of information?',
      answerOptions: [
        { answerText: 'File', isCorrect: false },
        { answerText: 'Record', isCorrect: false },
        { answerText: 'Report', isCorrect: false },
        { answerText: 'Field', isCorrect: true },
      ],
  },
  {
      questionText: 'Who developed Yahoo?',
      answerOptions: [
        { answerText: 'Steve Case & Jeff Bezos', isCorrect: false },
        { answerText: 'David Filo & Jerry Yang', isCorrect: true },
        { answerText: 'Dennis Ritchie & Ken Thompson', isCorrect: false },
        { answerText: 'Vint Cerf & Robert Kahn', isCorrect: false },
      ],
    },
    {
      questionText: 'What was the first ARPANET message?',
      answerOptions: [
        { answerText: '"lo"', isCorrect: true },
        { answerText: '"cyberspace, the final frontier"', isCorrect: false },
        { answerText: '"mary had a little lamb"', isCorrect: false },
        { answerText: '"hello world"', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the hottest Planet?',
      answerOptions: [
        { answerText: 'Venus', isCorrect: true },
        { answerText: 'Mercury', isCorrect: false },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Jupitor', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the current CEO of Github?',
      answerOptions: [
        { answerText: 'Nat Friedman', isCorrect: true },
        { answerText: 'Chris Wanstrath', isCorrect: false },
        { answerText: 'Rajnath Singh', isCorrect: false },
        { answerText: 'Alison Tyler', isCorrect: false },
      ],
    },
    {
      questionText: 'Which was the first ever movie released in India?',
      answerOptions: [
        { answerText: 'Mugle Azam', isCorrect: false },
        { answerText: 'Tere Naam', isCorrect: false },
        { answerText: 'Angoor', isCorrect: false },
        { answerText: 'Raja Harishchandra', isCorrect: true },
      ],
    }
]

function Test() {
  const {handleScore,scoreArr} =useContext(ScoreContext);
  
  const [index,setIndex]=useState(0);
  
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(60)
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
  
  if(toggle){
    return(
      <>
      <End/>
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
            <Question question={questions[index]} index={index}/>
            <button  onClick={()=>index!=0 && setIndex(index-1) }>Previous</button>
            <button  onClick={()=>index<questions.length-1 && setIndex(index+1) }>Next</button>
            <button  onClick={()=>scoreArr[index]=false }>Clear</button>
            <NavLink to='/quizApp/end' >Submit The Test</NavLink>
        </div>
  )

}

export default Test
