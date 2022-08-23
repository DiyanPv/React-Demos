
import Modal from "./Modal";
import classes from "./Cart.module.css"
const Cart = (props) => {
  const cartitems = [
    { id: `c1`, name: `Spaghetti`, price: 12.99 },
    { id: `c2`, name: `Sushi`, price: 8.99 },
  ];
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartitems.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{props.totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[`button--alt`]}></button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
