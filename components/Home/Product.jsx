import Link from 'next/link';

const Product = ({ image, imageDesc, name, coffeeStyle, slug }) => {
  return (
    <div className="p-5">
      <Link href={`/coffee/${slug.current}`}>
        <img src={image} alt={imageDesc} />
      </Link>
      <div className="mt-4">
        <h1 className="text-lg">{name}</h1>
        <span className="text-sm opacity-70">{coffeeStyle}</span>
      </div>
    </div>
  );
};

export default Product;
