import React from 'react';

function popUp({ show, setShow }) {
    return (
        <div className='w-[50%] h-[50%] bg-red-700' >
            <p className='w-10 h-10 bg-blue-300 text-white flex items-center justify-center text-2xl float-right cursor-pointer' onClick={() => setShow(!show)}>x</p>
        </div>
    );
}


export default popUp;