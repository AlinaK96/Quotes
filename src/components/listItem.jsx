import React from "react";
import ToolTip from "./UI/tooltips/tooltip";


const ListItem = ({ item, onClick }) => {
    return (
        <div className="quotes__box">
            <ToolTip item={item.quote}></ToolTip>
            <p>{item.quote}</p>
            <hr />
            <div className="quotes__box__footer">
                {/* <span class="tooltip">uiverse.io</span> */}
                <span className="quotes__author" >{item.author}</span>
                <button className="favourites__btn" onClick={() => onClick(item)}> в избранное</button>
            </div>
        </div>
    );
};

export default ListItem;