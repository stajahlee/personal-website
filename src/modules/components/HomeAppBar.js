import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './BaseAppBar';
import Toolbar, { styles as toolbarStyles } from './Toolbar';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  leftMargin: {
    marginLeft: theme.spacing(2)
  },
  rightMargin: {
    marginRight: theme.spacing(2)
  }
});

function HomeAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            underline="none"
            color="inherit"
            className={classes.title}
            href="https://www.linkedin.com/in/stajah"
            target="_blank"
          >
            <PersonAddIcon />
            <QuestionAnswerIcon className={classes.leftMargin}/>
            <MailOutlineIcon className={classes.leftMargin}/>
          </Link>
          <div className={classes.right}/>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

HomeAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeAppBar);
