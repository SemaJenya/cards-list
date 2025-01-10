

import { useState } from 'react';
import s from './aboutUs.module.css';
import sel from 'classnames';
import Form from '../../components/form/form';



function AboutUs() {

  const [isFeedBackPopupOpen, setIsFeedBackPopupOpen] = useState(false);
  const [nameInputFeedBack, setNameInputFeedBack] = useState('');
  const [phoneInputFeedBack, setPhoneInputFeedBack] = useState('');

  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);
  const [nameInputCall, setNameInputCall] = useState('');
  const [phoneInputCall, setPhoneInputCall] = useState('');
  const [emailInputCall, setEmailInputCall] = useState('');

  const [isCallFormSubmit, setIsCallFormSubmit] = useState(false)


  const handleFeedBackButton = (e) => {
    e.preventDefault();
    setIsFeedBackPopupOpen(true);
  }

  const handleCloseFeedBackPopup = () => {
    setIsFeedBackPopupOpen(false);
    setNameInputFeedBack('');
    setPhoneInputFeedBack('');
  }

  const handleCloseCallPopup = () => {
    setIsCallPopupOpen(false);
    setNameInputCall('');
    setPhoneInputCall('');
    setEmailInputCall('');
    setIsCallFormSubmit(false);
  }

  const handleCallButton = (e) => {
    e.preventDefault();
    setIsCallPopupOpen(true);
    setIsCallFormSubmit(true);
  }



  return (

    <div className={s.aboutUs}>
      <h2 className='title'>бла бла тут о нас</h2>
      <p className='text'>мы супер пупер и пыатаемся сделать автотесты без автотестов</p>
      <p>Свяжитесь с нами. Мы самые классные</p>

{/* Первая форма */}
      <form id="feedback-form" className={sel(s.form, s.form_selen)} onSubmit={handleFeedBackButton}>
        <h3 className={s.form_title}>Обратная связь</h3>
        <label className={s.lable} for='name'>
          <input type='text'
            className={sel(s.input, s.input_name)}
            name='name'
            required
            placeholder='ФИО'
            onChange={(e) => setNameInputFeedBack(e.target.value)}
            value={nameInputFeedBack}
          >
          </input>
        </label>
        <label className={s.lable} for='phone'>
          <input type='tel'
            className={sel(s.input, s.input_phone)}
            name='phone'
            required
            placeholder='Телефон'
            onChange={(e) => setPhoneInputFeedBack(e.target.value)}
            value={phoneInputFeedBack}
          >
          </input>
        </label>

        <button type='submit' className={s.button} >
          Отправить
        </button>
      </form>

      <div id="success-popup_feedback" className={sel(s.popup)} style={isFeedBackPopupOpen ? { display: 'flex' } : { display: 'none' }}>
        <div className={s.popup_content}>
          <span className={s.close} id="close-success" onClick={handleCloseFeedBackPopup}>&times;</span>
          <p>Форма первая успешно отправлена!</p>
        </div>
      </div>


{/* Кнопка заказать звонок */}
      <button id="call-order-btn"
        className={sel(s.button_call, s.form_selen)}
        type='button'
        onClick={() => setIsCallPopupOpen(true)}
      >
        Заказать звонок
      </button>

{/* Открывается попап заказа */}
      <div id="call-popup" className={s.popup} style={isCallPopupOpen ? { display: 'flex' } : { display: 'none' }}>
        <div className={sel(s.popup_content)} >

{/* Вторая форма обратного звонка */}
          <span id="close-popup" className={s.close} onClick={handleCloseCallPopup}>&times;</span>
          <form id="call-form" className={s.form_call} onSubmit={handleCallButton} style={isCallFormSubmit ? { display: 'none' } : { display: 'flex' }}>
            <h3 className={s.form_title}>Заказать звонок</h3>

            <label className={s.lable} for='name'>
              <input type='text'
                className={sel(s.input, s.input_name)}
                name='name-call'
                required
                placeholder='ФИО'
                onChange={(e) => setNameInputCall(e.target.value)}
                value={nameInputCall}
              >
              </input>
            </label>

            <label className={s.lable} for='phone'>
              <input type='tel'
                className={sel(s.input, s.input_phone)}
                name='phone-call'
                required
                placeholder='Телефон'
                onChange={(e) => setPhoneInputCall(e.target.value)}
                value={phoneInputCall}
              >
              </input>
            </label>

            <label className={s.lable} for='email'>
              <input type='email'
                className={sel(s.input, s.input_phone)}
                name='email-call'
                required
                placeholder='Email'
                onChange={(e) => setEmailInputCall(e.target.value)}
                value={emailInputCall}
              >
              </input>
            </label>

            <button type='submit' className={s.button} >
              Отправить
            </button>

          </form>

          <div id="success-popup-call">
            <p style={isCallFormSubmit ? { display: 'flex' } : { display: 'none' }}>Форма вторая успешно отправлена!</p>
          </div>
          
        </div>
      </div>
    </div>
  )

}

export default AboutUs;
