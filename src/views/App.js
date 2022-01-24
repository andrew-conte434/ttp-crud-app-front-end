import './App.css';
import Home from '../components/home';
import CampusCards from '../components/CampusCards';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import React from 'react';
import AllCampuses from '../components/AllCampuses';

function App() {
  let [campusData, setCampusData] = useState()
  let [studentData, setStudentData] = useState()


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const campus = await fetch(/*fetch campus data from database*/);
  //     const campusData = await campus.json();
  //     setCampusData(campusData);

  //     const student = await fetch(/*fetch campus data from database*/);
  //     const studentData = await student.json();
  //     setStudentData(studentData);
  //   };
  //   fetchData();
  // })




  return (

    <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/campuses" element={<AllCampuses />} />

      </Routes>
    </div>
    
    </Router>
  );
}

export default App;
