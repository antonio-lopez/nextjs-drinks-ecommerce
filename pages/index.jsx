import { client } from '../lib/client';
import { Hero, BeerProduct, CoffeeProduct, BlogList } from '../components';

const Home = ({ coffeeProducts }) => {
  return (
    <>
      <Hero />
      {/* <BeerProduct /> */}
      <CoffeeProduct coffeeProducts={coffeeProducts} />
      {/* <BlogList /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const coffeeQuery = `*[_type == "coffee"]`;
  const coffeeProducts = await client.fetch(coffeeQuery);

  const beerQuery = `*[_type == "beer"]`;
  const beerProducts = await client.fetch(beerQuery);

  return {
    props: { coffeeProducts, beerProducts },
  };
};

export default Home;
