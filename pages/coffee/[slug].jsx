import { ProductDetails } from '../../components';
import { client, urlFor } from '../../lib/client';

const Coffee = ({ coffee }) => {
  const {
    image,
    name,
    coffeStyle,
    price,
    size,
    coffeeDetails,
    styleDetails,
    notes,
  } = coffee;

  return (
    <ProductDetails
      image={urlFor(image[0])}
      name={name}
      style={coffeStyle}
      price={price}
      size={size}
      description={coffeeDetails}
      styleDetails={styleDetails}
      notes={notes}
    />
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "coffee"]{
    slug {
      current
    }
  }`;

  const coffeeProduct = await client.fetch(query);

  const paths = coffeeProduct.map((coffee) => ({
    params: {
      slug: coffee.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "coffee" && slug.current == '${slug}'][0]`;
  const coffee = await client.fetch(query);

  return { props: { coffee } };
};

export default Coffee;
