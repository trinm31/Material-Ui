import React from 'react'
import {AppBar, Toolbar, Grid, IconButton, Badge, makeStyles,InputBase} from '@material-ui/core'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const userStyles = makeStyles(theme =>({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding:` 0px ${theme.spacing(1)}`,
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1)
        }
    }
}))

export default function Header() {
    const classes = userStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems='center'
                >
                    <Grid item>
                        <InputBase
                        placeholder = 'Search topics'
                        className={classes.searchInput}
                        startAdornment={<SearchOutlinedIcon fontSize="small"/>}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsActiveOutlinedIcon fontSize="small"/>
                            </Badge>
                        </IconButton> 
                        <IconButton>
                        <Badge badgeContent={2} color="primary">
                                <ChatOutlinedIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewOutlinedIcon fontSize="small"/>
                        </IconButton>                       
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
