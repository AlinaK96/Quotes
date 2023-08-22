import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Quotes from './pages/Quotes';
import Favourites from './pages/Favourites';
import Header from './components/header';


  function App() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 3000);
    }

    return (
      !loading && (

    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Quotes />} />
          <Route path='/Favourites' element={<Favourites />} />
        </Routes>
        
      </div>
    </BrowserRouter> )
    );
  }
  
export default App;
