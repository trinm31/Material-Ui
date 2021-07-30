import { MenuItem } from '@material-ui/core';
import { FormControl, InputLabel, Select as MuiSelect,FormHelperText } from '@material-ui/core';
import React from 'react'

export default function Select(props) {
    const {name, label, value,error=null, onChange, options } = props;
    return (
        <FormControl variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            >
                <MenuItem value="">None</MenuItem>
                {
                    options.map((option)=>(
                        <MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>
                    ))
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
