import React from 'react';
import CalendarPage from './Calendar';
import Home from './Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
const Navigation = ()=>{
    return(
    <Router>
    <div className="w100 h100">
    <nav className="flex flex-row mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <ul>
        <li className="py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"> 
          <Link to="/">Home</Link>
        </li>
        <li className=" py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"> 
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/calendar" element={<CalendarPage />}> </Route>
    </Routes>
  </div>
  </Router>)

}
export default Navigation;