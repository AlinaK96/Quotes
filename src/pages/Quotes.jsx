import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CustomBtn from "../components/UI/customLink";
import QuotesList from '../components/quotesList';

function Quotes() {
    const [quotes, setquotes] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        
        const fetchData = async () => {
            setLoading(true);
            const result = await axios(
                'https://dummyjson.com/quotes?skip=0&limit=10',
            );
            setquotes(result.data.quotes);
            setLoading(false)
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