import React from 'react'
import { withFormik, Form } from 'formik'
import * as Yup from 'yup'


import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: '#3f51b5'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Signup({
  signupInputHandler,
  values,
  handleChange,
  errors,
  touched,
  isSubmitting,
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
          Sign Up
        </Typography>
        <Form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                onChange={(e) => { handleChange(e); signupInputHandler(e) }}
                value={values.firstname}
                autoComplete="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                name="firstname"
                label="First Name"
                autoFocus
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={errors.firstname ? errors.firstname : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                onChange={(e) => { handleChange(e); signupInputHandler(e) }}
                value={values.lastname}
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={errors.lastname ? errors.lastname : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                onChange={(e) => { handleChange(e); signupInputHandler(e) }}
                value={values.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                error={touched.email && Boolean(errors.email)}
                helperText={errors.email ? errors.email : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => { handleChange(e); signupInputHandler(e) }}
                value={values.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                error={touched.password && Boolean(errors.password)}
                helperText={errors.password ? errors.password : ''}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div >
    </Container>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ firstname, lastname, password, email }) {
    return {
      firstname: firstname || '',
      lastname: lastname || '',
      password: password || '',
      email: email || '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup
      .string()
      .email('email is not valid')
      .required('email is required'),
    password: Yup
      .string()
      .min(8, 'password must be 8 characters or longer')
      .required('password is required'),
    firstname: Yup.string().required('first name is required'),
    lastname: Yup.string().required('lastname name is required'),
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    console.log("on submit called");
    setTimeout(() => {
      if (values.email === 'rushi@gmail.com') {
        setErrors({
          email: 'This email is already taken'
        })
      } else {
        resetForm()
        setSubmitting(false)
        props.signupButtonHandler();
      }
    }, 0)
  }
})(Signup)

export default FormikApp
