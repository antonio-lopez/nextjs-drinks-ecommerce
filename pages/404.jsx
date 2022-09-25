import { GiCoffeeCup } from 'react-icons/gi';
import { Divider } from '../components';

const Custom404 = () => {
  return (
    <div className=" mx-auto max-w-7xl px-5 text-white md:px-0">
      <div className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center text-4xl">
        <h1>Page Not Found</h1>
        <GiCoffeeCup size={200} />
      </div>
      <Divider />
    </div>
  );
};

export default Custom404;
