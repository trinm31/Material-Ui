import React, {useState} from 'react'

export default function useForm(initialState,validateOnChange = false, validate) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});


    const handleInputChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name] : value,
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialState);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors, 
        setErrors,
        handleInputChange,
        resetForm
    }
}

