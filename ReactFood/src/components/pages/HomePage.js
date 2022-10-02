import Header from "../Layout/Header";
import Meals from "../UI/Meals/Meals";
import Cart from "../UI/Cart/Cart";
import { useState } from "react";
import classes from "../../App.module.css";
// import MealItemModal from "../UI/Meals/MealItem/MealItemModal";
import CartProvider from "../store-contents-context/CartProvider";

const HomePage = ({ setModalItem }) => {
  const [cartAmount, setCartAmount] = useState();

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const visibleModalHandler = () => {
    setModalIsVisible(true);
  };
  const invisibleModalHandler = () => {
    setModalIsVisible(false);
  };
  const modalStateTracker = {
    clicked: visibleModalHandler,
    unclicked: invisibleModalHandler,
  };

  const [cartItemsNumber, setCartItems] = useState(0);
  return (
    <CartProvider>
      <Header
        modalStateTracker={modalStateTracker}
        cartItemsNumber={cartItemsNumber}
      />

      <Meals setCartItems={setCartItems} setModalItem={setModalItem} />
      <footer className={classes.footer}>
        <p>
          © 2022 Diyan Yanev. <span> All rights reserved</span>.
        </p>
      </footer>
      {modalIsVisible && (
        <Cart
          modalStateTracker={modalStateTracker}
          setCartAmount={setCartAmount}
          cartAmount={cartAmount}
        ></Cart>
      )}
    </CartProvider>
  );
};

export default HomePage;
