const About = () => {
  return (
    <section>
      <div className="mx-auto mt-12 grid max-w-7xl place-items-center gap-7 px-4 text-white lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-2xl lg:text-3xl">Modern Times Is...</h1>
          <p className="text-sm lg:text-base">
            …an intrepid cadre of brewers, coffee roasters, culinary wizards,
            creative powerhouses, and beer-slingers that began as a 30bbl
            production brewery and tasting room in the Point Loma neighborhood
            of San Diego in 2013. Today, we are distributed throughout
            California, Arizona, Colorado, Nevada, Utah, Hawaii, and Texas.
            Since its inception, the Modern Times multiverse has expanded to
            include a robust and ever-growing barrel program, killer satellite
            brewery & tasting room locations, and restaurants in Anaheim and
            Encinitas.
            <br />
            <br />
            Our current spots include: The mothership brewery and coffee
            roastery in Point Loma, a tasting room in San Diego’s North Park
            neighborhood, a restaurant/tasting room in Encinitas, and a
            brewery/restaurant/cafe/swim-club megaplex in downtown Anaheim. No,
            we’re not kidding about the swim-club part.
            <br />
            <br />
            Modern Times Coffee has also gone full-on bananas in the last few
            years, evolving from a tiny one-person operation to the
            critically-lauded roasting and cafe program it is today. We
            obsessively source and roast single-origins, various direct trade
            beans, innovative blends, barrel aged beans, and canned cold brew
            roasted by our team of coffee ninjas on a beautiful 15-kilo Giesen
            roaster. You can sample these caffeinated gems at our tasting rooms,
            the Invigatorium cafe in San Diego’s East Village and discriminating
            coffee purveyors all over our distro areas. Our coffee is also
            readily available online and can be shipped right to your door--you
            can even sign up for a coffee subscription.
            <br />
            <br />
            We brewed our first batch on May 18th, 2013; our beer went on tap
            for the first time on June 24th 2013; and we held the soft opening
            for the Lomaland Fermentorium tasting room on August 9th, 2013; and
            our Grand Opening was September 7th, 2013. As of 2017, we became
            California’s very first employee-owned brewery, which is a fact
            we’re particularly proud of.
          </p>
        </div>
        <div>
          <img src="/images/about/nate02.jpeg" alt="about 1" />
        </div>
      </div>

      <div className="mt-12 bg-white">
        <div className="mx-auto grid max-w-7xl place-items-center gap-4 px-4 py-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-2xl lg:text-3xl">Modern Times Was...</h1>
            <p className="text-sm lg:text-base">
              “Modern Times” was a utopian community built on Long Island in
              1850 by a bunch of wild-eyed wingnuts who thought they could
              demonstrate to the world what a more perfect society might look
              like. They bartered, lived without a state, sometimes ignored the
              conventions of marriage (although probably not in the super hot
              way you’re imagining), and generally experimented with creating a
              less exploitative, more pleasurable world. Naturally, the whole
              thing eventually imploded when legit nut jobs from New York City
              found out about the “free love colony” just a train ride away and
              overran it. It’s now Brentwood, NY.
              <br />
              <br />
              The brewery was named after Modern Times because of a fascination
              with the colorful, ambitious little pockets of history that
              develop in the folds of progress. It is in these forgotten little
              paradises that barely register in the onward rush of civilization,
              we create pause, connect, converse, and grow. Through expansion,
              experimentation, highs, lows, reckonings, education, and
              adaptation, we hope Modern Times Beer will continue to evolve in
              this spirit of ingenuity, chill vibes, and community.
              <br />
              <br />
              Our beers are often named after real utopian experiments and
              mythological utopias, plus there is a healthy amount of random
              brain nuggets & fantastical inside jokes from the astoundingly
              creative and talented minds of the people who work here.
            </p>
          </div>
          <div className="lg:row-start-1">
            <img src="/images/about/long_island_house.jpg" alt="about 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
