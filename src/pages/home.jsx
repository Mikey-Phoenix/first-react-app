import React, {useState, useEffect, useRef} from 'react';
import PopUp from '../components/popUp'

function Home() {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        if (show) {
            document.title = "Error"
        }
        if (inputRef2.current?.value !== "") {
            console.log(inputRef2.current?.value)
        }
    }, [show, inputRef2.current?.value])

    function check() {
        if (inputRef.current?.value == "" || inputRef1.current?.value == "" || inputRef2.current?.value == "" || inputRef3.current?.value == "") {
            setShow(true);
        } else {
            console.log("success")
        }
    }
    


    return (
        <div>
           <div className='border w-[30%] h-[500px] mt-10 mx-auto p-5'>
            {!show ? (
                // show is false
                <>
                    <input ref={inputRef} type="text" placeholder='text...' className='w-full p-2 mb-2 outline-2' />
                    <input ref={inputRef1} type="text" placeholder='text...' className='w-full p-2 mb-2 outline-2' />
                    <input ref={inputRef2} type="text" placeholder='text...' className='w-full p-2 mb-2 outline-2' />
                    <input ref={inputRef3} type="text" placeholder='text...' className='w-full p-2 mb-2 outline-2' />
                </>

            ):(
                // if show is true
                // <div>Error</div>
                <PopUp show={show} setShow={setShow} />
            )}

                <button className='border bg-blue-700 p-2' onClick={check}>Click Me</button>
           </div>
        </div>
    );
}

export default Home;