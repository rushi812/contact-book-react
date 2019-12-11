import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: '1rem',
  },
  border: {
    borderBottom: '1px solid #ebe5e5',
    padding: '1rem 0'
  }

});

const ContactInfo = ({ contacts, editbuttonHandler }) => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.border}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Name
          </Typography>
          <Typography variant="h3" component="h2" >
            {contacts.firstname} {contacts.lastname}
          </Typography>
        </div>
        <div className={classes.border}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Address
          </Typography>
          <Typography variant="h5" component="h2" >
            {contacts.address}
          </Typography>
        </div>
        <div className={classes.border}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Email
          </Typography>
          <Typography variant="h5" component="h2" >
            {contacts.email}
          </Typography>
        </div>
        <div className={classes.border}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Phone
          </Typography>
          <Typography variant="h5" component="h2" >
            {contacts.phone}
          </Typography>
        </div>
        <CardActions>
          <Fab color="secondary" aria-label="edit" onClick={(event) => editbuttonHandler(event, contacts.id)}>
            <EditIcon />
          </Fab>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ContactInfo;