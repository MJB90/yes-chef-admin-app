import React from 'react';

import Recipe from './Recipe';


const RecipeContainer = (props) => {
  return (
    <li>
      {props.recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          courseType={recipe.courseType}
          difficulty={recipe.difficulty}
        />
      ))}
    </li>
  );
};

export default RecipeContainer;