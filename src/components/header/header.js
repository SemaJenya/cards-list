
import s from './header.module.css';
import sel from 'classnames';
import logo from '../../images/logo.svg'


function Header() {


    return (
        <header className={s.header}>
            <nav className={s.navigation}>
                <div className={s.logo_box}>
                    <img className={s.logo} src={logo} />
                </div>

                <div className={s.options_box}>
                    <div className={s.nav_box}>
                        <p className={s.nav_text}>Материалы</p>
                    </div>
                    <div className={s.nav_box}>
                        <p className={s.nav_text}>Приступить к изучению</p>
                    </div>
                    <div className={s.nav_box}>
                        <p className={s.nav_text}>О нас</p>
                    </div>
                </div>


                <div className={sel(s.nav_box, s.personal_account)}>
                    <p className={s.nav_text}>Личный кабинет</p>
                </div>



            </nav>

        </header>
    )


}

export default Header;
