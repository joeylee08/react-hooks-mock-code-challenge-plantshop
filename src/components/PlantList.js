import React from "react";
import PlantCard from "./PlantCard";

function PlantList({allPlants, searchValue, handleSetInStock}) {
  const filtered = allPlants.filter(item => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  const currentPlants = filtered.map((item, idx) => {
    return <PlantCard plant={item} key={idx} {...item} handleSetInStock={handleSetInStock}/>
  })

  return (
    <ul className="cards">{currentPlants}</ul>
  );
}

export default PlantList;
