import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Divider from './Divider';

const ProductDetails = ({
  name,
  imgSrc,
  imgDesc,
  style,
  styleInfo,
  notes,
  qty,
  price,
  description,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <div className="mt-12 grid lg:grid-cols-2">
        <div className="space-y-5 place-self-center px-5 text-center text-3xl lg:px-0">
          <h1>{name}</h1>
          <img src={imgSrc} alt={imgDesc} />
        </div>
        <div className="mt-6 text-center text-sm">
          <h2 className="pb-2 text-lg">{style}</h2>
          <h3>{styleInfo}</h3>
          <Divider />
          <p className="py-2">{notes}</p>
          <Divider />
          <p className="pb-2">{qty}</p>
          <span>{price}</span>

          <div className="my-8 flex flex-col items-center space-y-7">
            <div className="flex h-11 w-52 items-center justify-center rounded-md bg-white text-black ">
              {/* <span onClick={decQty} className="hover:cursor-pointer"> */}
              <button className="mr-3 py-3 px-4" type="button">
                <AiOutlineMinus />
              </button>
              <span className="h-full border-x-2 border-veryDarkCyan px-6 py-2 text-black">
                6
              </span>
              {/* <span onClick={incQty} className="hover:cursor-pointer"> */}
              <button className="ml-3 py-3 px-4" type="button">
                <AiOutlinePlus />
              </button>
            </div>
            {/* add to cart button */}
            <button
              type="button"
              // onClick={() => onAdd(product, qty)}
              className="rounded-xl bg-transparent px-16 py-3 outline outline-1 outline-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <p className="py-3 text-sm">{description}</p>
      <Divider />
    </section>
  );
};

export default ProductDetails;
