import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import HomePage from "./components/pages/HomePage";
import MealItemModal from "./components/UI/Meals/MealItem/MealItemModal";
function App() {
  const welcomepagelink = ["/", "/home", "/welcome"];
  const [modalItem, setModalItem] = useState(null);
 
  return (
    <Router>
      <Routes>
        <Route
          path={welcomepagelink[0]}
          element={
            <>
              <HomePage setModalItem={setModalItem}></HomePage>
              {modalItem && <MealItemModal setModalItem={setModalItem} modalItem={modalItem} />}
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
