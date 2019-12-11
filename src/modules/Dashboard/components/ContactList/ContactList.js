import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { deepPurple } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CssBaseline from '@material-ui/core/CssBaseline';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';



const useStyles = makeStyles(theme => ({

  block: {
    display: 'block',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    textTransform: "uppercase",
    backgroundColor: theme.palette.background.paper,
  },
  purple: {
    color: '#fff',
    backgroundColor: deepPurple[500],
    padding: '1.5rem',
    marginRight: '1.3rem',
  },
  icon: {
    marginTop: '10px',
  }
}));

function ContactList({ infoButtonHandler, removeButtonHandler, contactList }) {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl" >
      <CssBaseline />
      <div className={classes.paper}>

        {
          contactList &&
          contactList.map((contact) => {
            return (
              <List key={contact.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar className={classes.purple}>
                      <PermContactCalendarIcon fontSize="large" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        variant="h4"
                        color="textPrimary"
                      >
                        {contact.firstname}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        component="p"
                        variant="body2"
                        className={classes.block}
                        color="textSecondary"
                      >
                        <PhoneIphoneIcon className={classes.icon} />{contact.phone}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={(event) => infoButtonHandler(event, contact.id)} >
                      <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={(event) => removeButtonHandler(event, contact.id)} >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            )
          })
        }
      </div>
    </Container>


  );
}

export default ContactList;