import Header from "./components/Layout/Header";
import Meals from "./components/UI/Meals/Meals";
import Cart from "./components/UI/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store-contents-context/CartProvider";
import classes from "./App.module.css"
function App() {

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
  return (
    <CartProvider >
      {modalIsVisible ? (
        <Cart modalStateTracker={modalStateTracker}></Cart>
      ) : (
        `` 
      )}
      <Header modalStateTracker={modalStateTracker} />
      <Meals />
      <footer className={classes.footer}>
      <p> © 2022 Diyan Yanev.    <span> All rights reserved</span>.</p>
      </footer>
    </CartProvider>
  );
}

export default App;
