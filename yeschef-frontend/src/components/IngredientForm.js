import React, { useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

import Button from '@material-ui/core/Button';

function IngredientForm() {
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), ingredient:"", amount: "", unit:"", comment:""},
    ]);


    const handleAddFields = () => {
        setInputFields([...inputFields, {id: uuidv4(), ingredient:"", amount: "", unit:"", comment:""}]);
    }
    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        if (values.length == 1){

        }
        else{
            values.splice(index,1);
            setInputFields(values);
        }
       
    }

    const handleChangeInput = (id,event) =>{
        const newIngredient = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value;
            }
            return i;
        })
        setInputFields(newIngredient);
    }

    // const saveIngredients= (ingredientList) => {
    //    ingredientList.preventDefault();
    //    console.log("Ingredients",inputFields);
    //    //how to put each ingredient into an ingredient list

    // }

    return (
        
        <Container>
            <h1>IngredientForm</h1>
            
                {inputFields.map((inputField,index) =>(
                    <div key={index}>
                        <TextField
                            name="ingredient"
                            label = "Ingredient"
                            variant="filled"
                            value={inputField.ingredient}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />   
                        <TextField
                            name="amount"
                            label = "amount"
                            variant="filled"
                            value={inputField.amount}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                        <TextField
                            name="unit"
                            label = "unit"
                            variant="filled"
                            value={inputField.unit}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                        <TextField
                            name="comment"
                            label = "comment"
                            variant="filled"
                            value={inputField.comment}
                            onChange={event => handleChangeInput(inputField.id, event)}
                        />
                        <IconButton onClick={()=> handleRemoveFields()}>
                            <RemoveButton/>
                        </IconButton>
                        <IconButton onClick={()=> handleAddFields()}>
                            <AddButton/>
                        </IconButton>
                    </div>
                ))}
                
            
        </Container>
    );
} export default IngredientForm;


