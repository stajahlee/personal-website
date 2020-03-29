import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  '@media only screen and (max-width: 600px)': {
    dialogWeb: {
      visibility: 'hidden',
    },
  },
  '@media only screen and (min-width: 601px)': {
    dialogWeb: {
      maxWidth: 800
    },
    dialogMobile: {
      visibility: 'hidden',
    },
  },
});

function PaintingDialog(props) {
  const { onClose, selectedValue, open, classes } = props;
  const image = selectedValue && selectedValue.image;
  const imageName = selectedValue && selectedValue.name;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    const forSaleMessage = value.forSale ? 'Currently For Sale' : 'Custom Order Inquiry'
    window.location.href = 
    `mailto:stajah@stajahlee.com?subject=Painting-${value.name} (${forSaleMessage})&body=${forSaleMessage}:  I am reaching out to you after clicking for more info on painting: ${value.name}, size: ${value.size}, medium: ${value.medium}.`;
  };

  return (
    <>
    {/* WEB */}
    <Dialog className={classes.dialogWeb} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes={{paperWidthSm: classes.paperWidthSm}}>
      <img src={image} alt={imageName} />
      <List>
        <ListItem autoFocus button onClick={() => handleListItemClick(selectedValue)}>
          <ListItemAvatar><Avatar><ContactMailIcon /></Avatar></ListItemAvatar>
          { selectedValue.forSale ?
            <ListItemText primary="FOR SALE" secondary="Contact me about this painting."/>
            :
            <ListItemText primary="NFS" secondary="Contact me about a custom order."/>
          }
        </ListItem>
      </List>
    </Dialog>

    {/* MOBILE */}
    <Dialog className={classes.dialogMobile} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes={{paperWidthSm: classes.paperWidthSm}}>
      <DialogTitle id="dialog-title">{selectedValue.name}</DialogTitle>
      <List>
        <ListItem autoFocus button onClick={() => handleListItemClick(selectedValue)}>
          <ListItemAvatar><Avatar><ContactMailIcon /></Avatar></ListItemAvatar>
          { selectedValue.forSale ?
            <ListItemText primary={`FOR SALE`} secondary="Contact me about this painting."/>
            :
            <ListItemText primary={`NFS`} secondary="Contact me about a custom order."/>
          }
        </ListItem>
      </List>
    </Dialog>
  </>
);

}

PaintingDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaintingDialog);
