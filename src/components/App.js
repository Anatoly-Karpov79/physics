import { Routes, Route } from 'react-router-dom';
import Main from "./Main";
import NavBarSpeed from "./Speed.js"



function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Main />} />   
         <Route path="/speed" element={<NavBarSpeed />} />  
      </Routes>
      
      
    </>
  );
}

export default App;
