import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Divider from '../../components/Divider';

const Beer = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <div className="mt-12 grid lg:grid-cols-2">
        <div className="space-y-5 place-self-center px-5 text-center text-4xl lg:px-0">
          <h1>Fortunate Islands</h1>
          <img
            src="../images/beer/sm/FortunateIslands4Pack_480x.webp"
            alt="beer product"
          />
        </div>
        <div className="mt-6 text-center text-sm">
          <h2 className="pb-2 text-lg">Beer Style: Hoppy Pale Ale</h2>
          <h3>5.0% ABV • 16 FL OZ</h3>
          <Divider />
          <p className="py-2">Notes: Mango - Tangerine - Passionfruit</p>
          <Divider />
          <p className="pb-2">Quantity : 4 Pack</p>
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

export default Beer;
