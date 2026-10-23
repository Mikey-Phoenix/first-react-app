import React from 'react';

function inputWindow({ setValue }) {
    return (
        <div className='w-[50%] mx-auto mt-10'>
            <input type="text" placeholder='text...' className='w-full p-2 mb-2 border' onInput={(e) => setValue(e.currentTarget.value)} />
        </div>
    );
}

export default inputWindow;