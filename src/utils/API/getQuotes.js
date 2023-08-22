const getQuotes = async (query) => {
    const url = `https://dummyjson.com/quotes?skip=0&limit=100`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };
  
  export default getQuotes;