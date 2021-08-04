import { useState, useContext, useEffect } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../context/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [isHighLighted, setIsHighLighted] = useState(false);

  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    isHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighLighted(true);

    const timer = setTimeout(() => {
      setIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
