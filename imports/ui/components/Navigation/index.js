import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const propTypes = {
  classes: PropTypes.shape({
    drawer: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
};

const Navigation = ({ classes }) => (
  <Drawer type="permanent" className={classes.drawer} classes={{ paper: classes.paper }}>
    <List>
      <ListItem button>
        <ListItemText primary="Scores" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Vergabe" />
      </ListItem>
      <Divider />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((x) => (
        <ListItem button key={x} dense>
          <ListItemText primary={`${x.toString().padStart(2, 0)}. Spiel`} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

Navigation.propTypes = propTypes;

const styles = (theme) => ({
  drawer: {
    zIndex: theme.zIndex.appBar - 100,
  },
  paper: {
    paddingTop: theme.spacing.unit * 8,
    minWidth: theme.spacing.unit * 20,
  },
});

export default withStyles(styles)(Navigation);
