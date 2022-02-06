
import React from 'react';
import classes from './Recipe.module.css';

const Recipe = (props) => {
  return (
    <li className={classes.recipe}>
      
      <img src = {props.imageUrl} alt="img alt text"/>       
      <h2>{props.name}</h2>
      <h3>{props.courseType}</h3>
      <p>{props.difficulty}</p>
    </li>
  );
};

export default Recipe;