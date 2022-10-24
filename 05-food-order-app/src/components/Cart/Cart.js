import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  const ctx = useContext(CartContext);

  return (
    <Modal onClick={props.onClose}>
      {ctx.items}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
