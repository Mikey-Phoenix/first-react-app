import React, { useRef, useState } from 'react';
import Product from '../components/productItem';

function products() {
    const [source, setSource] =useState("");
    const [name, setName] =useState("");
    const [description, setDescription] =useState("");
    const [price, setPrice] =useState("");

    const [show, setShow] = useState(false)

    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    let productItemValues = {
        source: source,
        name: name,
        description: description,
        price: price
    }

    return (
        <div>
            <div className='w-[50%] mx-auto mt-5'>
                <input ref={inputRef} type="text" placeholder='Image' value={source} className='w-full p-2 mb-2 outline-2' onChange={(e) => setSource(e.currentTarget.value)} />
                <input ref={inputRef1} type="name" placeholder='name' value={name} className='w-full p-2 mb-2 outline-2' onChange={(e) => setName(e.currentTarget.value)} />
                <input ref={inputRef2} type="description" placeholder='description' value={description} className='w-full p-2 mb-2 outline-2' onChange={(e) => setDescription(e.currentTarget.value)} />
                <input ref={inputRef3} type="price" placeholder='price' value={price} className='w-full p-2 mb-2 outline-2' onChange={(e) => setPrice(e.currentTarget.value)} />

                <button className='bg-blue-700 text-white w-fit rounded-md mx-auto px-4 py-2 cursor-pointer' onClick={() => setShow(true)}>Enter</button>
            </div>
            {show && <Product item={productItemValues} />}
            
        </div>
    );
}

export default products;