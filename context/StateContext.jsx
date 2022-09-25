/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;

  const onAdd = (product, stock) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * stock);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + stock);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === checkProductInCart.id)
          return { ...cartProduct, stock: cartProduct.stock + stock };
      });

      setCartItems(updatedCartItems);
    } else {
      product.stock = stock;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.stock
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.stock
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQty = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);

    if (value === 'inc') {
      setCartItems(
        cartItems.map((item, i) =>
          i === index
            ? { ...foundProduct, stock: foundProduct.stock + 1 }
            : item
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.stock > 1) {
        setCartItems(
          cartItems.map((item, i) =>
            i === index
              ? { ...foundProduct, stock: foundProduct.stock - 1 }
              : item
          )
        );
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrementQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incrementQty,
        decrementQty,
        onAdd,
        onRemove,
        toggleCartItemQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
