import React from "react";

const QuoteItem = (props) => {
    return (
        <div className="quotes__box">
            <p>{props.post.content}</p>
            <hr />
            <span>{props.post.auth}</span>
        </div>
    )
}

export default QuoteItem