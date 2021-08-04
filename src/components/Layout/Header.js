import { Fragment } from "react";

import backgroundImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = ({ onShow }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={backgroundImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
