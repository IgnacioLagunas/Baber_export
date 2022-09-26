import React, { useState, useContext } from 'react';
import Banner from '../Banner';
import { Logo } from '../../Assets/img';
import { IoLogoInstagram } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavbarWrapper } from './styled.Navbar';
import useWindowDimensions from '../../Utils/useDimentionsHook';
import Backdrop from '../Backdrop';
import { LanguageContext } from '../../App.js';

const { Logo_Nav } = Logo;

const links = [
  {
    label: 'HOME',
    labelEng: 'HOME',
    link: '/',
  },
  {
    label: 'NOSOTROS',
    labelEng: 'ABOUT',
    link: '/#about',
  },
  {
    label: 'PRODUCTOS',
    labelEng: 'PRODUCTS',
    link: '/#products',
  },
  {
    label: 'CONTACTO',
    labelEng: 'CONTACT',
    link: '/#contact',
  },
];

const Navbar = ({ setLanguag }) => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [showNavbar, setShowNavbar] = useState(false);

  const lenguajeFromContext = useContext(LanguageContext);

  const changeLanguage = (lang) => {
    console.log(setLanguag);
    setLanguag(lang);
  };

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
            <Banner onClick={() => console.log('click')} />
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
              {links.map(({ link, label, labelEng }, index) => (
                <li key={index}>
                  <a
                    className={activeTab === label ? 'active' : ''}
                    onClick={({ target: { text } }) => {
                      setActiveTab(text);
                      setShowNavbar(false);
                    }}
                    href={link}
                    key={index}
                  >
                    {lenguajeFromContext === 'español' ? label : labelEng}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='languajeSelector_container'>
            <ul>
              <li
                style={{
                  color: lenguajeFromContext === 'español' ? 'red' : 'black',
                }}
                onClick={() => changeLanguage('español')}
              >
                Español
              </li>
              <li
                style={{
                  color: lenguajeFromContext === 'english' ? 'red' : 'black',
                }}
                onClick={() => changeLanguage('english')}
                className='middle'
              >
                English
              </li>
              {/* <li onClick={() => setLenguaje('español')} className='chinese'>
                中文(中国)
              </li> */}
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
