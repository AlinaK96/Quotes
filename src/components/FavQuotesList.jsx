import React from "react"
import ToolTip from "./UI/tooltips/tooltip";

const FavQuotes = ({ favorites, onRemove }) => {
    
    return (
        <div>
            <h1 className="favourites__header">Избранное: </h1>
            <h3 className={ favorites.length === 0 ? 'favourites__header' : 'none'}>Пока нет избранных цитат...</h3>
            <div className="quotes__container">
                {favorites.map((favorite) => {
                    return (
                        <div className="quotes__box" key={favorites.id}>
                            <ToolTip item={favorite.quote} />
                            <p>{favorite.quote}</p>
                            <hr />
                            <div className="quotes__box__footer">
                                <span>{favorite.author}</span>
                                <button className="favourites__btn" onClick={() => onRemove(favorite)} title="Удалить">удалить </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default FavQuotes;
