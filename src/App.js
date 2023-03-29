import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar';
import Developer from './pages/Developer';
import History from './pages/History';
import Error from './pages/Error';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/developer' element={<Developer/>} />
              <Route path='/history' element={<History/>} />
              <Route path='*' element={<Error/>} />
          </Routes>
          <Footer />
          </Router>
    </div>
  );
}

export default App;
