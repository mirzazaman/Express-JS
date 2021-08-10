import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from '../form/Form';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }} variant="dense">
                    <Typography variant="h6" color="inherit">
                        Attendants List
                    </Typography>

                    <Form />

                </Toolbar>
            </AppBar>
        </div>
    );
}
