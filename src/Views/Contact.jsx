import React, { useState } from 'react';
import { ContactWrapper } from './Styles/Contact.styles';
import { ViewWrapper } from './Styles/View.styles';
import { HomeImages } from '../Assets/img';
import { BsCheck } from 'react-icons/bs';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const { Home_manzanas } = HomeImages;

const FormModel = {
  name: '',
  mail: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(FormModel);
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleInput = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioEnviado((current) => !current);
    console.log(formData);
  };

  return (
    <ViewWrapper backgroundImage={Home_manzanas}>
      <div id='contact'></div>
      <ContactWrapper>
        <div className='text'>
          <h1 className='title'>ESCRÍBANOS</h1>
          <h5 className='subtitle'>
            Uno de los miembros de nuestro equipo lo ayudará en cualquier
            momento
          </h5>
        </div>
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
                Nombre y Apellido
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
                Correo
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
                Asunto
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
                Mensaje
              </label>
            </div>
            <button className={`${formularioEnviado ? 'enviado' : ''}`}>
              {formularioEnviado ? <BsCheck /> : 'enviar'}
            </button>
          </form>
          <div className='info_container'>
            <div className='info'>
              <FaPhoneAlt style={{ fill: 'red' }} />
              <a href='tel: +56222113142'>(+56 2) 22113142</a>
            </div>
            <div className='info'>
              <FaRegEnvelope />
              <a href='mailto:baber@baberexport.com'>baber@baberexport.com</a>
            </div>
            <div className='info'>
              <FaMapMarkerAlt />
              <a
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
