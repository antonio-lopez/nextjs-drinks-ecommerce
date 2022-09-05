/* eslint-disable react/self-closing-comp */
import { client, urlFor } from '../../lib/client';

const Blog = ({ blogs }) => {
  const { image, title, date, body } = blogs;
  return (
    <article className="mx-auto mt-10 max-w-7xl px-4 text-white lg:px-0">
      <div className="grid grid-cols-1 place-items-center space-y-10">
        <div className="text-center">
          <h1 className="mb-2 text-3xl lg:text-5xl">{title}</h1>
          <span className="text-sm opacity-70">{date}</span>
        </div>
        <img src={urlFor(image[0])} alt={title} />
        <p className="whitespace-pre-line text-sm md:text-base">{body}</p>
      </div>
      {/* divider line */}
      <div className="mt-10 py-4">
        <div className="w-full border-t border-gray-200"></div>
      </div>
    </article>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "blog"]{
    slug {
      current
    }
  }`;

  const blogPosts = await client.fetch(query);

  const paths = blogPosts.map((blog) => ({
    params: {
      slug: blog.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blogs = await client.fetch(query);

  return { props: { blogs } };
};

export default Blog;
