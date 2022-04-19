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
    <div>
    <nav className="flex flex-row mt-4 w-100 bg-gray-800">
      <ul className="flex fles-row">
        {menu.map((v)=>(
            <li className="block py-2 pr-4 pl-4 text-white bg-blue-900 hover:bg-blue-700 transition-colors text-lg font-medium" key={v.route}> 
                <Link to={v.route}>{v.caption}</Link>
            </li>
        ))}
      </ul>
    </nav>
    <Routes>
        {menu.map((v)=>(
            <Route path={v.route} element={v.element} key={v.route}> </Route>
        ))}
    </Routes>
  </div>
  </Router>)

}
export default Navigation;