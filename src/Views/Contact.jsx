import React, { useState } from 'react';
import { ContactWrapper } from './Styles/Contact.styles';
import { ViewWrapper } from './Styles/View.styles';
import Background from '../Assets/img/contacto_foto.jpeg';
import { BsCheck } from 'react-icons/bs';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import QualitySeal from '../Components/QualitySeal';
import useWindowDimensions from '../Utils/useDimentionsHook';
import LanguageContext from '../Utils/LanguageContext.js';
import { useContext } from 'react';

const FormModel = {
  name: '',
  mail: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const language = useContext(LanguageContext);
  const [formData, setFormData] = useState(FormModel);
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const { width: screenWidth } = useWindowDimensions();

  const handleInput = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioEnviado((current) => !current);
    console.log(formData);
  };

  return (
    <ViewWrapper backgroundImage={Background}>
      <div id='contact'></div>
      {screenWidth > 1200 && <QualitySeal />}
      <ContactWrapper>
        {language === 'español' ? (
          <div className='text'>
            <h1 className='title bold'>ESCRÍBANOS</h1>

            <h5 className='subtitle'>
              Uno de los miembros de nuestro equipo lo ayudará en cualquier
              momento
            </h5>
          </div>
        ) : (
          <div className='text'>
            <h1 className='title bold'>WRITE TO US</h1>

            <h5 className='subtitle'>
              One of our team members will help you at any time.
            </h5>
          </div>
        )}
        <div className='contact_form'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='input'>
              <input
                id='name'
                type='text'
                name='name'
                onChange={(e) => handleInput(e)}
              />
              <label
                htmlFor='name'
                className={formData.name === '' ? '' : 'active'}
              >
                {language === 'español'
                  ? 'Nombre y Apellido'
                  : 'First and Last Name'}
              </label>
            </div>

            <div className='input'>
              <input
                id='mail'
                type='mail'
                name='mail'
                onChange={(e) => handleInput(e)}
              />
              <label
                className={formData.mail === '' ? '' : 'active'}
                htmlFor='mail'
              >
                {language === 'español' ? 'Nombre y Apellido' : 'Mail'}
              </label>
            </div>

            <div className='input'>
              <input
                id='subject'
                type='text'
                name='subject'
                onChange={(e) => handleInput(e)}
              />
              <label
                className={formData.subject === '' ? '' : 'active'}
                htmlFor='subject'
              >
                {language === 'español' ? 'Nombre y Apellido' : 'Subject'}
              </label>
            </div>

            <div className='input'>
              <textarea
                id='message'
                type='text'
                name='message'
                onChange={(e) => handleInput(e)}
              />
              <label
                className={formData.message === '' ? '' : 'active'}
                htmlFor='message'
              >
                {language === 'español' ? 'Nombre y Apellido' : 'Message'}
              </label>
            </div>
            <button className={`${formularioEnviado ? 'enviado' : ''}`}>
              {formularioEnviado ? (
                <BsCheck />
              ) : language === 'español' ? (
                'Enviar'
              ) : (
                'Send'
              )}
            </button>
          </form>
          <div className='info_container'>
            <div className='info'>
              <FaPhoneAlt style={{ fill: 'red' }} />
              <a className='bold' href='tel: +56222113142'>
                (+56 2) 22113142
              </a>
            </div>
            <div className='info'>
              <FaRegEnvelope />
              <a className='semi_bold' href='mailto:baber@baberexport.com'>
                baber@baberexport.com
              </a>
            </div>
            <div className='info'>
              <FaMapMarkerAlt />
              <a
                className='regular'
                target='_blank'
                href='https://www.google.cl/maps/search/Rosario+Sur+91,+of.+603,+Las+Condes.+Santiago+%E2%80%93+Chile+%2F+Zip+Code+7580013/@-33.4103943,-70.5726118,17z/data=!3m1!4b1'
              >
                Rosario Sur 91, of. 603, Las Condes. Santiago – Chile / Zip Code
                7580013
              </a>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </ViewWrapper>
  );
};

export default Contact;
