import React from "react";

function PlantCard({plant, id, name, image, price, handleSetInStock}) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {plant.inStock ? (
        <button className="primary" onClick={() => handleSetInStock(id)}>In Stock</button>
      ) : (
        <button onClick={() => handleSetInStock(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
