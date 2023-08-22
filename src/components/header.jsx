import React from "react"
import FavBtn from "./UI/favourites/favLink";

const Header = () => {
return (
    <header className="header">
        <h3>Phrases to exercise your </h3>
        <h1>emotional intelligence</h1>
        <FavBtn />
    </header>
)
};

export default Header;
