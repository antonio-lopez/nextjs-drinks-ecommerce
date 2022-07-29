import Link from 'next/link';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-7xl">
      {/* mobile container */}
      <div className="flex justify-between p-4 sm:p-8">
        <Link href="/" passHref>
          <a href="home">
            <img
              className="h-10 w-10"
              src="/images/logo/mt-300_100x.webp"
              alt="logo"
            />
          </a>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="lg:hidded"
        >
          <BiMenuAltRight
            className="h-10 w-10 text-white"
            alt="open mobile menu"
          />
        </button>

        {/* mobile menu */}
        <div
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } absolute top-0 left-0 right-0 z-20 min-h-screen w-full bg-white px-4 transition-all duration-1000`}
        >
          {/* mobile menu close icon */}
          <div className="mt-5 flex min-h-screen w-full flex-col space-y-10">
            <div className="flex justify-between">
              <img
                className="h-10 w-10"
                src="/images/logo/mt-300_100x.webp"
                alt="logo"
              />
              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className=" self-end lg:hidden"
              >
                <AiOutlineClose className="h-10 w-10" alt="close menu" />
              </button>
            </div>

            {/* mobile links */}
            <ul className="ml-4 space-y-4 text-center text-xl">
              {navLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href="/" passHref>
                      <a href="link">{link.navLink}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
