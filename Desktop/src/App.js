import './App.css';
import React from 'react';
import Form_login from './component/formpage';
import Welform from './component/welcomepage';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {
  return (
    <div className="App"> 
      <br></br>
      <Router basename='/'>
        <Routes>
          <Route path='/' exact element={<Form_login/>}/>
          <Route path='/welcome' exact element={<Welform/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
