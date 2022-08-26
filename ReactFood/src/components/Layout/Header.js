import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCard from "./HeaderCartButton";
const Header = ({ modalStateTracker, cartItemsNumber }) => {


  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Orders</h1>
        <HeaderCard
          modalStateTracker={modalStateTracker}
        >
          {" "}
        </HeaderCard>
      </header>
      <div className={classes[`main-image`]}>
        <img
          src={
            "https://images-prod.healthline.com/hlcmsresource/images/News/food-nutrition/3875-thanksgiving_dinner-1296x728-header.jpg"
          }
          alt="No img"
        ></img>
      </div>
    </Fragment>
  );
};
export default Header;
