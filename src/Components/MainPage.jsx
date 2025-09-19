import React from 'react';
import Vulnerable from "./Vulnerable";

function MainPage (){
    return(
<div className='page'>
      <h1>hi</h1>
      <h2>Welcome to my Pokemon app</h2>
      <h3>Go to Pokemon List and click on an image to get started</h3>
      <h1>hi</h1>
      <Vulnerable userInput={'<img src=x onerror=alert("XSS")>'} />
    </div>  
    )
}

export default MainPage