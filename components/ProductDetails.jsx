import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Divider from './Divider';
import { useStateContext } from '../context/StateContext';

const ProductDetails = ({
  image,
  name,
  style,
  price,
  size,
  description,
  styleDetails,
  notes,
  product,
}) => {
  const { decrementQty, incrementQty, qty, onAdd } = useStateContext();

  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <div className="mt-12 grid lg:grid-cols-2">
        <div className="space-y-5 place-self-center px-5 text-center text-3xl lg:space-y-0 lg:px-0">
          <h1 className="lg:hidden">{name}</h1>
          <img className="" src={image} alt={name} />
        </div>
        <div className="mt-6 text-center text-sm lg:mt-0 lg:px-7">
          <h1 className="mb-16 hidden text-3xl lg:block">{name}</h1>
          <h2 className="pb-2 text-lg">{style}</h2>
          <h3>{styleDetails}</h3>
          <Divider />
          <p className="py-2">{notes}</p>
          <Divider />
          <p className="pb-2">{size}</p>
          <span>Price: ${price}</span>

          <div className="my-8 flex flex-col items-center space-y-7">
            <div className="flex h-11 w-52 items-center justify-center rounded-md bg-white text-black ">
              <button
                className="mr-3 py-3 px-4"
                type="button"
                onClick={decrementQty}
              >
                <AiOutlineMinus />
              </button>
              <span className="h-full border-x-2 border-veryDarkCyan px-6 py-2 text-black">
                {qty}
              </span>
              <button
                className="ml-3 py-3 px-4"
                type="button"
                onClick={incrementQty}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {/* add to cart button */}
            <button
              type="button"
              onClick={() => onAdd(product, qty)}
              className="rounded-xl bg-transparent px-16 py-3 outline outline-1 outline-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <p className="py-3 text-sm lg:pt-16 lg:text-base">{description}</p>
      <Divider />
    </section>
  );
};

export default ProductDetails;
