import React from 'react';
import CalendarPage from './Calendar';
import Home from './Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
const menu = [
    {
        route: '/',
        caption: 'Home',
        element: <Home/>
    },
    {
        route: '/calendar',
        caption: 'Calendario',
        element: <CalendarPage/>
    },

];

const Navigation = ()=>{
    return(
    <Router>
    <div className="w100 h100">
    <nav className="flex flex-row mt-4">
      <ul className="flex fles-row">
        {menu.map((v)=>(
            <li className="block py-2 pr-4 pl-4 text-white bg-blue-900 rounded "> 
                <Link to={v.route}>{v.caption}</Link>
            </li>
        ))}
      </ul>
    </nav>
    <Routes>
        {menu.map((v)=>(
            <Route path={v.route} element={v.element}> </Route>
        ))}
    </Routes>
  </div>
  </Router>)

}
export default Navigation;