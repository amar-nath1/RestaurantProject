import classes from './CartModal.module.css'
import Card from '../UI/Card'
import React from 'react'
import ReactDOM from 'react-dom'

const Backdrop=()=>{

    return (
        <div className={classes.backdrop}></div>
    )

}

const ModalOverlay=()=>{

    return (
        <Card className={classes.modal}>
            <div className={classes.content}><p>Margherita</p></div>
            <header className={classes.header}>
                <h2>Total Amount</h2><h3> $ 22.9</h3>
            </header>
            <footer className={classes.actions}><button>Close</button><button>Order</button></footer>
        </Card>

    )
}

const CartModal = ()=>{

    return (
        <>
        {ReactDOM.createPortal(<Backdrop/>,document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay/>,document.getElementById('overlay-root'))}
        </>
    )
}

export default CartModal



