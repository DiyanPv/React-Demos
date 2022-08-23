import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/UI/Meals/Meals";
// import Cart from "./components/UI/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
