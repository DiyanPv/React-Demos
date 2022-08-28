import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CheckOut from "./CheckOutOrder";
import CartContext from "../../store-contents-context/cart-context";
const isEmpty = (value) => value.trim() === ``;
const isNotFiveChars = (value) => value.trim().length >= 5;
const Cart = ({ modalStateTracker, cartAmount, setCartAmount }) => {
  const [orderIsClicked, setOrderIsClicked] = useState(false);
  const [validityObject, setValidityObject] = useState({
    name: true,
    postalCode: true,
    address: true,
    city: true,
  });
  const orderButtonHandler = (event) => {
    setOrderIsClicked(true);
  };
  const confirmOrderHandler = (event) => {
    const form = event.target.parentElement.parentElement.querySelector(`form`);
    let [name, address, postalCode, city] = form;
    [name, address, postalCode, city] = [
      name.value,
      address.value,
      postalCode.value,
      city.value,
    ];
    ///destructuring input fields and their value from form before submission to backend
    const enteredNameIsValid = !isEmpty(name);
    const enteredAddressIsValid = !isEmpty(address);
    const enteredPostalCodeIsValid = !isEmpty(postalCode);
    const enteredCityIsValid = !isEmpty(city);
    //validating if empty string, below is validation for length >5;
    const nameLengthisValid = isNotFiveChars(name);
    const addressLengthisValid = isNotFiveChars(address);
    setValidityObject({
      name: enteredNameIsValid && nameLengthisValid,
      address: enteredAddressIsValid && addressLengthisValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid &&
      nameLengthisValid &&
      addressLengthisValid;
    if (!formIsValid) {
      return;
    } else {
      //submit card data to server
    }
  };

  const cancelButtonIsClicked = (event) => {
    setOrderIsClicked(false);
    modalStateTracker.unclicked();
  };
  const data = useContext(CartContext);
  const onAddtoCart = (item) => {
    data.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    data.removeItem(id);
  };

  const cartitems = [...data.items];
  const hasItems = data.items.length > 0;
  const checkValidity = hasItems && orderIsClicked;
  const orderButtonValidity = hasItems && !checkValidity;
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartitems.map((item) => (
        <li key={item.id} className={classes.cartItem}>
          <span className={classes.itemName}> {item.name}</span>
          <span className={classes.itemamount}>x{item.amount}</span>
          <span className={classes.itemName}>Price: ${item.price}</span>

          <div>
            <button
              className={`${classes[`button--alt`]} ${classes.btn}`}
              onClick={onRemoveHandler.bind(null, item.id)}
            >
              -
            </button>
            <button
              className={`${classes[`button--alt`]} ${classes.btn}`}
              onClick={onAddtoCart.bind(null, item)}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      {hasItems ? (
        <>
          <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{`$${data.totalAmount.toFixed(2)}`}</span>
          </div>
          {orderIsClicked && <CheckOut validityObject={validityObject} />}
        </>
      ) : (
        `Your cart is empty!`
      )}
      <div className={classes.actions}>
        <button
          className={classes[`button--alt`]}
          onClick={cancelButtonIsClicked}
        >
          Cancel
        </button>
        {checkValidity && (
          <button className={classes.button} onClick={confirmOrderHandler}>
            Confirm Order
          </button>
        )}
        {orderButtonValidity && (
          <button className={classes.button} onClick={orderButtonHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
