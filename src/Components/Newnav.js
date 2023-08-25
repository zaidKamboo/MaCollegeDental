import React, { useState } from "react";
import "./Dropdown.css";
const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  return (
    <div className="dropdown-container" onMouseLeave={toggleDropdown}>
      <div
        className={`dropdown-trigger ${dropdownOpen ? "open" : ""}`}
        onMouseEnter={toggleDropdown}
      >
        Hover Me
      </div>
      {dropdownOpen && (
        <div className="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default Nav;
