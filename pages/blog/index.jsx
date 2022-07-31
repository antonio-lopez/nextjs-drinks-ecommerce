/* eslint-disable react/self-closing-comp */
import React from 'react';
import { allBlog } from '../../data';

const Blog = () => {
  return (
    <section className="">
      <h1 className="text-center text-3xl text-white lg:text-5xl">Our Blog</h1>
      {/* grid container */}
      <div className="bg-white">
        <div className="mx-auto mt-10 max-w-7xl ">
          <ul className="grid grid-cols-1 gap-y-8 px-6 py-10 sm:px-20 lg:grid-cols-3 lg:gap-x-8 2xl:px-0">
            {allBlog.map((blog) => (
              <li key={blog.id}>
                <article className="border border-gray-300">
                  <img
                    className="h-60 w-full object-cover"
                    src={blog.image}
                    alt={blog.imageDesc}
                  />
                  <div className="mt-4 mb-6 space-y-1 px-4">
                    <span className="text-sm opacity-60">{blog.date}</span>
                    <h1 className="text-xl">{blog.title}</h1>
                    <p className="pb-5 text-sm opacity-60">
                      {blog.description}
                    </p>
                    <span className="text-sm underline decoration-1 underline-offset-8">
                      Learn More
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blog;
