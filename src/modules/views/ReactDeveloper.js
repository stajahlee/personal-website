import React, { useState, useEffect } from "react";
import withRoot from '../../modules/withRoot';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import siteImg from '../images/tree.jpg';
import AppBar from '../components/SecondaryAppBar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PetsIcon from '@material-ui/icons/Pets';
import DvrIcon from '@material-ui/icons/Dvr';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import reactLogo from '../images/react-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  listRoot: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
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
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '1px 4px 8px rgba(0,0,0,0.5)'
  },
  logo: {
    margin: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    padding: '120px 0 0',
  },
  gif: {
    marginTop: 50
  },
  img: {
    margin: 'auto',
    maxWidth: '100%'
  },
  fullWidth: {
    width: '100%'
  },
  icon: {
    marginRight: 10,
    color: 'grey'
  }
}));

const giphyAPIKey = '1Ao026MuXFjE4vHkmojuXkVzbjzahK2H';
const offset = (Math.floor(Math.random() * 15) + 1);


function ReactDeveloper() {
  const classes = useStyles();
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=adorable%20animals&api_key=${giphyAPIKey}&limit=1&offset=${offset}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setGifData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const gifUrl = (gifData[0] && gifData[0].images && gifData[0].images.downsized_large && gifData[0].images.downsized_large.url);

  return (
    <React.Fragment>
      <AppBar />
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={6} className={classes.image} />
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square className={classes.description}>
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
              Front End Dev with React
            </Typography>
            <div className={classes.logo}>
              <img src={reactLogo} alt="react logo" style={{maxWidth: 100, margin: 'auto'}}/>
            </div>
            <div className={classes.paper}>

              <ExpansionPanel className={classes.fullWidth}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <DvrIcon className={classes.icon} />
                  <Typography component="h1" variant="h6" color="primary">Personal Website</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    You're lookin' at it friend.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>      

              <ExpansionPanel className={classes.fullWidth}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <MenuBookIcon className={classes.icon} />
                  <Typography component="h1" variant="h6" color="primary">Self Publishing Portal</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.listRoot}>
                    <Typography>Client application developed features and components using:</Typography>
                    <br />
                    <Divider />
                    
                    <List component="nav" aria-label="tools">
                      <ListItem button><ListItemText primary="Agile dev process" /></ListItem>
                      <ListItem button><ListItemText primary="React" /></ListItem>
                      <ListItem button><ListItemText primary="Sass" /></ListItem>
                      <ListItem button><ListItemText primary="JS, HTML, CSS" /></ListItem>
                      <ListItem button><ListItemText primary="Git" /></ListItem>
                      <ListItem button><ListItemText primary="Stash, Jira, Confluence" /></ListItem>
                      <ListItem button><ListItemText primary="VS Code" /></ListItem>
                    </List>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel> 

              <ExpansionPanel className={classes.fullWidth}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <SettingsSystemDaydreamIcon className={classes.icon} />
                  <Typography component="h1" variant="h6" color="primary">Internal Suite of Web Applications</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.listRoot}>
                    <Typography>A modern suite of web applications for our high profile, high impact client, using:</Typography>
                    <br />
                    <Divider />
                    
                    <List component="nav" aria-label="tools">
                      <ListItem button><ListItemText primary="React" /></ListItem>
                      <ListItem button><ListItemText primary="JS, HTML, CSS" /></ListItem>
                      <ListItem button><ListItemText primary="Node, Express" /></ListItem>
                      <ListItem button><ListItemText primary="MongoDB, Mongoose" /></ListItem>
                      <ListItem button><ListItemText primary="Git" /></ListItem>
                      <ListItem button><ListItemText primary="VS Code" /></ListItem>
                    </List>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel> 

              <ExpansionPanel className={classes.fullWidth}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <PetsIcon className={classes.icon} />
                  <Typography component="h1" variant="h6" color="primary">Random Adorable Animal GIF</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <img src={gifUrl} alt="adorable animal gif" className={classes.img} />
                </ExpansionPanelDetails>
              </ExpansionPanel>   

            </div>
        </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default withRoot(ReactDeveloper);
