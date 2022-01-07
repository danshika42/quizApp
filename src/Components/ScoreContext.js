import React,{createContext,useState} from 'react'

export const ScoreContext= createContext();



export function ScoreProvider(props){
    const questions = [
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
      
      
    const [name,setName]=useState('');
    const handleName=(nameVal)=>{
        setName(nameVal);
    }
    const scoreArr=[false,false,false,false,false,false,false];
    let count=0;
    const [score,setscore]=useState(0);
    const handleScore=()=>{
         for(var i=0;i<scoreArr.length;i++){
            if(scoreArr[i])
            count++;
         }
         setscore(count);
    }

    return(
        <ScoreContext.Provider value={{handleScore,score,scoreArr,handleName,name,questions}} >
            {props.children}
        </ScoreContext.Provider>
    )
}