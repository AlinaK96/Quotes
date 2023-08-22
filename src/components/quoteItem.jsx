import React from "react";

const QuoteItem = (props) => {
    return (
        <div>
            <div className='post'>
                <div className='post__header'>
                    <strong>{props.number}. {props.post.content}</strong>
                    <div>{props.post.auth}</div>
                </div>
            </div>
        </div>
    )
}

export default QuoteItem