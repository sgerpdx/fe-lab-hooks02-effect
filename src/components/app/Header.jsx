import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to={'/'}>
        <h3>Return to All Characters</h3>
      </Link>
    </>
  );
};

export default Header;
