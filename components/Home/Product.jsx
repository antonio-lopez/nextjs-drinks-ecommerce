import Link from 'next/link';

const Product = ({ image, imageDesc, name, style, slug, product }) => {
  return (
    <div className="p-5">
      <Link href={`/${product}/${slug.current}`} passHref>
        <a href="/link">
          <img src={image} alt={imageDesc} />
        </a>
      </Link>
      <div className="mt-4">
        <h1 className="text-lg">{name}</h1>
        <span className="text-sm opacity-70">{style}</span>
      </div>
    </div>
  );
};

export default Product;
