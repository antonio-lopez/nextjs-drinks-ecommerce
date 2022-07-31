/* eslint-disable react/self-closing-comp */
import React from 'react';
// import Link from 'next/link';
import { allCoffee } from '../../data';

const Coffee = () => {
  return (
    <section className="mx-auto max-w-7xl text-white">
      <div className="mt-10 px-4 lg:px-10">
        <h1 className="text-center text-3xl lg:text-5xl">Our Coffee</h1>
        <ul className="mt-10 grid grid-cols-2 place-items-center gap-8 lg:grid-cols-3 lg:gap-16">
          {allCoffee.map((item) => (
            <li className="group relative" key={item.id}>
              {/* <Link href={`/amiibo/amiiboseries/${item.name}`}>
                <a>{item.name}</a>
              </Link> */}
              <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/70 text-center group-hover:flex lg:hidden">
                <h1 className="text-xl lg:text-3xl">{item.title}</h1>
                <p className="text-xs lg:text-base">{item.description}</p>
              </div>
              <img className="" src={item.image} alt={item.imageDesc} />
            </li>
          ))}
        </ul>

        {/* divider line */}
        <div className="mt-10 py-4">
          <div className="w-full border-t border-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;
