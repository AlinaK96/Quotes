
import React, { useState } from 'react';
import Header from './components/header';
import searchCity from './utils/API/getQuotes';
import QuotesList from './components/quotesList';

function App() {
  const [quotes, setQuotes] = useState ([
    {id: 1, content: "Life isn’t about getting and having, it’s about giving and being.", auth: '"Kevin Kruse"'},
    {id: 2, content: "Life is 10% what happens to me and 90% of how I react to it.", auth: 'Автозаполнение'},
    {id: 3, content: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", auth: 'Автозаполнение'},
    {id: 4, content: 'Четвёртая карточка', auth: 'Автозаполнение'},
    {id: 5, content: 'Пятая карточка', auth: 'Автозаполнение'},
    {id: 6, content: 'Первая карточка', auth: 'Автозаполнение'},
    {id: 7, content: 'Вторая карточка', auth: 'Автозаполнение'},
    {id: 8, content: 'Третья карточка', auth: 'Автозаполнение'},
    {id: 9, content: 'Четвёртая карточка', auth: 'Автозаполнение'},
    {id: 10, content: 'Пятая карточка', auth: 'Автозаполнение'},
    
  ])
  searchCity()
  return (
    <div>
      <Header />
      <QuotesList quotes={quotes} />
    </div>
  );
}

export default App;
