import React from 'react';
import CardPage from './cardpage';


function HomePart(){
    return(
        <>
            <img   style={{ width: "100%" , height:"100%"}}
 src='media/images/product1.jpg'></img>
    <div style={{background:"#F9F1E7"}} className='p-3'>
        <h2 className='text-center mt-3'>Browse The Range</h2>
        <p className='text-center' style={{background:"#F9F1E7"}}> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
    </div>
    <CardPage />
        </>
    )
}

export default HomePart;