import logo from './logo.svg';
import './App.css';
import Calendar from './pages/Calendar';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Navigation className="mt-1 w100 h100"></Navigation>
    </div>

  );
}

export default App;
