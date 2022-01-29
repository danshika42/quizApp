import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Test from './Components/Test';
import { ScoreProvider } from './Components/ScoreContext';
import './Components/Home.css'
function App() {
  return (
    <ScoreProvider>
      <h1 className='Home-heading1'>Quiz App</h1>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='test' element={<Test/>}/>
          <Route path='*' element={<Home/>}  />
        </Routes>
      </div>
    </ScoreProvider>
  );
}

export default App;
