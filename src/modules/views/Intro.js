import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import IntroLayout from './IntroLayout';
import backgroundImage from '../images/tree.jpg';
import BuildIcon from '@material-ui/icons/Build';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import BrushIcon from '@material-ui/icons/Brush';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  spacer: {
    margin: '0 4px'
  },
  icons: {
    marginTop: 50,
    color: '#afc3ca',
    textAlign: 'center'
  },
  icon: {
    margin: '0 15px',
  }
});

function Intro(props) {
  const { classes } = props;

  return (
    <div>
      <IntroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />


        <Typography color="inherit" align="center" variant="h4" component="h4" className={classes.h5}>
          Meet Stajah Lee Hoeflich
        </Typography>

        <Typography color="inherit" align="center">
          Software Engineer <span className={classes.spacer} /> |  <span className={classes.spacer} />  
          Artist  <span className={classes.spacer} /> |  <span className={classes.spacer} /> 
          Lover of Coffee  <span className={classes.spacer} /> |  <span className={classes.spacer} /> 
          Wife and Mom  <span className={classes.spacer} /> |  <span className={classes.spacer} /> 
          Nighthawk
        </Typography>

      </IntroLayout>

      <div className={classes.icons}>
        <BuildIcon className={classes.icon} /> 
        <BubbleChartIcon className={classes.icon} />
        <MenuBookIcon className={classes.icon} /> 
        <BrushIcon className={classes.icon} />
        <LaptopMacIcon className={classes.icon} />
      </div>

    </div>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);
