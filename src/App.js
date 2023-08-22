
import Header from './components/header';
import searchCity from './utils/API/getQuotes';

function App() {
  searchCity()
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
