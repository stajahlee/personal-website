import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import resume from '../images/resume_hoeflich.pdf';
import book from '../images/book.jpg';
import dev from '../images/dev.jpg';
import pride from '../images/pride.jpg'
import laptop from '../images/laptop.jpg'
import library from '../images/library.jpg'
import design from '../images/design.jpg'

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url: laptop,
      title: 'Python Programmer',
      width: '24%',
    },    
    {
      url: dev,
      title: 'React Developer',
      width: '44%',
      href: '/react-developer'
    },
    {
      url: pride,
      title: 'Painter',
      width: '25%',
      href: '/paintings'
    }, 
    {
      url: library,
      title: 'Lifelong Student',
      width: '45%',
    },
    {
      url: design,
      title: 'Graphic Designer',
      width: '30%',
    }
  ];

  return (
    <Container className={classes.root} component="section">
      {/* <Typography variant="h4" marked="center" align="center" component="h2">
        Let's see some work
      </Typography> */}
      <div className={classes.images}>
          {/* Do Resume on its own bc it contains a download */}
          <ButtonBase
            key={'book'}
            className={classes.imageWrapper}
            style={{
              width: '32%',
            }}
            href={resume}
            color="transparent"
            target="_blank"
            download
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${book})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {'Download Resume'}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
          {/* Then map out the rest */}
        {images.map(image => (          
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.href}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);