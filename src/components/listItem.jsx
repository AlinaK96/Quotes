import React from "react";


const ListItem = ({ item, onClick }) => {
    return (
        <div className="quotes__box">
            <p>{item.quote}</p>
            <hr />
            <div className="quotes__box__footer">
                <span>{item.author}</span>
                <button className="favourites__btn" onClick={() => onClick(item)}> в избранное</button>
            </div>
        </div>
    );
};

export default ListItem;