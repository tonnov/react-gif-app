import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['Friends']);

  const onAddCategory = ( newCategory ) => {
  
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {
        categories.map( (category) => (
          <GifGrid
            category={category}
            key={ category }
          />
        )) 
      }

    </>
  )
}
