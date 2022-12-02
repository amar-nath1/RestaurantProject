import classes from './CartModal.module.css'
import Card from '../UI/Card'
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../UI/Button'

const Backdrop=(props)=>{

    return (
        <div className={classes.backdrop} onClick={props.hideCartModal}></div>
    )

}

const ModalOverlay=(props)=>{

    return (
        <Card className={classes.modal}>
            <div className={classes.content}><p>Margherita</p></div>
            <header className={classes.header}>
                <h2>Total Amount</h2><h3> $ 22.9</h3>
            </header>
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



