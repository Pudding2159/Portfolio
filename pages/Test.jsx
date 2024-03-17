import React from 'react';
import '@styles/animate_text.css'


function Test() {
  return (
    <>
      <div className = "container1">
        <p className="glitch">
          <span aria-hidden="true">Hello world</span>
          Hello world
          <span aria-hidden="true">Hello world</span>
        </p>
      </div>
    </>
  );
}

export default Test;
