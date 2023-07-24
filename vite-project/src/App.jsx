import React from 'react';
import { HashRouter, Routes , Route} from "react-router-dom";
import Income from './components/Income';
import Expenses from './components/Expenses';
import Menu from './Menu';
import Home from './components/Home';


const App = () => {
  return (
    <div>
       <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Income" element={<Income/>}/>
          <Route path="/Expenses" element ={<Expenses/>}/>
        </Routes>
       </HashRouter>
    </div>
  );
};

export default App;