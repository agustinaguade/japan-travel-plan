// src/components/common/Header.jsx
import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeroBanner from './HeroBanner';

const Header = ({ showBanner = true }) => (
  <div
    style={{
      textAlign: 'center',
      marginBottom: showBanner ? '24px' : '14px',
    }}
  >
    <HeaderTitle />
    {showBanner && <HeroBanner />}
  </div>
);

export default Header;
