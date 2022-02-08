import { v4 as uuidv4 } from 'uuid';

export const defaultInputFields = () => ({
    id: uuidv4(),
    ingredient: '',
    amount: '',
    unit: '',
    comment: ''
})
