import TruncateString from '../lib/truncate';

const Blog = ({ image, title, date, body }) => {
  const dateString = new Date(date);
  return (
    <div className="border border-gray-300">
      <img className="h-60 w-full object-cover" src={image} alt={title} />
      <div className="mt-4 mb-6 space-y-1 px-4">
        <span className="text-sm opacity-60">{dateString.toDateString()}</span>
        <h1 className="text-xl">{title}</h1>
        <p className="pb-5 text-sm opacity-60">{TruncateString(body, 200)}</p>
        <span className="text-sm underline decoration-1 underline-offset-8">
          Learn More
        </span>
      </div>
    </div>
  );
};

export default Blog;
