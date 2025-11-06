import React from 'react';

const Header = ({ typeOfHeader }) => {
    return (
        <div className='border-b-2 mb-6 w-full p-4'>
            <h2>{typeOfHeader}</h2>
        </div>
    );
};

export default Header;