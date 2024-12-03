
import s from './header.module.css';
import sel from 'classnames';
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';


function Header() {


    return (
        <header className={s.header}>
            <nav className={s.navigation}>
                <Link to={'/cards-list'} className={s.logo_box}>
                    <img className={s.logo} src={logo} />
                </Link>

                <div className={s.options_box}>
                    <Link to={'/cards-list/materials'} className={s.nav_box}>
                        <p className={s.nav_text}>Материалы</p>
                    </Link>
                    <Link to={'/cards-list/practice'} className={s.nav_box}>
                        <p className={s.nav_text}>Приступить к изучению</p>
                    </Link>
                    <Link className={s.nav_box}>
                        <p className={s.nav_text}>О нас</p>
                    </Link>
                </div>


                <Link className={sel(s.nav_box, s.personal_account)}>
                    <p className={s.nav_text}>Личный кабинет</p>
                </Link>



            </nav>

        </header>
    )


}

export default Header;
