import React from "react";
import withRoot from '../../modules/withRoot';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DvrIcon from '@material-ui/icons/Dvr';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import reactLogo from '../images/react-logo.png';
import siteImg from '../images/tree.jpg';
import AppBar from '../components/SecondaryAppBar';

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
  img: {
    maxWidth: 100, 
    margin: 'auto'
  },
  fullWidth: {
    width: '100%'
  },
  icon: {
    marginRight: 10,
    color: 'grey'
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
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
              Front End Dev with React
            </Typography>
            <div className={classes.logo}>
              <img src={reactLogo} alt="react logo" className={classes.img}/>
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

            </div>
        </Grid>
        </Grid>
    </React.Fragment>
  );
}

export default withRoot(ReactDeveloper);
