import { allBlog } from '../data';
import Blog from './Blog';

const BlogList = () => {
  return (
    <section className="bg-white">
      {/* grid container */}
      <div className="mx-auto mt-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-8 px-6 py-10 sm:px-20 lg:grid-cols-3 lg:gap-x-8 2xl:px-0">
          {allBlog.map((blog) => {
            const { id, image, imageDesc, date, title, description } = blog;
            return (
              <Blog
                key={id}
                image={image}
                imageDesc={imageDesc}
                date={date}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
