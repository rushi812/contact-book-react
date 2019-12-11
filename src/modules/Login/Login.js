import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({ loginInputHandler, loginButtonHandler, validate }) {
  // console.log("validation", validate);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField
              className={classes.textField}
              onChange={loginInputHandler}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email / Username"
              name="username"
              autoComplete="username"
              autoFocus
            />

          </div>
          <div>
            <TextField
              className={classes.textField}
              onChange={loginInputHandler}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div>
            <Button
              type="submit"
              onClick={loginButtonHandler}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >Sign In
          </Button>
          </div>

        </form>
      </div >
    </Container>
  );
}

export default Login;