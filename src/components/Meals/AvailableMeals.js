import classes from './AvailableMeals.module.css'
import MealItemForm from './MealItemForm';
const AvailableMeals=()=>{

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

const mealsList=DUMMY_MEALS.map(meal=>
<li id={meal.id} key={meal.id} className={classes.item}><div><h3>{meal.name}</h3><div>{meal.description}</div><div><h4>$ {meal.price}</h4></div></div><div><MealItemForm id={meal.id}/></div></li>)
    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals