import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Quotes from './pages/Quotes';
import Favourites from './pages/Favourites';
import Header from './components/header';
import ListItem from './components/listItem';
import FavouriteList from './pages/FavoriteList';


  function App() {
    const [loading, setLoading] = useState(true);
    const spinner = document.getElementById("spinner");
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = "none";
        setLoading(false);
      }, 2000);
    }

    const [list, setList] = useState([
      { id: 1, title: "Элемент 1" },
    ]);
   
    const [favorites, setFavorites] = useState([]);
   
    const addToFavorites = (item) => {
      setFavorites([...favorites, item]);
    };
   
    const removeFromFavorites = (item) => {
      setFavorites(favorites.filter((i) => i.id !== item.id));
      setList([...list, item]);
    }; 
    return (
      !loading && (
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Quotes />} />
              <Route path='/Favourites' element={<Favourites />} />
            </Routes>

            {list.map((item) => (
              <ListItem item={item} key={item.id} onClick={addToFavorites} />
            ))}

            <FavouriteList favorites={favorites} onRemove={removeFromFavorites} />
          </div>
        </BrowserRouter> 
      )
    );
  }
  
export default App;
