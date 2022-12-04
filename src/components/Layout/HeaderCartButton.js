import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'

import React,{useContext} from "react"
import CartContext from "../../store/cart-context"

const HeaderCartButton=(props)=>{


   const badgeCtx=useContext(CartContext)
    let totalQuantity=0
    badgeCtx.items.forEach((item)=>{

        totalQuantity+=Number(item.qty)
    })

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>

    )
}

export default HeaderCartButton