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
];

const MealsList = () => {
  const mealsList = mealsListArr.map((meal) => (
    <MealItem
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
