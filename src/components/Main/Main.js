import classes from './Main.module.scss'

import { Search } from './Search/Search'

import barBQ from './img/barBQ.png'
import dimsum from './img/dimsum.png'
import dvij from './img/dvij.png'
import dzi from './img/dzi.png'
import mac from './img/mac.png'
import ny from './img/ny.png'
import pizzelove from './img/pizzelove.png'
import sinabon from './img/sinabon.png'
import ziy from './img/ziy.png'

export function Main() {
    return (
        <div className={classes.main}>
            <Search />
            <div className={classes.main__inform}>
                <div className={classes.main__container}>
                    <p>When</p>
                    <div className={classes.main__border}>ASAP</div>
                </div>
                <div className={classes.main__container}>
                    <p>To</p>
                    <input className={classes.main__input} placeholder='ul. Bolshaya Dmitrovka,22' disabled/>
                </div>
            </div>
            <div className={classes.main__title}>Moscow Restaurants</div>
            <div className={classes.main__wrapper}>
                <div>
                    <img src={mac} alt="mac" />
                    <h2 className={classes.main__restaurants}>Макдоналдс — Газетный</h2>
                    <p className={classes.main__product}>₽₽ • Бургеры</p>
                    <p className={classes.main__cost}>25 - 35 Min</p>
                </div>
                <div>
                    <img src={dimsum} alt="dimsun" />
                    <h2 className={classes.main__restaurants}>DimSum & Co — ЦДМ</h2>
                    <p className={classes.main__product}>₽ • Японская • Китайская • Азиатская</p>
                    <p className={classes.main__cost}>40 - 50 Min</p>
                </div>
                <div>
                    <img src={dvij} alt="dvij" />
                    <h2 className={classes.main__restaurants}>ДвижОК — Манежная</h2>
                    <p className={classes.main__product}>₽ • Американская • Европейская</p>
                    <p className={classes.main__cost}>35 - 45 Min</p>
                </div>
                <div>
                    <img src={ny} alt="ny" />
                    <h2 className={classes.main__restaurants}>НЯ — NHA</h2>
                    <p className={classes.main__product}>₽₽ • Вьетнамская</p>
                    <p className={classes.main__cost}>30 - 40 Min</p>
                </div>
                <div>
                    <img src={dzi} alt="dzi" />
                    <h2 className={classes.main__restaurants}>Точка Дзы — Цветной</h2>
                    <p className={classes.main__product}>₽₽ • Вьетнамская</p>
                    <p className={classes.main__cost}>40 - 50 Min</p>
                </div>
                <div>
                    <img src={sinabon} alt="sinabon" />
                    <h2 className={classes.main__restaurants}>Cinnabon</h2>
                    <p className={classes.main__product}>₽ • Выпечка • Десерты • Капкейки</p>
                    <p className={classes.main__cost}>25 - 35 Min</p>
                </div>
                <div>
                    <img src={pizzelove} alt="pizzellove" />
                    <h2 className={classes.main__restaurants}>PIZZELOVE</h2>
                    <p className={classes.main__product}>₽₽ • Пицца</p>
                    <p className={classes.main__cost}>15 - 25 Min</p>
                </div>
                <div>
                    <img src={ziy} alt="ziy" />
                    <h2 className={classes.main__restaurants}>Zю кафе — Тверская</h2>
                    <p className={classes.main__product}>₽₽ • Японская</p>
                    <p className={classes.main__cost}>25 - 35 Min</p>
                </div>
                <div>
                    <img src={barBQ} alt="barBQ" />
                    <h2 className={classes.main__restaurants}>Bar BQ Cafe — Манежная</h2>
                    <p className={classes.main__product}>₽₽₽ • Европейская</p>
                    <p className={classes.main__cost}>30 - 40 Min</p>
                </div>
            </div>
        </div>
    )
}