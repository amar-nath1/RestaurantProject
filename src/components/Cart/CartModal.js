import classes from './CartModal.module.css'
import Card from '../UI/Card'
import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../UI/Button'
import CartContext from '../../store/cart-context'

const Backdrop=(props)=>{

    return (
        <div className={classes.backdrop} onClick={props.hideCartModal}></div>
    )

}

const ModalOverlay=(props)=>{

    const modalCtx=useContext(CartContext)
let totalAmount= 0
    const modalArr=modalCtx.items.map((item)=>{
        totalAmount+=(item.qty*item.price)

        return (
            <>

            <div className={classes.content}><p>{item.name}</p></div>
            <header className={classes.header}>
                <p>Qty- {item.qty}</p><h3>Rs. {(item.qty*item.price).toFixed(2)}</h3>
                
            </header>
            
            </>

        )
    })

    return (
        <Card className={classes.modal}>
           
        {modalArr}
        <div className={classes.totalAmt}><h3>Total Amount</h3><h3> Rs. {totalAmount.toFixed(2)}</h3></div>

            <footer className={classes.actions}><Button onClick={props.hideCartModal}>Close</Button><Button>Order</Button></footer>
        </Card>

    )
}

const CartModal = (props)=>{

    return (
        <>
        {ReactDOM.createPortal(<Backdrop hideCartModal={props.hideCartModal}/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay hideCartModal={props.hideCartModal}/>,document.getElementById('overlay-root'))}
        </>
    )
}

export default CartModal



