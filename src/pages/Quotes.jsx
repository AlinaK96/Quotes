import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CustomBtn from "../components/UI/customLink";
import QuotesList from '../components/quotesList';

function Quotes() {
    const [quotes, setquotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://dummyjson.com/quotes?skip=0&limit=100',
            );
            setquotes(result.data.quotes);
        };
        fetchData();
    }, []);

    return (
        <div>
            <CustomBtn title='Favourites' link='/Favourites'/>
            <QuotesList quotes={quotes} />
        </div>

    );
}

export default Quotes;