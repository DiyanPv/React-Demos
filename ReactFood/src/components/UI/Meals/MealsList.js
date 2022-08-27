import classes from "./MealsList.module.css";
import Card from "../Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
const server = `https://react-project-25ddf-default-rtdb.europe-west1.firebasedatabase.app/items.json`;

const MealsList = ({ setCartItems }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const mealsListArr = [];
    const mealsList = async () => {
      const res = await fetch(server);
      const data = await res.json();
      for (let key in data) {
        mealsListArr.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
        console.log(data[key])
      }
      setMeals(mealsListArr);
    };
    mealsList()
  }, []);

  const mealsList = meals.map((meal) => (
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
