import React from 'react'
import { FormLabel, RadioGroup as MuiRadioGroup, Radio,FormControl, FormControlLabel } from '@material-ui/core'

export default function RadioGroup(props) {

    const {name, label, value , onChange, items} = props

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name= {name}
                value={value}
                onChange={onChange}
            >
            {
                items.map((item, index) => (
                    <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title}/>
                ))
            }
            </MuiRadioGroup>
        </FormControl>
    )
}
