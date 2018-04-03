import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './';

storiesOf('Footer', module).add('Default', () => (
  <div style={wrapperStyle}>
    <Footer />
  </div>
));

const wrapperStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
