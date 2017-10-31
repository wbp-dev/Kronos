import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

const propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOf([
    'logo',
    'scores',
    'blackout',
    'vergabe',
  ]).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const SelectButton = ({
  handleOnClick, label, value, selectedValue,
}) => (
  <Button
    color={selectedValue === value ? 'accent' : 'contrast'}
    onClick={() => handleOnClick(value)}
  >
    {label}
  </Button>
);

SelectButton.propTypes = propTypes;

export default SelectButton;
