import React from 'react';
import withRoot from '../../modules/withRoot';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import siteImg from '../images/react-dev.png';
import AppBar from '../components/SecondaryAppBar';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import bear from '../images/bear.gif'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${siteImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  description: {
      padding: '0 40px',
      paddingTop: 40
  },
  gif: {
      marginTop: 50
  },
  img: {
      marginTop: 30
  }
}));

function ReactDeveloper() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar />
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={6} className={classes.image} />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square className={classes.description}>
            <div className={classes.paper}>
                <Typography component="subtitle2" variant="subtitle2">
                    Most of my React work has been for clients so I can't show you!
                </Typography>
                <Avatar className={classes.avatar}>
                    <SentimentVeryDissatisfiedIcon />
                </Avatar>
                <Typography component="subtitle2" variant="subtitle2">
                    Yeah, that is a bummer.
                </Typography>
                <hr />
                <br />
                <Typography component="h6" variant="h6">
                    You <em>ARE</em> viewing my personal site which is a React app. That's fun!
                </Typography>
                <Typography component="subtitle2" variant="subtitle2" className={classes.gif}>
                    So is this polar bear gif, please enjoy:
                </Typography>
                <img src={bear} alt={'polar'} className={classes.img}/>
            </div>
        </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default withRoot(ReactDeveloper);
