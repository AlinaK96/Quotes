import React from "react"
import CustomBtn from "../components/UI/customLink";

const Favourites = () => {
return (
    <div>
        <CustomBtn title='All quotes' link='/' />
        <p className="favourites__header">My favourite quotes: </p>
    </div>
)
};

export default Favourites;
