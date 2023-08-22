import React from "react";
import QuoteItem from "./quoteItem";

const QuotesList = ({quotes}) => {

    return (
        <div className="quotes__container">
            {quotes.map((quote) => (
                <QuoteItem  post={quote} key={quote.id}/>  
            ))}
        </div>
    )
}

export default QuotesList;