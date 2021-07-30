import { Dialog, DialogContent, DialogTitle, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Control from "../components/Controls/Control";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme=>({
    dialogWrapper: {
        padding: theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    }
}))

export default function Popup(props) {
    const { title, other , openPopup, setOpenPopup, children } = props;
    const classes = useStyles();
    return (
        <Dialog open = {openPopup} maxWidth ="md" classes={{ paper: classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display:'flex'}}>
                    <Typography variant = "h6" component = "div" style={{flexGrow:1}}>{title}</Typography>
                    <Control.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Control.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
