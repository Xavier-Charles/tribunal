import React from 'react'

const Tag = ({text, bg}) => {
  return (
    <p className={`text-xs text-white absolute right-7 pt-0.5 pb-[3px] px-2 rounded-lg ${bg}`}>
      {text}
    </p>
  );
}

export default Tag