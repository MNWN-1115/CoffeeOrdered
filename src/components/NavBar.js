import React from 'react';

const NavBar = ({ item, handleClick }) => {
  return (
    <div className='NavBar'>
      <button onClick={() => handleClick(-1)}>Prev</button>
      <p>{item}</p>
      <button onClick={()=> handleClick(1)}>Next</button>
    </div>
  )
}

export default NavBar;