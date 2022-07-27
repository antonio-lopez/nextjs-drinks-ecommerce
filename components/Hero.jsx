const Hero = () => {
  return (
    <section className="mx-auto min-h-screen max-w-7xl">
      <div className="grid grid-cols-1 gap-y-8 px-4 pt-32 text-white">
        <h1 className="text-2xl font-bold">
          Modern Times is an intrepid cadre of brewers, coffee roasters,
          culinary wizards, creative powerhouses, and beer-slingers.
        </h1>
        <div>
          <p className="mb-10 text-sm">
            It that began as a 30bbl production brewery and tasting room in the
            Point Loma neighborhood of San Diego in 2013. Today, we&apos;re
            distributed throughout California, Arizona, Colorado, Nevada, Utah,
            Hawaii, and Texas. Since its inception, the Modern Times multiverse
            has expanded to include a robust and ever-growing barrel program,
            killer satellite brewery & tasting room locations, and restaurants
            in Anaheim and Encinitas.
          </p>
          <span className="underline decoration-1 underline-offset-8 ">
            Learn More
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
