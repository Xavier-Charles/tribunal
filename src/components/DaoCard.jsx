import React from 'react'
import { Link } from 'react-router-dom';

const DaoCard = ({logo, title, desc, slug}) => {
  return (
    <Link to={`/${slug}/proposals/`} className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          {logo}
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">
          {desc}
        </p>
      </div>
    </Link>
  );
}

export default DaoCard