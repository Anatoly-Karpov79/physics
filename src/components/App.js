import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from "../components/Main/Main";
import Speed from "./Speed/Speed.js"
import EquationOfMotion from './EquationOfMotion/EquationOfMotion';
import './App.css'
import UniformMovement from './Speed/UniformMovement/Uniformmovement';
import SpeedTask from './Speed/SpeedTask/SpeedTask';


function App() {
  
  return (
    <div className="app">
      <Routes>
      <Route exact path='/' element={<Main />}        />
      <Route exact path='/speed' element={<Speed />} />
      <Route exact path='/equationofmotion' element={<EquationOfMotion />} />
      <Route exact path='/speed/uniformmovement' element={<UniformMovement />} />
      <Route exact path='/speed/speedtask' element={<SpeedTask />} />
    </Routes>
    </div>
    
  );
}

export default App;
