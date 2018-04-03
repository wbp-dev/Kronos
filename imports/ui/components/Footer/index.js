import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  classes: PropTypes.shape({
    footerText: PropTypes.string.isRequired,
  }).isRequired,
};

const Footer = ({ classes }) => (
  <Typography type="caption" className={classes.footerText}>
    © {new Date().getFullYear()} Wer besiegt Paul?
  </Typography>
);

Footer.propTypes = propTypes;

const styles = (theme) => ({
  footerText: {
    width: '100%',
    paddingBottom: theme.spacing.unit,
    textAlign: 'center',
  },
});

export default withStyles(styles)(Footer);
