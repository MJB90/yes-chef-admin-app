import React from 'react';

import RecipeNameCard from './RecipeNameCard';
import classes from './RecipeContainer.module.css';
// makes an array on many Recipe Components
//purpose of this component is to map ALL the necessary Recipe components and put them into an Array of Recipes 
// (we don't use for loop here)

const RecipeContainer = (props) => {
  return (
    <ul className={classes['recipe-container']}>
      {props.recipes.map((recipe) => (
        <RecipeNameCard
          key={recipe.id}
          name={recipe.name}
          courseType={recipe.courseType}
          difficulty={recipe.difficulty}
          imageUrl={recipe.imageUrl}
        />
      ))}
    </ul>
  );
};

export default RecipeContainer;