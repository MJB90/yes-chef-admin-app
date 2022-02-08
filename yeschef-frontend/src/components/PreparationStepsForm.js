import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

const defaultInputField = () => ({ id: uuidv4(), step: "" });

function PreparationStepsForm() {

    const [inputFields, setInputFields] = useState([
        defaultInputField()
    ]);

    const handleAddFields = (index) => {

        const inputFieldsPriorToIndex = inputFields.slice(0, index);
        const inputFieldsNextToIndex =  inputFields.slice( index );

        setInputFields([].concat(inputFieldsPriorToIndex, defaultInputField(), inputFieldsNextToIndex));
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        if (values.length == 1) {

        }
        else {
            values.splice(index, 1);
            setInputFields(values);
        }
    }

    const handleChangeInput = (id, event) => {
        const newStep = inputFields.map(i => {
            if (id == i.id) {
                i[event.target.name] = event.target.value;
            }
            return i;

        })
        setInputFields(newStep);
    }



    return (

        <Container>
            <h1>PreparationStepsForm</h1>
            {inputFields.map((inputField, index) => (
                <div key={index}>
                    <TextField
                        name="step"
                        label="step"
                        variant='filled'
                        value={inputField.step}
                        onChange={event => handleChangeInput(inputField.id, event)}
                    />
                    <IconButton onClick={() => handleRemoveFields()}>
                        <RemoveButton />
                    </IconButton>
                    <IconButton onClick={() => handleAddFields(index + 1)}>
                        <AddButton />
                    </IconButton>
                </div>

            ))}
        </Container>
    );
} export default PreparationStepsForm;