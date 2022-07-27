import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-7xl">
      {/* container */}
      <div className="flex justify-between p-4">
        <img
          className="h-10 w-10"
          src="/images/logo/mt-300_100x.webp"
          alt="logo"
        />
        <BiMenuAltRight className="h-10 w-10 text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
