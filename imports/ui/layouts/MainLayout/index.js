import React from 'react';
import PropTypes from 'prop-types';

import Header from '/imports/ui/components/Header';
import Navigation from '/imports/ui/components/Navigation';
import Footer from '/imports/ui/components/Footer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const MainLayout = ({ children }) => (
  <div style={style}>
    <Header />
    <Navigation />
    <div style={{ flexGrow: 1, padding: 8, marginTop: 64 }}>{children}</div>
    <Footer />
  </div>
);

MainLayout.propTypes = propTypes;

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export default MainLayout;
