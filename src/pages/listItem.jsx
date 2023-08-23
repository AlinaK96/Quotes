import React from "react";
 
const ListItem = ({ item, onClick }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={() => onClick(item)}>Добавить в избранное</button>
    </div>
  );
};
 
export default ListItem;