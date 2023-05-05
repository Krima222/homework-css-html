import classes from './Layout.module.scss'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'

export function Layout() {
    return (
        <div className={classes.layout}>
            <div className={classes.layout__header}>
                <Header />
            </div>
            <div className={classes.layout__content}>
                <Main />
            </div>
            <div className={classes.layout__footer}>
                <Footer />
            </div>
        </div>
    )
}