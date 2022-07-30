import { AiOutlineArrowRight } from 'react-icons/ai';
import { coffeeProduct } from '../data';

const CoffeeProduct = () => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 text-white sm:px-8 2xl:px-0">
      <h1 className="mb-6 text-2xl font-bold sm:text-4xl">Our Coffee</h1>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
        {coffeeProduct.map((coffee) => {
          return (
            <div className="p-5 sm:even:mt-20 lg:p-20" key={coffee.id}>
              <img src={coffee.image} alt={coffee.imageDesc} />
              <div className="mt-4">
                <h1 className="text-lg">{coffee.title}</h1>
                <span className="text-sm opacity-70">{coffee.description}</span>
              </div>
            </div>
          );
        })}
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
