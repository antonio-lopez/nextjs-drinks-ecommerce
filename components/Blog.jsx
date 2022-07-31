const Blog = ({ image, imageDesc, date, title, description }) => {
  return (
    <div className="border border-gray-300">
      <img className="h-60 w-full object-cover" src={image} alt={imageDesc} />
      <div className="mt-4 mb-6 space-y-1 px-4">
        <span className="text-sm opacity-60">{date}</span>
        <h1 className="text-xl">{title}</h1>
        <p className="pb-5 text-sm opacity-60">{description}</p>
        <span className="text-sm underline decoration-1 underline-offset-8">
          Learn More
        </span>
      </div>
    </div>
  );
};

export default Blog;
