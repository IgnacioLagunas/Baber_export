import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import { NavbarWrapper } from './styled.Navbar';

const links = [
  {
    label: 'HOME',
    link: '/',
  },
  {
    label: 'NOSOTROS',
    link: '/About',
  },
  {
    label: 'PRODUCTOS',
    link: '/Products',
  },
  {
    label: 'CONTACTO',
    link: '/Contact',
  },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  return (
    <NavbarWrapper>
      <div className='banner_container'>{/* <Banner /> */}</div>
      <nav>
        <ul>
          {links.map(({ link, label }) => (
            <li>
              <Link
                className={activeTab === label ? 'active' : ''}
                onClick={({ target: { text } }) => setActiveTab(text)}
                to={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='languajeSelector_container'>languaje</div>
    </NavbarWrapper>
  );
};

export default Navbar;
