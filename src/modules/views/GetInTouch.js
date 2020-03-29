import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
});

function sendEmail() {
  window.location.href = 
  "mailto:stajah@stajahlee.com?subject=Let's chat.&body=Hi Stajah!  I am reaching out to you via your really exciting website.  Please see below for how/where/when I'd like to chat.";
}

function GetInTouch(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button} onClick={()=> {sendEmail()}}>
        <Typography variant="h5" component="span">
          Questions?  Virtual meetup requests? Get in touch!
        </Typography>
      </Button>
    </Container>
  );
}

GetInTouch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetInTouch);
