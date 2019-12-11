import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(7),
        fontSize: '2rem',
    },
    title: {
        flexGrow: 1,
    },
    linkStyle: {
        color: '#fff',
        textDecoration: 'none',
        marginRight: theme.spacing(3),
    },
    button: {
        color: '#fff',
        textDecoration: 'none',
        // backgroundColor: '#7d8eee',
        padding: theme.spacing(1),
        borderRadius: '5px',
    },
}));

function Navbar({ isLoggedIn, logoutButtonHandler }) {
    const classes = useStyles();


    return (
        <div>
            <Paper >
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap className={classes.menuButton}>
                            <Link to="/" className={classes.linkStyle}>CONTACT BOOK</Link>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/dashboard" className={classes.linkStyle}>Dashboard</Link>
                            <Link to="/add-contact" className={classes.linkStyle}>Add Contact</Link>
                        </Typography>
                        {
                            isLoggedIn ?
                                <Button color="inherit" onClick={logoutButtonHandler}>
                                    <ExitToAppIcon />&nbsp;
                                    Logout
                                </Button> :
                                <React.Fragment>
                                    <Button color="inherit">
                                        <PersonIcon />
                                        <Link to="/login" className={classes.button}>
                                            Sign In
                                        </Link>
                                    </Button>
                                    <Button color="inherit" variant="outlined">
                                        <PersonAddIcon />
                                        <Link to="/signup" className={classes.button}>
                                            sign Up
                                        </Link>
                                    </Button>
                                </React.Fragment>
                        }
                    </Toolbar>
                </AppBar>
            </Paper>
        </div>
    );
}

export default Navbar;