import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Test from './Components/Test';
import { ScoreProvider } from './Components/ScoreContext';

function App() {
  return (
    <ScoreProvider>
      <div className="App">
        <Routes>
          <Route path='quizApp' element={<Home/>} />
          <Route path='quizApp/test' element={<Test/>}/>
        </Routes>
      </div>
    </ScoreProvider>
  );
}

export default App;
