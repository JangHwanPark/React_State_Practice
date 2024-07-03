import React from 'react';

type Header = {
  title: string
}

const Header = ({title}: Header) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;