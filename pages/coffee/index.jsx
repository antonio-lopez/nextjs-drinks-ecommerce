/* eslint-disable react/self-closing-comp */
import Link from 'next/link';
import { client, urlFor } from '../../lib/client';

const AllCoffee = ({ coffeeProducts }) => {
  return (
    <section className="mx-auto max-w-7xl text-white">
      <div className="mt-10 px-4 lg:px-10">
        <h1 className="text-center text-3xl lg:text-5xl">Our Coffee</h1>
        <ul className="mt-10 grid grid-cols-2 place-items-center gap-8 lg:grid-cols-3 lg:gap-16">
          {coffeeProducts.map((coffee) => {
            const { id, name, image, coffeStyle, slug } = coffee;

            return (
              <li className="group relative" key={id}>
                <Link href={`/coffee/${slug.current}`}>
                  <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/70 text-center group-hover:flex lg:hidden">
                    <h1 className="text-xl lg:text-3xl">{name}</h1>
                    <p className="text-xs lg:text-base">{coffeStyle}</p>
                  </div>
                </Link>
                <img src={urlFor(image[0])} alt={name} />
              </li>
            );
          })}
        </ul>

        {/* divider line */}
        <div className="mt-10 py-4">
          <div className="w-full border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const coffeeQuery = `*[_type == "coffee"]`;
  const coffeeProducts = await client.fetch(coffeeQuery);

  return {
    props: { coffeeProducts },
  };
};

export default AllCoffee;
