import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const fetchUrl = "http://localhost:6001/plants"

  //allPlants collection, pass to PlantList to render
  const [allPlants, setAllPlants] = useState([])

  //nameSearch value, pass to PlantList to filter
  const [searchValue, setSearchValue] = useState("")

  //formData for new plants, pass nowhere
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  // 

  useEffect(() => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(plantArr => {
        const withStockStatus = plantArr.map(item => {
          return {...item, inStock: true}
        })
        setAllPlants(withStockStatus)
      })
  }, [])

  //

  //set nameSearch handler, pass to Search
  function handleSetSearchValue(e) {
    console.log(e.target.value)
    setSearchValue(() => e.target.value)
  }

  //handle inStock state onClick, pass to PlantList > PlantCard
  //modify specific plant's inStock property
  function handleSetInStock(id) {
    const updated = allPlants.map(item => {
      if (item.id !== id) return item
      else return {...item, inStock: !item.inStock}
    })

    const currentItem = allPlants.find(item => {
      return item.id = id;
    })
    const currentInStockValue = currentItem.inStock
    
    fetch(`${fetchUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({inStock: !currentInStockValue})
    })
    .then(() => setAllPlants(updated))
  }

  //set formData handler for new Plants, pass to NewPlantForm
  function handleSetFormData(e) {
    const name = e.target.name
    const value = e.target.value
  
    setFormData({
      ...formData,
      [name]: value
    })
  }

  //use formData to POST new plant and modify allPlants state
  //pass to NewPlantForm for onSubmit
  function handleSubmit(e) {
    e.preventDefault()
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newPlant => {
      newPlant.inStock = true;
      setAllPlants([
        ...allPlants,
        newPlant
      ])
    })
  }

  //inStock state and handler go inside PlantCard

  return (
    <main>
      <NewPlantForm handleSetFormData={handleSetFormData} handleSubmit={handleSubmit} />
      <Search handleSetSearchValue={handleSetSearchValue} />
      <PlantList allPlants={allPlants} searchValue={searchValue} handleSetInStock={handleSetInStock}/>
    </main>
  );
}

export default PlantPage;
