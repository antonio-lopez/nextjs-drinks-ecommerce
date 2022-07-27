import { AiOutlineArrowRight } from 'react-icons/ai';

const CoffeeProduct = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 text-white">
      <h1 className="mb-6 text-2xl font-bold">Our Coffee</h1>
      <div className="grid grid-cols-1">
        {/* sample 1 */}
        <div className="p-5">
          <img
            src="images/coffee/sm/SteadyHandDecaf_12oz_480x.webp"
            alt="coffee product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Steady Hand Decaf</h1>
            <span className="text-sm opacity-70">Process Styled: Natural</span>
          </div>
        </div>
        {/* sample 2 */}
        <div className="p-5">
          <img
            src="images/coffee/sm/SteadyHandDecaf_12oz_480x.webp"
            alt="coffee product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Steady Hand Decaf</h1>
            <span className="text-sm opacity-70">Process Styled: Natural</span>
          </div>
        </div>
        {/* sample 3 */}
        <div className="p-5">
          <img
            src="images/coffee/sm/SteadyHandDecaf_12oz_480x.webp"
            alt="coffee product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Steady Hand Decaf</h1>
            <span className="text-sm opacity-70">Process Styled: Natural</span>
          </div>
        </div>
        {/* sample 4 */}
        <div className="p-5">
          <img
            src="images/coffee/sm/SteadyHandDecaf_12oz_480x.webp"
            alt="coffee product"
          />
          <div className="mt-4">
            <h1 className="text-lg">Steady Hand Decaf</h1>
            <span className="text-sm opacity-70">Process Styled: Natural</span>
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

export default CoffeeProduct;
