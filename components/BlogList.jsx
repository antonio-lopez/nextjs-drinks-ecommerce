// import { allBlog } from '../data';
import Blog from './Blog';
import { urlFor } from '../lib/client';

const BlogList = ({ blogPosts }) => {
  return (
    <section className="bg-white">
      {/* grid container */}
      <div className="mx-auto mt-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-8 px-6 py-10 sm:px-20 lg:grid-cols-3 lg:gap-x-8 2xl:px-0">
          {blogPosts.map((blog) => {
            const { _id, image, title, date, body } = blog;
            return (
              <Blog
                key={_id}
                image={urlFor(image[0])}
                imageDesc={title}
                date={date}
                title={title}
                body={body}
              />
            );
          })}
          {/* {allBlog.map((blog) => {
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
          })} */}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
