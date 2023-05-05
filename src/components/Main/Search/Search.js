import classes from './Search.module.scss'
import shape from './shape.svg'

export function Search() {
    return (
        <div className={classes.search}>
            <div className={classes.search__wrapper}>
                <img src={shape} alt="shape" />
                <input 
                    className={classes.search__input}
                    type="text"
                    placeholder='Search for restaurant or cuisine'
                    disabled
                />
            </div>
            <div><hr /></div>
        </div>
    )
}