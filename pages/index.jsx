import { client } from '../lib/client';
import { Hero, BeerProduct, CoffeeProduct, BlogList } from '../components';

const Home = ({ coffeeProducts, beerProducts, blogPosts }) => {
  return (
    <>
      <Hero />
      <BeerProduct beerProducts={beerProducts} />
      <CoffeeProduct coffeeProducts={coffeeProducts} />
      <BlogList blogPosts={blogPosts} />
    </>
  );
};

export const getServerSideProps = async () => {
  const coffeeQuery = `*[_type == "coffee"]`;
  const coffeeProducts = await client.fetch(coffeeQuery);

  const beerQuery = `*[_type == "beer"]`;
  const beerProducts = await client.fetch(beerQuery);

  const blogQuery = `*[_type == "blog"]`;
  const blogPosts = await client.fetch(blogQuery);

  return {
    props: { coffeeProducts, beerProducts, blogPosts },
  };
};

export default Home;
