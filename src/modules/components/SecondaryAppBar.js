import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './BaseAppBar';
import Toolbar, { styles as toolbarStyles } from './Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import paintingBackground from '../images/paintingappbar.jpg';

const styles = theme => ({
  homeIcon: {
    fontSize: 40,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  leftMargin: {
    marginLeft: theme.spacing(2)
  },
  appBar: {
    backgroundImage: `url(${paintingBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
});

function SecondaryAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar className={props.paintingsView ? classes.appBar : null} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link             
            underline="none"
            color="inherit"
            className={classes.homeIcon}
            href="/"> 
            <HomeIcon /> 
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SecondaryAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondaryAppBar);
