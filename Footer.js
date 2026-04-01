<footer>
    <div class="container">
        <p>&copy; 2023 My Web Layout. All rights reserved.</p>
    </div>
</footer>
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container"> {/* Container for consistent padding */}
        <p>&copy; 2023 My Web Layout. All rights reserved.</p> {/* Copyright notice */}
      </div>
    </footer>
  );
}

export default Footer;