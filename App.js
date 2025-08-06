import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import CourseDetail from './pages/CourseDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
