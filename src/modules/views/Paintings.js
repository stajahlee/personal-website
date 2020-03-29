import React from 'react';
import withRoot from '../../modules/withRoot';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../components/SecondaryAppBar';
import Dialog from '../components/PaintingDialog';
import wrath from '../images/paintings/wrath.jpg';
import redtree from '../images/paintings/redtree.jpeg';
import winter from '../images/paintings/winter.jpg';
import yellowtree from '../images/paintings/yellowtree.jpg';
import sunset from '../images/paintings/sunset.jpg';
import humility from '../images/paintings/humility.jpg';
import pride from '../images/paintings/pride.jpg';
import anxiety from '../images/paintings/anxiety.jpg';
import dinner from '../images/paintings/dinner.jpg';
import dinosaurMural from '../images/paintings/mural.jpg';

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
    boxShadow: '0 1px 10px rgba(0,0,0,0.25)',
  },
  cardMedia: {
    paddingTop: '75%',
  },
  muralCardMedia: {
    paddingTop: '20%',
    minHeight: 415
  },
  cardContent: {
    flexGrow: 1,
    pointerEvents: 'none',
    cursor: 'default'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  mural: {
    cursor: 'default'
  }
}));

function Paintings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(paintings[0]);

  const handleClickOpen = (event) => {
    let currentPainting;
    if (event.target.children.length > 0) {
      currentPainting = paintings.filter(p => p.name === event.target.children[0].title);
    }
    else {
      currentPainting = paintings.filter(p => p.name === event.target.title);
    }
    setSelectedValue(currentPainting[0]);
    setOpen(true);

  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {paintings.map((painting, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <CardActionArea>
                  <Card className={classes.card} onClick={handleClickOpen}>
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
                </CardActionArea>

              </Grid>
            ))}
          </Grid>
        </Container>
        
        <Dialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      
      </main>
    
      <main className={classes.main}>
        <div className={classes.headerContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              Mural
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Water-based exterior 
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="lg">
            <Grid item xs={12} sm={12} md={12}>
              <CardActionArea className={classes.mural}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.muralCardMedia}
                    image={mural.image}
                    title={mural.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                       {mural.name}
                    </Typography>
                    <Typography>
                      {mural.medium}
                    </Typography>
                    <Typography>
                      {mural.size}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          </Container>
        
        <Dialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      
      </main>
    
    
    </React.Fragment>
  );
}

const paintings = [
  {
    name: 'Wrath',
    size: '20 x 24',
    medium: 'Oil on Canvas',
    image: wrath,
    forSale: false
  },
  {
    name: 'Pride',
    size: '52 x 36',
    medium: 'Oil on Canvas',
    image: pride,
    forSale: false
  },
  {
    name: 'Humility',
    size: '20 x 24',
    medium: 'Oil on Canvas',
    image: humility,
    forSale: false
  },
  {
    name: 'Anxiety',
    size: '20 x 24',
    medium: 'Oil on Canvas',
    image: anxiety,
    forSale: false
  },
  {
    name: 'Yellow Tree',
    size: '14 x 20',
    medium: 'Watercolor on Paper',
    image: yellowtree,
    forSale: false
  },
  {
    name: 'Red Tree',
    size: '14 x 20',
    medium: 'Watercolor on Paper',
    image: redtree,
    forSale: false
  },
  {
    name: 'Sunset',
    size: '8 x 10',
    medium: 'Oil on Canvas',
    image: sunset,
    forSale: false
  },  
  {
    name: 'Winter',
    size: '8 x 10',
    medium: 'Oil on Canvas',
    image: winter,
    forSale: false
  }, 
  {
    name: 'Dinner',
    size: '20 x 24',
    medium: 'Acrylic on Canvas',
    image: dinner,
    forSale: false
  }, 

]

const mural = {
  name: 'Geology Department Mural',
  size: '43 x 15 ft',
  medium: 'Water-based exterior paint on Brick',
  image: dinosaurMural,
}

export default withRoot(Paintings);
