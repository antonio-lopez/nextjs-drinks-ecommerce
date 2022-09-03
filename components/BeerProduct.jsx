// import { beerProduct } from '../data';
import { urlFor } from '../lib/client';
import Product from './Home/Product';
import ViewMore from './ViewMore';

const BeerProduct = ({ beerProducts }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white sm:px-8 2xl:px-0">
      <h1 className="mb-6 text-2xl font-bold sm:text-4xl">Our Beer</h1>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-3">
        {beerProducts.map((beer) => {
          const { id, name, image, beerStyle, slug } = beer;

          return (
            <Product
              key={id}
              image={urlFor(image[0])}
              imageDesc={name}
              name={name}
              style={beerStyle}
              slug={slug}
              product="beer"
            />
          );
        })}
      </div>

      {/* view more btn link */}
      <ViewMore />
    </section>
  );
};

export default BeerProduct;
