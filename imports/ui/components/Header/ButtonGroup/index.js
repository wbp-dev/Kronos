import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';

import SelectButton from './SelectButton';

const propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOf([
    'logo',
    'scores',
    'blackout',
    'vergabe',
  ]).isRequired,
};

const ButtonGroup = ({ onSelect, selectedValue }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    wrap="nowrap"
  >
    <SelectButton
      handleOnClick={onSelect}
      selectedValue={selectedValue}
      value="logo"
      label="Logo"
    />
    <SelectButton
      handleOnClick={onSelect}
      selectedValue={selectedValue}
      value="scores"
      label="Scores"
    />
    <SelectButton
      handleOnClick={onSelect}
      selectedValue={selectedValue}
      value="blackout"
      label="Blackout"
    />
    <SelectButton
      handleOnClick={onSelect}
      selectedValue={selectedValue}
      value="vergabe"
      label="Vergabe"
    />
  </Grid>
);


ButtonGroup.propTypes = propTypes;

export default ButtonGroup;
