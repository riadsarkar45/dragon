import React from 'react';

const Header = ({ typeOfHeader }) => {
  return (
    <div className="fixed top-0 left-[18rem] w-[79%] m-auto bg-white border-b-2 p-3 z-50 shadow-sm">
      <h2 className="text-xl font-semibold">{typeOfHeader}</h2>
    </div>
  );
};

export default Header;
