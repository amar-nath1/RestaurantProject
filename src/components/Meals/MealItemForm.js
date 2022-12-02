import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import React,{useState} from 'react'
import CartModal from '../Cart/CartModal'


const MealItemForm=(props)=>{
    const [showCartModal,setShowCartModal]=useState(false)

    const addItemHandler=(event)=>{
        event.preventDefault()
        setShowCartModal(true)
    }
    const hideCartModal=()=>{

        setShowCartModal(false)
    }

    return (
        <>
        <form className={classes.form}>

            <Input label='Qty' input={{
                id:props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}></Input>
            <button onClick={addItemHandler}> + Item</button>
        </form>
            {showCartModal && <CartModal hideCartModal={hideCartModal}/>}
        </>
    )
}

export default MealItemForm