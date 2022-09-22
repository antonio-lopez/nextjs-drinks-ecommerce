import { ProductDetails } from '../../components';
import { client, urlFor } from '../../lib/client';

const Beer = ({ beer }) => {
  const {
    image,
    name,
    beerStyle,
    price,
    quantity,
    beerDetails,
    styleDetails,
    notes,
  } = beer;

  return (
    <ProductDetails
      image={urlFor(image[0])}
      name={name}
      style={beerStyle}
      price={price}
      size={quantity}
      description={beerDetails}
      styleDetails={styleDetails}
      notes={notes}
      product={beer}
    />
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "beer"]{
    slug {
      current
    }
  }`;

  const beerProduct = await client.fetch(query);

  const paths = beerProduct.map((beer) => ({
    params: {
      slug: beer.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "beer" && slug.current == '${slug}'][0]`;
  const beer = await client.fetch(query);

  return { props: { beer } };
};

export default Beer;
