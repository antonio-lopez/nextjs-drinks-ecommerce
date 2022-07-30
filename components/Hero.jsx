import Link from 'next/link';

const Hero = () => {
  return (
    <section className="mx-auto min-h-screen max-w-7xl 2xl:my-40 2xl:min-h-full">
      <div className="grid grid-cols-1 gap-y-8 px-4 pt-32 text-white sm:gap-y-28 sm:px-8 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-10 lg:pt-10 2xl:px-0">
        <h1 className="text-2xl font-bold sm:text-5xl ">
          Modern Times is an intrepid cadre of brewers, coffee roasters,
          culinary wizards, creative powerhouses, and beer-slingers.
        </h1>
        <div className="lg:col-start-2 lg:row-start-2">
          <p className="mb-10 text-sm sm:text-lg">
            It that began as a 30bbl production brewery and tasting room in the
            Point Loma neighborhood of San Diego in 2013. Today, we&apos;re
            distributed throughout California, Arizona, Colorado, Nevada, Utah,
            Hawaii, and Texas. Since its inception, the Modern Times multiverse
            has expanded to include a robust and ever-growing barrel program,
            killer satellite brewery & tasting room locations, and restaurants
            in Anaheim and Encinitas.
          </p>
          <Link href="/" passHref>
            <a
              href="/link"
              className="underline decoration-1 underline-offset-8 hover:text-white/50"
            >
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
