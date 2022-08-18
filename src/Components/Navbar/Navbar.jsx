import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import { Logo } from '../../Assets/img';
import { IoLogoInstagram } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavbarWrapper } from './styled.Navbar';
import useWindowDimensions from '../../Utils/useDimentionsHook';
import Backdrop from '../Backdrop';

const { Logo_Nav } = Logo;

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
  const [showNavbar, setShowNavbar] = useState(false);

  const { width: screenWidth } = useWindowDimensions();
  return (
    <>
      {screenWidth < 1200 && (
        <Backdrop
          onClick={() => setShowNavbar(false)}
          show={showNavbar ? true : false}
        />
      )}
      <NavbarWrapper>
        {screenWidth > 1200 ? (
          <div className='banner_container'>
            <Banner olic={() => console.log('click')} />
          </div>
        ) : (
          <div className='logo_container' onClick={() => console.log('click')}>
            <img src={Logo_Nav} alt='' />
          </div>
        )}
        <div
          className={`navbar_collapsable ${
            screenWidth < 1200 ? 'mobile' : ''
          } ${showNavbar ? 'show' : ''}`}
        >
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
          <div className='languajeSelector_container'>
            <ul>
              <li>Español</li>
              <li className='middle'>Inglés</li>
              <li>Chino</li>
            </ul>
            <div className='ig_logo'>
              <IoLogoInstagram />
            </div>
          </div>
        </div>
        <div
          className='burger_menu'
          style={{ display: ` ${screenWidth < 1200 ? 'flex' : 'none'}` }}
          onClick={() => setShowNavbar((current) => !current)}
        >
          <GiHamburgerMenu />
        </div>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
