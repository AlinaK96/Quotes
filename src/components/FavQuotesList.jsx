import React from "react"

const FavQuotes = ({ favorites, onRemove }) => {
    // if (favorites.length < 0) {
    //     return <div className="favourites__header">Нет избранных цитат</div>;
    // }
    
    return (
        <div className="quotes__container">
            {favorites.map((favorite) => {
                return (
                    <div className="quotes__box" key={favorite.id}>
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
    )
};

export default FavQuotes;
