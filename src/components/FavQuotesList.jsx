import React from "react"
import ToolTip from "./UI/tooltips/tooltip";

const FavQuotes = ({ favorites, onRemove }) => {
    return (
        <div>
            <p className="favourites__header">Избранное: </p>
            <div className="quotes__container">
                {favorites.map((favorite) => {
                    return (
                        <div className="quotes__box" key={favorites.id}>
                            <ToolTip item={favorite.quote} />
                            <p>{favorite.quote}</p>
                            <hr />
                            <div className="quotes__box__footer">
                                <span>{favorite.author}</span>
                                <button className="favourites__btn" onClick={() => onRemove(favorite)}>удалить </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default FavQuotes;
