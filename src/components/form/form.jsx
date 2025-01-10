

import { useState } from 'react';
import s from './form.module.css';
import sel from 'classnames';



function Form([setNameInputFeedBack, setPhoneInputFeedBack, isFeedBackPopupOpen, handleCloseFeedBackPopup, handleFeedBackButton, nameInputFeedBack, phoneInputFeedBack]) {


  


  return (
    <div className={s.aboutUs}>
      
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


    </div>
  )

}

export default Form;
