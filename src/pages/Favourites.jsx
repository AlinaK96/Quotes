import React from "react"
import CustomBtn from "../components/UI/customLink";
import FavQuotes from "../components/FavQuotesList";

const Favourites = () => {
    const result = JSON.parse(localStorage.getItem("favourites"))

    return (
        <div>
            <CustomBtn title='Все цитаты' link='/' />
            <p className="favourites__header">Избранное: </p>
            <FavQuotes favorites={result}  />
        </div>
    )
};

export default Favourites;
