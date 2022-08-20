import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Divider from '../../components/Divider';

const Coffee = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <div className="mt-12 grid lg:grid-cols-2">
        <div className="space-y-5 place-self-center px-5 text-center text-3xl lg:px-0">
          <h1>Steady Hand Decaf</h1>
          <img
            src="../images/coffee/sm/SteadyHandDecaf_12oz_480x.webp"
            alt="beer product"
          />
        </div>
        <div className="mt-6 text-center text-sm">
          <h2 className="pb-2 text-lg">Process Style: Swiss Water Process</h2>
          <h3>Rotating Single Origin</h3>
          <Divider />
          <p className="py-2">Notes: Cherry Cobbler - Raisin - Lemon Bar</p>
          <Divider />
          <p className="pb-2">Size: 12 oz</p>
          <span>$12</span>

          <div className="my-8 flex flex-col items-center space-y-7">
            <div className="flex h-11 w-52 items-center justify-center space-x-8 rounded-md bg-white text-black ">
              {/* <span onClick={decQty} className="hover:cursor-pointer"> */}
              <button type="button">
                <AiOutlineMinus />
              </button>
              <span className="h-full border-x-2 border-veryDarkCyan px-6 py-2 text-black">
                6
              </span>
              {/* <span onClick={incQty} className="hover:cursor-pointer"> */}
              <button type="button">
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
      <p className="py-3 text-sm">
        This caffeinated gem hails from the villages of Ethiopia Guji by
        smallholder producers. These natural process beans produce a delightful
        cup with notes of plum, dried blueberries, & baker’s chocolate. In terms
        of starting your day off on the right foot, you’d be hard pressed to
        find a better one than this.
      </p>
      <Divider />
    </section>
  );
};

export default Coffee;
