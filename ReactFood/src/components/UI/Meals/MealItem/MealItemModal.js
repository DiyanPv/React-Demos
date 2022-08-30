import Modal from "../../Cart/Modal";

import classess from "./MealItemModal.module.css";
const MealItemModal = ({ setModalItem, modalItem }) => {
  console.log(modalItem);
  const setModalItemFalse = () => {
    setModalItem(null);
  };
  return (
    <Modal>
      <div className={classess.mainDiv}>
        <h1>Dish: {modalItem.name}</h1>
        <div className={classess.divImg}>
          <img
            src={modalItem.imgUrl}
            alt="no image found"
            className={classess.img}
          />
        </div>
      </div>
      <div className={classess.btnDiv}>
      <button className={classess.btn} onClick={setModalItemFalse}>
        Cancel
      </button>
      </div>
    </Modal>
  );
};

export default MealItemModal;
