import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from "../components/Main/Main";
import Speed from "./Speed/Speed.js"
import Motion from './Motion';
import NavBarMain from './MainMenu';
import EquationOfMotion from './EquationOfMotion/EquationOfMotion';
import NavBar from './NavBar/NavBar';
import './App.css'


function App() {

  function handleSpeed () {
    
  }
  return (
    <div className="app">
      <Routes>
      <Route exact path='/' element={<Main />}        />
      <Route exact path='/speed' element={<Speed />} />
      <Route exact path='/equationofmotion' element={<EquationOfMotion />} />
    </Routes>
    </div>
    
  );
}

export default App;
