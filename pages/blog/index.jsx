import { Blog } from '../../components';
import { client, urlFor } from '../../lib/client';

const AllBlog = ({ blogPosts }) => {
  return (
    <section className="">
      <h1 className="text-center text-3xl text-white lg:text-5xl">Our Blog</h1>
      {/* grid container */}
      <div className="bg-white">
        <div className="mx-auto mt-10 max-w-7xl ">
          <ul className="grid grid-cols-1 gap-y-8 px-6 py-10 sm:px-20 lg:grid-cols-3 lg:gap-x-8 2xl:px-0">
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const blogQuery = `*[_type == "blog"]`;
  const blogPosts = await client.fetch(blogQuery);

  return {
    props: { blogPosts },
  };
};

export default AllBlog;
