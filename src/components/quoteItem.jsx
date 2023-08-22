import React from "react";
import CustonBtn from "./UI/button/customBtn";
const QuoteItem = (props) => {
    return (
        <div className="quotes__box">
            <p>{props.post.content}</p>
            <hr />
            <div className="quotes__box__footer">
                <span>{props.post.auth}</span>
                <CustonBtn />
            </div>

        </div>
    )
}

export default QuoteItem