import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  function handleButtonClick(category){
    onSelectedCategory(category);
  }  
  const categoryFilters=categories.map((category)=>{
    const className=category===selectedCategory? "selected": "";
    return(
      <button
       key={category} 
       className={className}
       onClick={()=>handleButtonClick(category)}
       >
        {category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>category filters</h5>
      {categoryFilters}
  
    </div>
  );
}

export default CategoryFilter;
