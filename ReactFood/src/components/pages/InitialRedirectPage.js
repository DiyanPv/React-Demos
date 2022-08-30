import classes from "./InitialRedirectPage.module.css";

import HomeButton from "./elements/ButtonHome";
const RedirectToHomePage = () => {
  return (
    <div className={classes.redirectPageHome}>
      <HomeButton></HomeButton>
    </div>
  );
};

export default RedirectToHomePage;
