import React from 'react';
import { withFormik, Form } from 'formik'
import * as Yup from 'yup'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3f51b5',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({
  loginInputHandler,
  values,
  handleChange,
  errors,
  touched,
}) {
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
        <Form className={classes.form} noValidate autoComplete="off">
          <div>
            <TextField
              className={classes.textField}
              onChange={(e) => { handleChange(e); loginInputHandler(e) }}
              value={values.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email ? errors.email : ''}
            />

          </div>
          <div>
            <TextField
              className={classes.textField}
              onChange={(e) => { handleChange(e); loginInputHandler(e) }}
              value={values.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password ? errors.password : ''}
            />
          </div>
          <div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >Sign In
          </Button>
          </div>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Create new account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div >
    </Container>
  );
}

const FormikLoginApp = withFormik({
  mapPropsToValues({ password, email }) {
    return {
      email: email || '',
      password: password || '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup
      .string()
      .email('email is not valid')
      .required('email is required'),
    password: Yup
      .string()
      .required('password is required'),
  }),
  handleSubmit(values, { props, resetForm }) {
    setTimeout(() => {
      props.loginButtonHandler();
      resetForm()
    }, 0)
  }
})(Login)

export default FormikLoginApp;