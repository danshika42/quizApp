import React,{createContext,useState} from 'react'

export const ScoreContext= createContext();



export function ScoreProvider(props){
   
  let questions = [
    {
      questionText: 'Who is Prime Minister of India?',
      questionNo:1,
      correctOption:2,
      answerOptions: [
        { answerText: 'Vijay Rupani',isAttempted:false },
        { answerText: 'Manmohan singh',isAttempted:false  },
        { answerText: 'Narendra Modi',isAttempted:false },
        { answerText: 'Deep Patel',isAttempted:false  },
      ],
    },
    {
      questionText: 'Who is CEO of Tata?',
      questionNo:2,
      correctOption:1,
      answerOptions: [
        { answerText: 'Jeff Bezos',isAttempted:false  },
        { answerText: 'Ratan Tata',isAttempted:false },
        { answerText: 'Mukesh Ambani',isAttempted:false  },
        { answerText: 'Gautam Adani',isAttempted:false  },
      ],
    },
    {
      questionText: 'who is richest person in the world?',
      questionNo:3,
      correctOption:1,
      answerOptions: [
        { answerText: 'Jeff Bezos',isAttempted:false  },
        { answerText: 'Elon Musk',isAttempted:false },
        { answerText: 'Mukesh Ambani',isAttempted:false  },
        { answerText: 'Warren Buffett',isAttempted:false  },
      ],
    },
    {
      questionText: 'how many countries in the world?',
      questionNo:4,
      correctOption:3,
      answerOptions: [
        { answerText: '120',isAttempted:false  },
        { answerText: '183',isAttempted:false  },
        { answerText: '170',isAttempted:false  },
        { answerText: '195',isAttempted:false },
      ],
    },
    {
        questionText: 'What is part of a database that holds only one type of information?',
        questionNo:5,
        correctOption:3,
        answerOptions: [
          { answerText: 'File',isAttempted:false  },
          { answerText: 'Record',isAttempted:false  },
          { answerText: 'Report',isAttempted:false  },
          { answerText: 'Field',isAttempted:false },
        ],
    },
    {
        questionText: 'Who developed Yahoo?',
        questionNo:6,
        correctOption:1,
        answerOptions: [
          { answerText: 'Steve Case & Jeff Bezos',isAttempted:false  },
          { answerText: 'David Filo & Jerry Yang',isAttempted:false },
          { answerText: 'Dennis Ritchie & Ken Thompson',isAttempted:false  },
          { answerText: 'Vint Cerf & Robert Kahn',isAttempted:false  },
        ],
      },
      {
        questionText: 'What was the first ARPANET message?',
        questionNo:7,
        correctOption:0,
        answerOptions: [
          { answerText: '"lo"',isAttempted:false },
          { answerText: '"cyberspace, the final frontier"',isAttempted:false  },
          { answerText: '"mary had a little lamb"',isAttempted:false  },
          { answerText: '"hello world"',isAttempted:false  },
        ],
      },
      {
        questionText: 'Which is the hottest Planet?',
        questionNo:8,
        correctOption:0,
        answerOptions: [
          { answerText: 'Venus',isAttempted:false },
          { answerText: 'Mercury',isAttempted:false  },
          { answerText: 'Mars',isAttempted:false  },
          { answerText: 'Jupitor',isAttempted:false  },
        ],
      },
      {
        questionText: 'Who is the current CEO of Github?',
        questionNo:9,
        correctOption:0,
        answerOptions: [
          { answerText: 'Nat Friedman',isAttempted:false },
          { answerText: 'Chris Wanstrath',isAttempted:false  },
          { answerText: 'Rajnath Singh',isAttempted:false  },
          { answerText: 'Alison Tyler',isAttempted:false  },
        ],
      },
      {
        questionText: 'Which was the first ever movie released in India?',
        questionNo:10,
        correctOption:3,
        answerOptions: [
          { answerText: 'Mugle Azam',isAttempted:false  },
          { answerText: 'Tere Naam',isAttempted:false  },
          { answerText: 'Angoor',isAttempted:false  },
          { answerText: 'Raja Harishchandra',isAttempted:false },
        ],
      }
  ]
      
    const [name,setName]=useState('');
    const handleName=(nameVal)=>{
        setName(nameVal);
    }



    const scoreArr=new Set();
    const [score,setscore]=useState(0);
    const handleScore=()=>{
        setscore(scoreArr.size);
    }

    return(
        <ScoreContext.Provider value={{handleScore,score,scoreArr,handleName,name,questions}} >
            {props.children}
        </ScoreContext.Provider>
    )
}