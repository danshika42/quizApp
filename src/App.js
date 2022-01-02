import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Test from './Components/Test';
import { ScoreProvider } from './Components/ScoreContext';
import End from './Components/End';

function App() {
  return (
    <ScoreProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/test' element={<Test/>}/>
          <Route path='/end' element={<End/>} />
        </Routes>
      </div>
    </ScoreProvider>
  );
}

export default App;
