import React from 'react'

import  './Pagenf.css';
function Pagenf() {
  return (
    <>
    <div className=' text-center mt-5' style={{ width:'100%',height:'300px'}} >
        
        <h1 style={{fontSize:'70px'}}>404</h1>
        <img className='mt-5' src='https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif'
        alt='page not found'/>
         {/* <div style={{marginTop:'300px'}}> */}
            <h1>Look Like You Lost!</h1>
            <p>The page you're looking for is not available</p>
            <button  href="/" className='btn btn-success'>Go To Home
              
            </button>
         </div>
    {/* </div> */}
    </>
  )
}

export default Pagenf