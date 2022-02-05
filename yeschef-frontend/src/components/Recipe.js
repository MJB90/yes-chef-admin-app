
import React from 'react';

const Recipe = (props) => {
  return (
    <li>
        
      <h2>{props.name}</h2>
      <h3>{props.courseType}</h3>
      <p>{props.difficulty}</p>
    </li>
  );
};

export default Recipe;