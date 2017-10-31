import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Hidden from 'material-ui/Hidden';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Logo from '../Logo';
import ButtonGroup from './ButtonGroup';

const propTypes = {
  classes: PropTypes.shape({
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

const Header = ({ classes }) => (
  <AppBar>
    <Toolbar>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Hidden xsDown>
          <Grid item xs={3}>
            <Grid
              container
              direction="row"
            >
              <Logo className={classes.logo} />
              <Typography type="headline">Kronos</Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Grid item xs={6}>
          <ButtonGroup onSelect={console.log} selectedValue="blackout" />
        </Grid>
        <Hidden xsDown>
          <Grid item xs={3} />
        </Hidden>
      </Grid>
    </Toolbar>
  </AppBar>
);

Header.propTypes = propTypes;

const styles = theme => ({
  logo: {
    fill: theme.palette.common.white,
    paddingRight: theme.spacing.unit * 2,
    fontWeight: 'light',
  },
});

export default withStyles(styles)(Header);
