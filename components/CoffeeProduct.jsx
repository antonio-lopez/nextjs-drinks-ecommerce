import { urlFor } from '../lib/client';
import Product from './Home/Product';
import ViewMore from './ViewMore';

const CoffeeProduct = ({ coffeeProducts }) => {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 text-white sm:px-8 2xl:px-0">
      <h1 className="text-2xl font-bold sm:text-4xl">Our Coffee</h1>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:pt-20">
        {coffeeProducts.map((coffee) => {
          const { id, name, image, coffeStyle, slug } = coffee;

          return (
            <Product
              key={id}
              image={urlFor(image[0])}
              imageDesc={name}
              name={name}
              coffeeStyle={coffeStyle}
              slug={slug}
            />
          );
        })}
      </div>

      {/* view more btn link */}
      <ViewMore />
    </section>
  );
};

export default CoffeeProduct;
