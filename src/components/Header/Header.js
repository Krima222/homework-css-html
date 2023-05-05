import classes from './Header.module.scss'

import logo from './img/logo.svg'
import basket from './img/basket.svg'

export function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.header__logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.header__inform}>
                <div className={classes.header__border}>ASAP</div>
                <p className={classes.header__paragraf}>to</p>
                <input className={classes.header__input} placeholder='ul. Bolshaya Dmitrovka,22' disabled/>
            </div>
            <div className={classes.header__wrapper}>
                <button className={classes.header__button}>Sing in</button>
                <button className={classes.header__button}>Register</button>
                <img src={basket} alt="basket" />
            </div>
        </div>
    )
}