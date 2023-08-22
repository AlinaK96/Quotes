import React from "react";
import fav from '../assets/img/fav.svg'
const QuoteItem = (props) => {
    return (
        <div className="quotes__box">
            <p>{props.post.content}</p>
            <hr />
            <div className="quotes__box__footer">
                <span>{props.post.auth}</span>
                <img src={fav} alt="Упс.." />
            </div>

        </div>
    )
}

export default QuoteItem