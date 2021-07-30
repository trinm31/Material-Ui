import React, {useEffect} from 'react';
import { Grid, TextField } from '@material-ui/core'
import useForm from '../../components/useForm'
import Control from '../../components/Controls/Control'
import * as employeeservice from '../../services/employeeservice'



const genderItems = [
    {id:'male', title: 'Male'},
    {id:'female', title: 'Female'},
    {id:'other', title: 'Other'}
]

const initialState = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm(props) {

    const {addOrEdit, recordForEdit} = props;

    const validate = (fieldValues = values) => {
        // debugger;
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {values,setValues,handleInputChange, errors, setErrors, resetForm} = useForm(initialState, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    } 

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
    
    return (
        <Control.Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Control.Input
                    variant="outlined"
                    label="Full Name"
                    name = "fullName"
                    value={values.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                    />
                    <Control.Input
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    />
                    <Control.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Control.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Control.RadioGroup
                    label="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}
                    />
                    <Control.Select
                    label="Department"
                    name="departmentId"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={employeeservice.getEmployeeDepartments()}
                    error={errors.departmentId}
                    />
                    <Control.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Control.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Control.Button
                            type="submit"
                            text="Submit" />
                        <Control.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}/>
                    </div>
                </Grid>
            </Grid>
        </Control.Form>
    )
}
