import classes from "./ButtonHome.module.css";
import { Link } from "react-router-dom";
function HomeButton() {
  return (
    <>
      <Link to="/homepage">
        <button className={classes.btn}>Visit Homepage</button>
      </Link>
    </>
  );
}

export default HomeButton;
