import classes from './AvailableMeals.module.css'
import MealItemForm from './MealItemForm';
const AvailableMeals=()=>{

    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Margherita',
          description: 'The Margherita pizza Dominos is made using the freshest pizza dough',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Veggie Supreme',
          description: 'Black Olives, Green Capsicum, Mushroom, Onion, Red Paprika, Sweet Corn',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Classic Corn',
          description: 'Pizza topped with our Classic Pan sauce, sweet corn and cheesy dressing. An all-time favorite.',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Only Cheesy',
          description: 'Pizza topped with cheesy dressing and mozzarella cheese for that extraaa cheesy flavor.',
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