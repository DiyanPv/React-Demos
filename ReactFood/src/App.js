import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import React from "react";
import HomePage from "./components/pages/HomePage";
import MealItemModal from "./components/UI/Meals/MealItem/MealItemModal";
import RedirectToHomePage from "./components/pages/InitialRedirectPage";
function App() {
  const [modalItem, setModalItem] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<RedirectToHomePage />}></Route>{" "}
        <Route path={"*"} element={<RedirectToHomePage />}></Route>
        <Route
          exact
          path={"/homepage"}
          element={
            <>
              {" "}
              <HomePage setModalItem={setModalItem}></HomePage>
              {modalItem && (
                <MealItemModal
                  setModalItem={setModalItem}
                  modalItem={modalItem}
                />
              )}
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
