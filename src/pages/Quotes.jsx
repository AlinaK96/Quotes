import React, {useEffect, useState} from 'react';
import axios from 'axios';

import CustomBtn from "../components/UI/customLink/customLink";
import QuotesList from '../components/QuotesList';
import FilteredList from './Filtered';

function Quotes() {
    const [quotes, setquotes] = useState([]);
    const [favorites, setFavorites] = useState([]);

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
            <CustomBtn title='Избранное' link='/Favourites'/>
            <FilteredList quotes={quotes} favorites={favorites} setFavorites={setFavorites} />
            <QuotesList pageLimit={10} quotes={quotes} setquotes={setquotes} favorites={favorites} setFavorites={setFavorites} />
        </div>

    );
}

export default Quotes;