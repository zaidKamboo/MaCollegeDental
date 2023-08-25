// import React, { useState } from "react";
// import "./NestedDropdown.css"; // Import your CSS file for styling

// const NestedDropdown = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleNestedDropdown = () => {
//     setNestedDropdownOpen(!nestedDropdownOpen);
//   };

//   return (
//     <div className="nested-dropdown-container">
//       <div
//         className={`dropdown-trigger ${dropdownOpen ? "open" : ""}`}
//         onMouseEnter={toggleDropdown}
//         onMouseLeave={toggleDropdown}
//       >
//         Hover Me
//       </div>
//       {dropdownOpen && (
//         <div className="dropdown-content">
//           <a href="#">Option 1</a>
//           <a
//             href="#"
//             className="nested-dropdown-trigger"
//             onMouseEnter={toggleNestedDropdown}
//             onMouseLeave={toggleNestedDropdown}
//           >
//             Nested Dropdown
//           </a>
//           {nestedDropdownOpen && (
//             <div className="nested-dropdown-content">
//               <a href="#">Nested Option 1</a>
//               <a href="#">Nested Option 2</a>
//             </div>
//           )}
//           <a href="#">Option 3</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NestedDropdown;
