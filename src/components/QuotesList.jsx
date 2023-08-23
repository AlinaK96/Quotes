import React, {useEffect, useState} from "react"
import ListItem from "./listItem";
//import FavQuotes from "./FavQuotesList";

const Pagination = ({ pageLimit, quotes, setquotes }) => {
    const [currentPageNumber, setcurrentPageNumber] = useState(1);
    const [currPagequotes, setCurrPagequotes] = useState([]);
    const [pageNumberGroup, setPageNumberGroup] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setCurrPagequotes(getPageData());
        setPageNumberGroup(getPageNumberGroup());
    }, [quotes, currentPageNumber]);

    const nextPage = () => setcurrentPageNumber((prev) => prev + 1);
    const previousPage = () => setcurrentPageNumber((prev) => prev - 1);
    const firstPage = () => setcurrentPageNumber(1)
    const lastPage = () => setcurrentPageNumber(pageLimit)
    const changePageTo = (pageNumber) => setcurrentPageNumber(pageNumber);
    const getPageData = () => {
        const startIndex = currentPageNumber * pageLimit - pageLimit;
        const endIndex = startIndex + pageLimit;
        return quotes.slice(startIndex, endIndex);
    };
    const getPageNumberGroup = () => {
        let start = Math.floor((currentPageNumber - 1) / 3) * 3;
        return new Array(3).fill(" ").map((_, index) => start + index + 1);
    };

    const addToFavourites = (item) => {
        setFavorites([...favorites, item]);
        localStorage.setItem('favourites', JSON.stringify(favorites))
    };

    const result = JSON.parse(localStorage.getItem("favourites"))
    console.log(result);
    
    // const removeFromFavorites = (item) => {
    //     setFavorites(favorites.filter((i) => i.id !== item.id));
    // }; 

    return (
        <div>
            <div className="quotes__container">
                {currPagequotes.map((item) => (
                    <ListItem item={item} key={item.id} onClick={addToFavourites} />
                ))}
            </div>

            {/* <FavQuotes  favorites={favorites} onRemove={removeFromFavorites}/> */}

            <div className="page__content">
                <button
                    className={`page__change ${currentPageNumber === 1 ? "disabled" : ""}  `}
                    disabled={currentPageNumber === 1}
                    onClick={firstPage}>
                    В начало
                </button>

                <button
                    className={`page__change ${currentPageNumber === 1 ? "disabled" : ""}  `}
                    disabled={currentPageNumber === 1}
                    onClick={previousPage}>
                    Назад
                </button>

                <ul className="page__content">
                    {pageNumberGroup.map((value, index) => {
                    return (
                        <li
                            className={`page__content__number ${
                                currentPageNumber === value ? "active" : ""
                            } `}
                            key={index}
                            onClick={() => changePageTo(value)}
                            >
                            {value}
                        </li>
                    );
                    })}
                </ul>

                <button
                    disabled={currentPageNumber === Math.floor(quotes.length / pageLimit)}
                    className={`page__change ${
                    currentPageNumber === Math.floor(quotes.length / pageLimit)
                        ? "disabled" : ""}  `}
                    onClick={nextPage}>
                Вперёд
                </button>

                <button
                    disabled={currentPageNumber === Math.floor(quotes.length / pageLimit)}
                    className={`page__change ${
                    currentPageNumber === Math.floor(quotes.length / pageLimit)
                        ? "disabled" : ""}  `}
                    onClick={lastPage}>
                    В конец
                </button>
            </div>
        </div>
    )
};

export default Pagination;
