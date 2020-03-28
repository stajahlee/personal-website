import React from 'react';
import withRoot from '../../modules/withRoot';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../components/SecondaryAppBar';
import wrath from '../images/paintings/oilwrath.jpg';
import redtree from '../images/paintings/waterwrath.jpeg';
import winter from '../images/paintings/winter.jpg';
import yellowtree from '../images/paintings/waterautumn.jpg';
import sunset from '../images/paintings/ocean.jpg';
import humility from '../images/paintings/forest.jpg';
import pride from '../images/paintings/pride.jpg';
import anxiety from '../images/paintings/clouds.jpg';
import dinner from '../images/paintings/beach.jpg';


const useStyles = makeStyles((theme) => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    paddingTop: theme.spacing(15),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '75%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


function Paintings() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar paintingsView />

      <main className={classes.main}>

        <div className={classes.headerContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              Paintings
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Oil | Acrylic | Watercolor
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {paintings.map((painting, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={painting.image}
                    title={painting.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h6">
                      {painting.name}
                    </Typography>
                    <Typography>
                      {painting.medium}
                    </Typography>
                    <Typography>
                      {painting.size}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

const paintings = [
  {
    name: 'Wrath',
    size: '20 x 24',
    medium: 'Oil on Canvas',
    image: wrath
  },
  {
    name: 'Pride',
    size: '52 x 36',
    medium: 'Oil on Canvas',
    image: pride
  },
  {
    name: 'Humility',
    size: '20 x 24',
    medium: 'Oil on Canvas',
    image: humility
  },
  {
    name: 'Anxiety',
    size: '20 x 24',
    medium: 'Oil on Canvas',
    image: anxiety
  },
  {
    name: 'Yellow Tree',
    size: '14 x 20',
    medium: 'Watercolor on Paper',
    image: yellowtree
  },
  {
    name: 'Red Tree',
    size: '14 x 20',
    medium: 'Watercolor on Paper',
    image: redtree
  },
  {
    name: 'Sunset',
    size: '8 x 10',
    medium: 'Oil on Canvas',
    image: sunset
  },  
  {
    name: 'Winter',
    size: '8 x 10',
    medium: 'Oil on Canvas',
    image: winter
  }, 
  {
    name: 'Dinner',
    size: '20 x 24',
    medium: 'Acrylic on Canvas',
    image: dinner
  }, 

]

export default withRoot(Paintings);
