import React from 'react';
import img3 from './img3.svg'

const Error = () => {
    return (
         <div>
            <h1 className="text-center mt-5">
                Sorry
            </h1>
            <div className="d-flex justify-content-center align-items-center m-3 p-5">
                <img style={{width:"60%"}} src={img3} alt="" />
            </div>
         </div>
    );
};

export default Error;