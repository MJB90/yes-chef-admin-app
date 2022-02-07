
import React from 'react';
import classes from './RecipeNameCard.module.css';

const RecipeNameCard = (props) => {
  return (
    <div>
      

    <li className={classes.recipe}> 
      <img src = {props.imageURL}  onError ={({ currentTarget })=> {
        currentTarget.onerror = null;
        currentTarget.src = "https://yeschefbucket.s3.ap-southeast-1.amazonaws.com/pork_rice.jpg";
      }} alt="img alt text" style = {{width:150,height:150}} />    
      <h2>{props.name}</h2>
      <h3>{props.courseType}</h3>
      <p>{props.difficulty}</p>
    </li>
    </div>
  );
};

export default RecipeNameCard;