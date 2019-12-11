import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function AddContact({
  addContactInputHandler,
  addContactButtonHandler,
  updateContactButtonHandler,
  contacts,
  isEdit }) {

  const classes = useStyles();

  console.log("is edit", isEdit);
  return (
    < React.Fragment >
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Contact
          </Typography>
          <React.Fragment>
            {
              isEdit ?
                <Typography variant="h6" gutterBottom>Edit your contact details</Typography> :
                <Typography variant="h6" gutterBottom>Add your contact details</Typography>
            }
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  value={contacts.firstname}
                  onChange={addContactInputHandler}
                  required
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={contacts.lastname}
                  onChange={addContactInputHandler}
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={contacts.email}
                  onChange={addContactInputHandler}
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={contacts.phone}
                  onChange={addContactInputHandler}
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={contacts.address}
                  onChange={addContactInputHandler}
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="address"
                />
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              {
                isEdit ?
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={updateContactButtonHandler}
                    className={classes.button}
                  >Update
                  </Button> :
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={addContactButtonHandler}
                    className={classes.button}
                  >Add
                  </Button>
              }
            </div>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment >
  );
}

export default AddContact;