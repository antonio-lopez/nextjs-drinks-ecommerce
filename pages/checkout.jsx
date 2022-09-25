/* eslint-disable react/self-closing-comp */
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiFillDelete,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Checkout = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQty,
    onRemove,
  } = useStateContext();
  return (
    <div className="mt-10 min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        {/* empty cart */}
        <div className="grid grid-cols-1">
          {cartItems.length < 1 && (
            <div className="flex min-h-screen flex-col items-center justify-center">
              <AiOutlineShoppingCart size={100} />
              <h1 className="mb-10">Your shopping bag is empty</h1>
              <Link href="/">
                <button
                  type="button"
                  className="rounded-lg py-4 px-6 ring-2 ring-black hover:shadow-xl"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* cart */}
        {cartItems.length >= 1 && (
          <div>
            {/* header */}
            <div className=" hidden grid-cols-5 gap-x-10 py-7 text-center text-gray-500 md:grid">
              <span className="col-start-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>

            {/* cart items */}
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <div className="grid grid-cols-1 place-items-center gap-x-10 px-5 text-center md:grid-cols-5 md:text-left">
                    <img
                      className="hidden md:block"
                      src={urlFor(item?.image[0])}
                      alt={item.name}
                    />
                    {/* product details */}
                    <div>
                      <img
                        className="md:hidden"
                        src={urlFor(item?.image[0])}
                        alt={item.name}
                      />
                      <h1 className="font-bold">{item.name}</h1>
                      <div className="text-sm text-gray-500">
                        <p>{item.size ? item.size : item.quantity}</p>
                        <p>
                          {item.beerStyle ? item.beerStyle : item.coffeStyle}
                        </p>
                      </div>
                    </div>
                    <span className="pb-5 md:hidden">Price ${item.price}</span>
                    <span className="hidden md:block">${item.price}</span>

                    {/* quantity counter */}
                    <div className="flex h-11 w-36 items-center justify-center rounded-md text-black ring-2 ring-black ">
                      <button
                        className=" py-3 px-4"
                        type="button"
                        onClick={() => toggleCartItemQty(item.id, 'dec')}
                      >
                        <AiOutlineMinus />
                      </button>
                      <span className="h-full border-x-2 border-black px-4 py-2 text-black">
                        {item.stock}
                      </span>
                      <button
                        className="py-3 px-4"
                        type="button"
                        onClick={() => toggleCartItemQty(item.id, 'inc')}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>

                    {/* <span>{item.stock}</span> */}
                    <div className="flex items-center space-x-10 pt-7 md:pt-0">
                      <span className="font-bold md:hidden">
                        Total: ${item.price * item.stock}
                      </span>
                      <span className="hidden md:block">
                        ${item.price * item.stock}
                      </span>
                      <button type="button" onClick={() => onRemove(item)}>
                        <AiFillDelete size={20} />
                      </button>
                    </div>
                  </div>

                  {/* divider line */}
                  <div className="mt-6 py-4">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                </div>
              );
            })}

            {/* subtotal */}
            <div className="grid grid-cols-1 gap-y-6 px-5 pb-16 pt-7 md:grid-cols-4 lg:grid-cols-5 lg:px-0">
              <div className="col-start-2 text-center md:col-start-4">
                Subtotal ({totalQuantities}) :
                <span className="pl-10 font-bold">${totalPrice}</span>
              </div>
              <button
                type="button"
                className="col-start-2 row-start-2 rounded-xl py-3 ring-2 ring-black hover:shadow-xl md:col-start-4"
              >
                Pay with stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
