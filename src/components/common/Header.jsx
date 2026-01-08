import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeroBanner from './HeroBanner';
import CrewSelect from './CrewSelect';

const Header = () => (
  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
    <HeaderTitle />
    <HeroBanner />
    <CrewSelect />
  </div>
);

export default Header;
