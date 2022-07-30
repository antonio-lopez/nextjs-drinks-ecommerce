const Blog = () => {
  return (
    <section className="bg-white">
      {/* grid container */}
      <div className="mx-auto mt-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-y-8 px-6 py-10 sm:px-20 lg:grid-cols-3 lg:gap-x-8 2xl:px-0">
          {/* sample 1 */}
          <div className="border border-gray-300">
            <img
              className="h-60 w-full object-cover"
              src="images/coffee/nathan-dumlao-zUNs99PGDg0-unsplash.jpg"
              alt="coffee product"
            />
            <div className="mt-4 mb-6 space-y-1 px-4">
              <span className="text-sm opacity-60">July 20, 2022</span>
              <h1 className="text-xl">Special Release Highlight: Pool Zone</h1>
              <p className="pb-5 text-sm opacity-60">
                The sun is currently kicking ass and taking names, but luckily,
                our resident mages of fermentation have graciously blessed us
                with a new form of IPA wizardry that will provide...
              </p>
              <span className="text-sm underline decoration-1 underline-offset-8">
                Learn More
              </span>
            </div>
          </div>
          {/* sample 1 */}
          <div className="border border-gray-300">
            <img
              className="h-60 w-full object-cover"
              src="images/coffee/nathan-dumlao-zUNs99PGDg0-unsplash.jpg"
              alt="coffee product"
            />
            <div className="mt-4 mb-6 space-y-1 px-4">
              <span className="text-sm opacity-60">July 20, 2022</span>
              <h1 className="text-xl">Special Release Highlight: Pool Zone</h1>
              <p className="pb-5 text-sm opacity-60">
                The sun is currently kicking ass and taking names, but luckily,
                our resident mages of fermentation have graciously blessed us
                with a new form of IPA wizardry that will provide...
              </p>
              <span className="text-sm underline decoration-1 underline-offset-8">
                Learn More
              </span>
            </div>
          </div>
          {/* sample 1 */}
          <div className="border border-gray-300">
            <img
              className="h-60 w-full object-cover"
              src="images/coffee/nathan-dumlao-zUNs99PGDg0-unsplash.jpg"
              alt="coffee product"
            />
            <div className="mt-4 mb-6 space-y-1 px-4">
              <span className="text-sm opacity-60">July 20, 2022</span>
              <h1 className="text-xl">Special Release Highlight: Pool Zone</h1>
              <p className="pb-5 text-sm opacity-60">
                The sun is currently kicking ass and taking names, but luckily,
                our resident mages of fermentation have graciously blessed us
                with a new form of IPA wizardry that will provide...
              </p>
              <span className="text-sm underline decoration-1 underline-offset-8">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
