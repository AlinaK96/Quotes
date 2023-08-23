import React from "react"
import CustomBtn from "../components/UI/customLink";
import FavQuotes from "../components/FavQuotesList";

const Favourites = () => {
    const Favquotes = [{
        id: 1,
        quote:"I'm not a great writer. I write badly.",
        author:'Ne',
    },
    {
        id: 2,
        quote:"I'm not a great writer. I write badly.",
        author:'Ne',
    },
    {
        id: 3,
        quote:"I'm not a great writer. I write badly.",
        author:'Ne',
    }
    ]
    return (
        <div>
            <CustomBtn title='Все цитаты' link='/' />
            <p className="favourites__header">Избранное: </p>
            <FavQuotes Favquotes={Favquotes}/>
        </div>
    )
};

export default Favourites;
