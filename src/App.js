import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./context/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }

  const hideModalHandler = () => {
    setShowModal(false);
  }

  return (
    <CartProvider>
      {showModal && <Cart onHide={hideModalHandler}/>}
      <Header onShow={showModalHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
