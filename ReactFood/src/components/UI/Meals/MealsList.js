import classes from "./MealsList.module.css";
import Card from "../Card";
import MealItem from "./MealItem/MealItem";
const mealsListArr = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Lasagna",
    description: "Fillings can be personalised!",
    price: 19.99,
  },
  {
    id: "m5",
    name: "Beef steak with gravy and potatoes",
    description: "Well-done and with BBQ sauce!",
    price: 29.99,
  },
];

const MealsList = ({setCartItems}) => {
  const mealsList = mealsListArr.map((meal) => (
    <MealItem
      setCartItems={setCartItems}
      price={meal.price}
      name={meal.name}
      id={meal.id}
      key={Math.random() + `00` + Math.random()}
      description={meal.description}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
