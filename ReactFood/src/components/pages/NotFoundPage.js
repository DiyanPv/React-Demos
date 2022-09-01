import classes from "./NotFoundPage.module.css";
import HomeButton from "./elements/ButtonHome";
const NotFoundPage = () => {
  return (
    <div className={classes.mainContent}>
      <HomeButton />
      <div className={classes.positionText}>
        <h1 className={classes.pageText}>Error 404</h1>
        <h2 className={classes.pageTextNotFound}>Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
