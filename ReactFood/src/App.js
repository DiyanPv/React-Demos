import Header from "./components/Layout/Header";
import {Fragment} from "react";
import Meals from "./components/UI/Meals";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
