import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onHide }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const itemAddHandler = (item) => {
    cartContext.addItem(item);
  };
  const itemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={itemAddHandler.bind(null, item)}
          onRemove={itemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHide}>
          Close
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={() => console.log("Need to add this feature in future")}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
