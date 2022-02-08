import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import IngredientFormFields from './IngredientFormFields';

import Button from '@material-ui/core/Button';
import {defaultInputFields} from '../utils/ingredirentInputField'



function IngredientForm({inputFields, setInputFields}) {

    const submitHandler = (event) => {
        event.preventDefault();
        // props.onSaveIngredientList(inputFields);
    }



    return (

        <Container>
            <h1>IngredientForm</h1>
            <form onSubmit={submitHandler}>
                {
                    inputFields.map((fields, index) =>
                        <IngredientFormFields key={index} fields={fields} setInputFields={setInputFields} />
                    )
                }
                <Button variant="contained" startIcon={<AddButton />}
                    onClick={() => setInputFields(prevFields => prevFields.concat(defaultInputFields()))}
                >
                    Add
                </Button>
            </form>

        </Container>
    );
} export default IngredientForm;


