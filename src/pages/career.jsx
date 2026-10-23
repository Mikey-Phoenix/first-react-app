import React, { useState } from 'react';
import InputWindow from '../components/inputWindow';

function career() {
    const [value, setValue] = useState("")
    return (
        <div>
            <InputWindow setValue={setValue} />

            <div className='border w-[40%] h-20 mx-auto'>{value}</div>
        </div>
    );
}

export default career;