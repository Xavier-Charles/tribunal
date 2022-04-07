import React from 'react'
import { Link } from 'react-router-dom';

const DaoCard = ({logo, title, desc, slug}) => {
  return (
    <Link to={`/${slug}/proposals/`} className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 hover:border-gold p-6 rounded-lg relative">
        <p className='text-xs bg-cadet text-white absolute right-7 py-0.5 px-2 rounded-lg'>Test</p>
        <img
          alt=""
          src={logo}
          className=" w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 border-0 mb-4"
        />

        <h2 className="text-lg text-gray-900 font-serif font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-gray-500 text-base">{desc}</p>
      </div>
    </Link>
  );
}

export default DaoCard