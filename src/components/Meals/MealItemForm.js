import classes from './MealItemForm.module.css'
import Input from '../UI/Input'

const MealItemForm=(props)=>{

    return (
        <form className={classes.form}>

            <Input label='Qty' input={{
                id:props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}></Input>
            <button type='submit'> + Item</button>

        </form>


    )
}

export default MealItemForm