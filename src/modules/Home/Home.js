import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  textStyle: {
    textTransform: 'uppercase',
  }
}));


function Home({ user }) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h1">
          Welcome
      </Typography>
        <Typography variant="h2" component="h1" color="textSecondary" className={classes.textStyle}>
          {user.firstname} {user.lastname}
        </Typography>
      </Paper>
    </div >
  );
}

export default Home;