
import s from './header.module.css';
import sel from 'classnames';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import burger from '../../images/burger.svg';
import { useEffect, useRef, useState } from 'react';


function Header() {

    const [isClickBurger, setIsClickBurger] = useState(false);


    const refBurger = useRef();
    const refBurgerButton = useRef();



    const handleOpenBurger = () => {
        setIsClickBurger(!isClickBurger);  
    }


// handle click outside
    useEffect(() => {
        document.addEventListener('click', function(e) {
            if (e.target !== refBurger.current){
                setIsClickBurger(false)               
            }
        })

        return () => document.addEventListener('click', function(e) {
            if (e.target !== refBurger.current){
                setIsClickBurger(false)               
            }
        })

    },[isClickBurger])
    


    return (
        <header className={s.header}>
            <nav className={s.navigation}>
                <Link to={'/cards-list'} className={s.logo_box}>
                    <img className={s.logo} src={logo} />
                </Link>

                <button ref={refBurgerButton} className={s.burger_button} type='button' onClick={handleOpenBurger}>
                    <img ref={refBurger} className={s.burger} src={burger} />
                </button>

                <div className={isClickBurger ? sel(s.nav_block, s.nav_block__active) : s.nav_block} > 
                    <div className={s.options_box}>
                        <Link to={'/cards-list/materials'} className={s.nav_box}>
                            <p className={s.nav_text}>Материалы</p>
                        </Link>
                        <Link to={'/cards-list/practice'} className={s.nav_box}>
                            <p className={s.nav_text}>Приступить к изучению</p>
                        </Link>
                        <Link to={'/cards-list/about'} className={s.nav_box}>
                            <p className={s.nav_text}>О нас</p>
                        </Link>
                    </div>

                    <Link className={sel(s.nav_box, s.personal_account)}>
                        <p className={s.nav_text}>Личный кабинет</p>
                    </Link>
                </div>
            </nav>

        </header>
    )


}

export default Header;
