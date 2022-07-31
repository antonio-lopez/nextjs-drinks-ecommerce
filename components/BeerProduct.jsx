import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { beerProduct } from '../data';

const BeerProduct = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-white sm:px-8 2xl:px-0">
      <h1 className="mb-6 text-2xl font-bold sm:text-4xl">Our Beer</h1>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-3">
        {beerProduct.map((beer) => {
          return (
            <div className="p-5" key={beer.id}>
              <img src={beer.image} alt={beer.imageDesc} />
              <div className="mt-4">
                <h1 className="text-lg">{beer.title}</h1>
                <span className="text-sm opacity-70">{beer.description}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* view more link */}
      <div className="flex items-center justify-end space-x-1">
        <Link href="/beer" passHref>
          <a className="hover:text-white/70" href="/beer">
            View More
          </a>
        </Link>
        <AiOutlineArrowRight className="h-6 w-6" />
      </div>
    </section>
  );
};

export default BeerProduct;
