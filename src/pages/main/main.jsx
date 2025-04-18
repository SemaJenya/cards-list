
import s from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import LandingCard from '../../components/landingCard/landingCard';
import { getLandingCard } from '../../utils/api';

import {createLandingCard} from '../../store/redusers/landingCard/landingCardSlice.js';
import sel from 'classnames';
import { useEffect } from 'react';



function Main() {

  const dispatch = useDispatch();

  useEffect(()=> {
    console.log('1111');

    
    dispatch(createLandingCard(getLandingCard()))
  }, [])


  const landingCards = useSelector(state => state.landingCard.landingCards);

  return (
    <section className={s.main}>
      <h1 className={s.title}>HELLO</h1>

      <LandingCard/>

    </section>
  )
 
}

export default Main;
