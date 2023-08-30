import React, {useState, useMemo} from "react"
import ListItem from "../components/listItem";

const FilteredList = ({quotes}) => {
    const [ author, setAuthor ] = useState(null);

    const authors = useMemo(() => [...new Set(quotes.map(n => n.author))],[quotes]);
    const filteredquotes = useMemo(() => [[author, n => n.author === author],]
        .reduce((acc, n) => n[0] ? acc.filter(n[1]) : acc, quotes),[ quotes, author ]);
    return (
        <div>
            <select value={author} onChange={e => setAuthor(e.target.value)}>
                <option></option>
                {authors.map(n => <option>{n}</option>)}
            </select>
            {filteredquotes.map(n => <ListItem item={n} />)}
        </div>
    )
};

export default FilteredList;
