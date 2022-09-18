import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCard from "./HeaderCartButton";
const Header = ({ modalStateTracker, cartItemsNumber }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Orders</h1>
        <HeaderCard modalStateTracker={modalStateTracker}> </HeaderCard>
      </header>
      <div className={classes[`main-image`]}>
        <img
          src={
            "https://eaternalzest.com/wp-content/uploads/2020/08/11.0_Saffron.jpg"
          }
          alt="No img"
        ></img>
      </div>
    </Fragment>
  );
};
export default Header;
