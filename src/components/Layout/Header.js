import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header =()=>{

    return (
        <>
        <header className={classes.header}>
            <h1>AAR Pizza</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Meals Header'/>
        </div>
        
        </>
    )
}

export default Header
