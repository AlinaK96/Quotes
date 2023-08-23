import React from "react"
import RemoveBtn from "./UI/button/removeBtn";

const FavQuotes = ({Favquotes}) => {
    const RemoveFav = () => {
        alert('Remove from fav')
    }

    return (
        <div className="quotes__container">
            {Favquotes.map(({ id, quote, author }) => {
                return (
                    <div className="quotes__box" key={id}>
                        <p>{quote}</p>
                        <hr />
                        <div className="quotes__box__footer">
                            <span>{author}</span>
                            <RemoveBtn RemoveFav={RemoveFav} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default FavQuotes;
