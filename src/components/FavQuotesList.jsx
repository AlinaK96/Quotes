import React from "react"

const FavQuotes = ({ favorites, onRemove }) => {
    if (favorites.length === 0) {
        return <div>Пока нет элементов в избранном</div>;
    }
    
    return (
        <div className="quotes__container">
            {favorites.map((favorite) => {
                return (
                    <div className="quotes__box" key={favorite.id}>
                        <p>{favorite.quote}</p>
                        <hr />
                        <div className="quotes__box__footer">
                            <span>{favorite.author}</span>
                            <button onClick={() => onRemove(favorite)}>Убрать </button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default FavQuotes;
