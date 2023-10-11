import React from "react";

function NewPlantForm({handleSetFormData, handleSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleSetFormData} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleSetFormData} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleSetFormData} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
