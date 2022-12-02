import classes from './Button.module.css'

export const Button=(props)=>{

    return(

        <button className={classes.button} onClick={props.onClick}>{props.children}</button>
    )
}