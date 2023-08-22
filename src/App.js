import logo from './logo.svg';
import './styles/App.css';
import searchCity from './utils/API/getQuotes';

function App() {
  searchCity()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
