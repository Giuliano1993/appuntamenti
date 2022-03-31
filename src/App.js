import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar';


function App() {
  return (
    <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          aaa
          <Calendar />
        </main>
      </div>
  );
}

export default App;
