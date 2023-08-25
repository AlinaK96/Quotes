import React from "react"
import CustomBtn from "../components/UI/customLink";
// import FavQuotes from "../components/FavQuotesList";

const Favourites = () => {
    return (
        <div>
            <CustomBtn title='Все цитаты' link='/' />
            <p className="favourites__header">Избранное: </p>
            {/* <FavQuotes favorites={result} onRemove={Delete}  /> */}
        </div>
    )
};

export default Favourites;
