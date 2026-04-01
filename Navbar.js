<nav>
    <div class="container">
        <a href="#section1">Home</a>
        <a href="#section2">About</a>
        <a href="#section3">Services</a>
        <a href="#section4">Contact</a>
    </div>
</nav>
import React from 'react';

function Navigation() {
  return (
    <nav>
      <div className="container">
        <a href="#section1">Home</a> {/* Link papunta sa unang section */}
        <a href="#section2">About</a> {/* Link papunta sa About section */}
        <a href="#section3">Services</a> {/* Link papunta sa Services section */}
        <a href="#section4">Contact</a> {/* Link papunta sa Contact section */}
      </div>
    </nav>
  );
}

export default Navigation;