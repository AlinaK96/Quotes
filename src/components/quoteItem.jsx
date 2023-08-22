import React from "react";
import CustonBtn from "./UI/button/customBtn";
//import Preloader from "./UI/preloader/Preloader";

const QuoteItem = (props) => {
    return (
        <div className="quotes__box">
            {/* <Preloader /> */}
            <p>{props.post.quote}</p>
            <hr />
            <div className="quotes__box__footer">
                <span>{props.post.author}</span>
                <CustonBtn />
            </div>

        </div>
    )
}

export default QuoteItem