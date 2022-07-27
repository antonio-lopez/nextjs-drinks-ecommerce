import { AiOutlineArrowRight } from 'react-icons/ai';

const BeerProduct = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white">
      <h1 className="mb-6 text-2xl font-bold">Our Beer</h1>
      <div className="grid grid-cols-1">
        {/* sample 1 */}
        <div className="p-5">
          <img
            src="images/beer/sm/FortunateIslands4Pack_480x.webp"
            alt="beer product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Fortunate Islands</h1>
            <span className="text-sm opacity-70">Pale Ale</span>
          </div>
        </div>
        {/* sample 2 */}
        <div className="p-5">
          <img
            src="images/beer/sm/FortunateIslands4Pack_480x.webp"
            alt="beer product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Fortunate Islands</h1>
            <span className="text-sm opacity-70">Pale Ale</span>
          </div>
        </div>
        {/* sample 3 */}
        <div className="p-5">
          <img
            src="images/beer/sm/FortunateIslands4Pack_480x.webp"
            alt="beer product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Fortunate Islands</h1>
            <span className="text-sm opacity-70">Pale Ale</span>
          </div>
        </div>
      </div>

      {/* view more link */}
      <div className="flex items-center justify-end space-x-1">
        <span>View More</span>
        <AiOutlineArrowRight className="h-6 w-6" />
      </div>
    </section>
  );
};

export default BeerProduct;
