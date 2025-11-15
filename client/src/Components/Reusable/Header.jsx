import React from 'react';

const Header = ({ typeOfHeader }) => {
  return (
    <div className="fixed top-0 left-[18rem] w-[calc(100%-18rem)] bg-white border-b-2 p-3 h-20 flex items-center z-50 shadow-sm">
      <div className='flex justify-between items-center w-full'>
        <h2 className="text-xl font-semibold">{typeOfHeader}</h2>
        <div>
          <div className='h-[4rem] border w-[4rem] rounded-[4rem] bg-red-500'>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
