import Modal from "../../Cart/Modal";
import classes from "../../Cart/Cart.module.css";
import classess from "./MealItemModal.module.css"
const MealItemModal = ({ setModalItem, modalItem }) => {
  console.log(modalItem);
  const setModalItemFalse = () => {
    setModalItem(null);
  };
  return (
    <Modal>
      <div>
        <h1>Dish: {modalItem.name}</h1>
        <img src={modalItem.imgUrl} alt="no image found" className={classess.img} />
      </div>
      <button className={classes.btn} onClick={setModalItemFalse}>
        Cancel
      </button>
    </Modal>
  );
};

export default MealItemModal;
