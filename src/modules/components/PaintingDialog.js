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

const styles = theme => ({
  paperWidthSm: {
    maxWidth: 800
  }
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
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes={{paperWidthSm: classes.paperWidthSm}}>
      <img src={image} alt={imageName} />
      <List>
        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar><Avatar><ContactMailIcon /></Avatar></ListItemAvatar>
          { selectedValue.forSale ?
            <ListItemText primary="FOR SALE" secondary="Contact me about this painting."/>
            :
            <ListItemText primary="NFS" secondary="Contact me about a custom order."/>
          }
        </ListItem>
      </List>
    </Dialog>
  );
}

PaintingDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaintingDialog);
