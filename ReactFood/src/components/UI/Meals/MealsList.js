import classes from "./MealsList.module.css";
import classesMealItemForm from "../Meals/MealItem/MealItemForm.module.css";
import styles from "../Input.module.css";
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";
// import { Label } from "@fluentui/react/lib/Label";
import Card from "../Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState, useContext } from "react";
import Context from "../../store-contents-context/cart-context";
const server = `https://diyan-test-default-rtdb.europe-west1.firebasedatabase.app/items.json`;

const MealsList = ({ setModalItem, setCartItems }) => {
  const ctx = useContext(Context);
  console.log(ctx);
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  ctx.isLoading = isLoading;
  useEffect(() => {
    setTimeout(() => {
      mealsList();
    }, 1500);
    const mealsListArr = [];
    const mealsList = async () => {
      setIsLoading(true);
      const res = await fetch(server);
      if (!res.ok) {
        throw new Error(`Something went wrong`);
      }
      const data = await res.json();
      for (let key in data) {
        mealsListArr.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          imgUrl: data[key].imgUrl,
        });
        console.log(data[key]);
      }
      setMeals(mealsListArr);
    };

    mealsList().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    setIsLoading(false);
  }, []);

  const handleOnClick = (event, item) => {
    if (
      event.target.className !== classesMealItemForm.formbutton &&
      event.target.className !== styles.quantityButton
    ) {
      setModalItem(item);
    }
  };

  const mealsList = meals.map((meal) => (
    <MealItem
      setCartItems={setCartItems}
      handleOnClick={(event) => handleOnClick(event, meal, isLoading)}
      setModalItem={setModalItem}
      price={meal.price}
      name={meal.name}
      id={meal.id}
      key={Math.random() + `00` + Math.random()}
      description={meal.description}
    ></MealItem>
  ));
  if (!isLoading) {
    return (
      <div >
        <Spinner
          label="Loading..."
          size={SpinnerSize.large}
          className={classes.spinner}
        />
      </div>
    );
  }

  if (httpError !== null) {
    return <p className={classes.error}>{httpError}</p>;
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
