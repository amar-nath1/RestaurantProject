import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import CartModal from '../Cart/CartModal'
import React,{useState,useContext} from 'react'



const Header =()=>{
    

    const [cartModalshow,setCartModalShow]=useState(false)
    const showCartModal=()=>{
        setCartModalShow(true)
        
    }
    const hideCartModal=()=>{
        setCartModalShow(false)
    }
    return (
        <>
        <header className={classes.header}>
            <h1>AAR Pizza</h1>
            <HeaderCartButton onClick={showCartModal}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Meals Header'/>
        </div>
        {cartModalshow && <CartModal hideCartModal={hideCartModal}/>}
        </>
    )
}

export default Header
 