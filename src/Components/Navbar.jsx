import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      <li>
          <Link to="/main">Pokemon List</Link>
        </li>
        
        </ul>
      </div>
    </div>
  )
}

export default Navbar