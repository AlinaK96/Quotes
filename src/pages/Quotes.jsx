import React, { useState } from "react"
import QuotesList from '../components/quotesList';
import CustomBtn from "../components/UI/customBtn";

const Quotes = () => {
    const getQuotes = async () => {
        const url = `https://dummyjson.com/quotes?skip=0&limit=100`
            const response = await fetch(url);
            const data = await response.json();
            
            if (response.ok) {
                // return data.quotes;
                console.log(data);
            } else {
                throw new Error('Не удалось загрузить данные');
            }
        };
    
    getQuotes()    
    const [quotes] = useState ([
        {id: 1, content: "Life isn’t about getting and having, it’s about giving and being.", auth: '"Kevin Kruse"'},
        {id: 2, content: "Life is 10% what happens to me and 90% of how I react to it.", auth: 'Автозаполнение'},
        {id: 3, content: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", auth: 'Автозаполнение'},
        {id: 4, content: "Life isn’t about getting and having, it’s about giving and being.", auth: '"Kevin Kruse"'},
        {id: 5, content: "Life is 10% what happens to me and 90% of how I react to it.", auth: 'Автозаполнение'},
        {id: 6, content: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", auth: 'Автозаполнение'}
        
    ])
    return (
        <div>
            <CustomBtn title='Favourites' link='/Favourites'/>
            <QuotesList quotes={quotes} />
        </div>
)
};

export default Quotes;
