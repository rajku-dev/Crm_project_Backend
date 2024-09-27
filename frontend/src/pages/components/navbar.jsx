import React from 'react';

function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-custom rounded-t-xl">
      <div className="flex justify-between items-center">
        

        {/* Navigation Links */}
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Analytics</a>
          <a href="#" className="hover:text-gray-300">Reports</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
