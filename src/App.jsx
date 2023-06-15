import React from 'react';
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
import Año2019 from './components/Año2019';
import Año2022 from './components/Año2022';
import Año2020 from './components/año2020';
import Año2021 from './components/Año2021';
import Año2023 from './components/Año2023';
import Home from './components/Home';


import "./components/estilos.css";

const App = () => {
  return (
    <Router>
      <div className='enlaces'>
        <Link to="/Año2019">2019</Link>
        <Link to="/Año2020">2020</Link>
        <Link to="/Año2021">2021</Link>
        <Link to="/Año2022">2022</Link>
        <Link to="/Año2023">2023</Link>
        <Link to ="/Home">Home </Link>
      </div>
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Año2019" element={<Año2019 />} />
        <Route exact path="/Año2020" element={<Año2020 />} />
        <Route exact path="/Año2021" element={<Año2021 />} />
        <Route exact path="/Año2022" element={<Año2022 />} />
        <Route exact path="/Año2023" element={<Año2023 />} />
      </Routes>
    </Router>
  );
};

export default App;
