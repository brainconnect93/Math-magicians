import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const urls = [
    {
      id: 1,
      url: '/',
      text: 'Home',
    },
    {
      id: 2,
      url: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      url: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <h1 className="head">Math Magicians</h1>

      <ul className="navMenu">
        {urls.map((url) => (
          <li key={url.id}>
            <NavLink to={url.url}>{ url.text }</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
