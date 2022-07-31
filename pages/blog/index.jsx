import { allBlog } from '../../data';
import { Blog } from '../../components';

const AllBlog = () => {
  return (
    <section className="">
      <h1 className="text-center text-3xl text-white lg:text-5xl">Our Blog</h1>
      {/* grid container */}
      <div className="bg-white">
        <div className="mx-auto mt-10 max-w-7xl ">
          <ul className="grid grid-cols-1 gap-y-8 px-6 py-10 sm:px-20 lg:grid-cols-3 lg:gap-x-8 2xl:px-0">
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
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
