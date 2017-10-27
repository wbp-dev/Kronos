import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import 'normalize.css';
import '../client/main.css';

const req = require.context('../imports/ui/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div style={style}>
    <div style={{ width: '100%', maxWidth: 500, minWidth: 200 }}>
      {story()}
    </div>
  </div>
));

const style = {
  display: 'flex',
  justifyContent: 'center',
  color: '#fff',
  backgroundColor: '#2d2d2d',
  minHeight: '100vh',
  overflow: 'hidden',
}

configure(loadStories, module);
