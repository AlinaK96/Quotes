import React from "react";
 
const FavoriteList = ({ favorites, onRemove }) => {
  if (favorites.length === 0) {
    return <div>Пока нет элементов в избранном</div>;
  }
 
  return (
    <div>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h3>{favorite.quote}</h3>
          <button onClick={() => onRemove(favorite)}>Убрать из избранного</button>
        </div>
      ))}
    </div>
  );
};
 
export default FavoriteList;