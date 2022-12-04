import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import React,{useContext} from 'react'
import CartContext from '../../store/cart-context'


const MealItemForm=(props)=>{
    const itemAddCtx=useContext(CartContext)
    

    const addItemHandler=(event)=>{
        event.preventDefault()
        const dummyMealWithQty= {...props.dummyMeals,qty:document.getElementById('quantity_'+props.id).value}
        itemAddCtx.addItem(dummyMealWithQty)
                
    }

    const removeItemHandler=(event)=>{
        event.preventDefault()
        const dummyMealWithQty= {...props.dummyMeals,qty:document.getElementById('quantity_'+props.id).value}
        itemAddCtx.removeItem(dummyMealWithQty)
                
    }
    
    return (
        <>
        <form className={classes.form}>

            <Input label='Qty' input={{
                id:'quantity_'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}></Input>
           <button className={classes.reduceItem} onClick={removeItemHandler}> - </button> <button onClick={addItemHandler}> + </button>
        </form>
            
        </>
    )
}

export default MealItemForm