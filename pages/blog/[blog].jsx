/* eslint-disable react/self-closing-comp */
const Blog = () => {
  return (
    <article className="mx-auto mt-10 max-w-7xl px-4 text-white lg:px-0">
      <div className="grid grid-cols-1 place-items-center space-y-10">
        <div className="text-center">
          <h1 className="mb-2 text-3xl lg:text-5xl">
            Special Release Highlight: Pool Zone
          </h1>
          <span className="text-sm opacity-70">July 20, 2022</span>
        </div>
        <img
          src="../images/coffee/nathan-dumlao-zUNs99PGDg0-unsplash.jpg"
          alt="blog cover"
        />
        <p className="text-sm md:text-base">
          The sun is currently kicking ass and taking names, but luckily, our
          resident mages of fermentation have graciously blessed us with a new
          form of IPA wizardry that will provide a momentary reprieve from the
          effects of global warming. It’s a tall order, and while we love an IPA
          as much as--if not significantly more than--the next guy, sometimes a
          fully fledged, big bodied murk lord isn’t exactly what the doctor
          ordered. Enter: Pool Zone. We set out to concoct a singularly
          effervescent beverage that would provide a drinking experience akin to
          dipping that first toe into an infinity pool. Chasing the
          aforementioned high began with Golden Promise, an heirloom barley malt
          that provided a delightful, distinctive departure from our regular
          2-row base. Then we tackled the aromatic part of this equation. In
          addition to Cascade hops, we selected Citra and Mosaic for the
          dry-hop, which imparted an immense tropicality to this beer,
          juxtaposed by that snappy bitterness you’d expect from a WCIPA. Then
          the twist; we delicately imbibed this majestic liquid with carbonated
          water, whose minerality not only emphasises the hop character and
          creates a sensational mouthfeel, it also brings everything down to a
          cool 3.2% ABV and 100 calories per can.
        </p>
      </div>
      {/* divider line */}
      <div className="mt-10 py-4">
        <div className="w-full border-t border-gray-200"></div>
      </div>
    </article>
  );
};

export default Blog;
