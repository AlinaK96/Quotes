import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Quotes from './pages/Quotes';
import Favourites from './pages/Favourites';
import Header from './components/header';


  function App() {


    return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Quotes />} />
          <Route path='/Favourites' element={<Favourites />} />
        </Routes>
        
      </div>
    </BrowserRouter>
    );
  }
  
export default App;
