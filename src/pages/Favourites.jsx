import React from "react"
import CustomBtn from "../components/UI/customLink/customLink";
import FavQuotes from "../components/FavQuotesList";

const Favourites = () => {

    const result = JSON.parse(window.localStorage.getItem('favourites'))
    const removeFromFavorites = (item) => {
        // setFavorites(favorites.filter((i) => i.id !== item.id));
    }; 
    return (
        <div>
            <CustomBtn title='Все цитаты' link='/' />
            <FavQuotes favorites={result}  onRemove={removeFromFavorites} />
        </div>
    )
};

export default Favourites;
