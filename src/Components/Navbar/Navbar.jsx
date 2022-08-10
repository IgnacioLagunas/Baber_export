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
    link: '/#about',
  },
  {
    label: 'PRODUCTOS',
    link: '/#products',
  },
  {
    label: 'CONTACTO',
    link: '/#contact',
  },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  return (
    <NavbarWrapper>
      <div className='banner_container'>
        <Banner />
      </div>
      <nav>
        <ul>
          {links.map(({ link, label }, index) => (
            <li>
              <a
                className={activeTab === label ? 'active' : ''}
                onClick={({ target: { text } }) => setActiveTab(text)}
                href={link}
                key={index}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='languajeSelector_container'>languaje</div>
    </NavbarWrapper>
  );
};

export default Navbar;
