import classes from './Footer.module.scss'

import whitelogo from './img/white-logo.svg'
import appStore from './img/appStore.png'
import googlePlay from './img/googlePlay.png'
import social from './img/social.png'

export function Footer() {
    return (
        <div className={classes.footer}>
            <div>
                <img src={whitelogo} alt="logo" />
            </div>
            <div><hr /></div>
            <div className={classes.footer__wrapper}>
                <div className={classes.footer__information}>
                    <input 
                        className={classes.footer__input}
                        type="text"
                        placeholder='ENGLISH'
                        disabled
                    />
                    <img src={social} alt="" />
                </div>
                <div>
                    <p>About UberEats</p>
                    <p>Become a Delivery Partner</p>
                    <p>Become a Restaurant Partner</p>
                </div>
                <div>
                    <p>See all cities</p>
                    <p>Pricing</p>
                    <p>Help</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div><hr /></div>
            <div className={classes.footer__icon}>
                <img src={appStore} alt="appStore" />
                <img src={googlePlay} alt="googlePlay" />
            </div>
            <div><hr /></div>
            <div className={classes.footer__about}>
               <p>© 2017 Uber Technologies Inc.</p> 
               <p>Privacy</p>
               <p>Terms</p>
            </div>
        </div>
    )
}