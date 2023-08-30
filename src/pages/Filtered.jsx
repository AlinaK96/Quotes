import React, {useState, useMemo} from "react"
import ListItem from "../components/listItem";

const FilteredList = ({quotes, setFavorites, favorites}) => {
    const [ author, setAuthor ] = useState(null);
    

    const authors = useMemo(() => [...new Set(quotes.map(i => i.author))],[quotes]);
    const filteredquotes = useMemo(() => [[author, i => i.author === author],]
        .reduce((acc, i) => i[0] ? acc.filter(i[1]) : acc, quotes),[ quotes, author ]);

    const addToFavourites = (i) => {
        setFavorites([...favorites, i]);
    }

    return (
        <div>
            <p className="favourites__header">Поиск: </p>
            <div className="quotes__container filted">
                <select value={author} onChange={e => setAuthor(e.target.value)} className="custom__select">
                    <option>Поиск...</option>
                    {authors.map(i => <option>{i}</option>)}
                </select>
                {filteredquotes.map(i => <ListItem item={i} onClick={addToFavourites}/>)}
            </div>
        </div>
    )
};

export default FilteredList;
