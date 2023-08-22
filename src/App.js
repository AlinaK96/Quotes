
import React, { useState } from 'react';
import Header from './components/header';
import searchCity from './utils/API/getQuotes';
import QuotesList from './components/quotesList';

function App() {
  const [quotes, setQuotes] = useState ([
    {id: 1, content: 'Первая карточка', auth: 'Автозаполнение'},
    {id: 2, content: 'Вторая карточка', auth: 'Автозаполнение'},
    {id: 3, content: 'Третья карточка', auth: 'Автозаполнение'},
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
