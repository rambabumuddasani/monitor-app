import React, { useState } from 'react';
import '../App.css'

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
