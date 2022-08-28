import classes from "./CheckOutOrder.module.css";
const CheckOut = ({ validityObject }) => {

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
        {!validityObject.name && <p className={classes.err}>Name should be longer than 5 symbols.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Street Address</label>
        <input type="text" id="address"></input>
        {!validityObject.address && (
          <p className={classes.err}>Address should be longer than 5 symbols.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="pk">Postal Code</label>
        <input type="text" id="pk"></input>
        {!validityObject.postalCode && <p className={classes.err}>Invalid Postal Code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
        {!validityObject.address && <p className={classes.err}>Invalid City.</p>}
      </div>
    </form>
  );
};
export default CheckOut;
