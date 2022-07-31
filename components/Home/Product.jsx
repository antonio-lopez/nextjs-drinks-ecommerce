const Product = ({ image, imageDesc, title, description }) => {
  return (
    <div className="p-5">
      <img src={image} alt={imageDesc} />
      <div className="mt-4">
        <h1 className="text-lg">{title}</h1>
        <span className="text-sm opacity-70">{description}</span>
      </div>
    </div>
  );
};

export default Product;
