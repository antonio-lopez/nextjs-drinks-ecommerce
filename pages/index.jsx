import {
  Navbar,
  Hero,
  BeerProduct,
  CoffeeProduct,
  Blog,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BeerProduct />
      <CoffeeProduct />
      <Blog />
      <Footer />
    </>
  );
}
