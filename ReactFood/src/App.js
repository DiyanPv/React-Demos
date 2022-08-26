import Header from "./components/Layout/Header";
import Meals from "./components/UI/Meals/Meals";
import Cart from "./components/UI/Cart/Cart";
import { useState } from "react";
import classes from "./App.module.css";
import CartProvider from "../src/components/store-contents-context/CartProvider";
function App() {
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
      {modalIsVisible ? (
        <Cart
          modalStateTracker={modalStateTracker}
          setCartAmount={setCartAmount}
          cartAmount={cartAmount}
        ></Cart>
      ) : (
        ``
      )}
      <Header
        modalStateTracker={modalStateTracker}
        cartItemsNumber={cartItemsNumber}
      />
      <Meals setCartItems={setCartItems} />
      <footer className={classes.footer}>
        <p>
          {" "}
          © 2022 Diyan Yanev. <span> All rights reserved</span>.
        </p>
      </footer>
    </CartProvider>
  );
}

export default App;
