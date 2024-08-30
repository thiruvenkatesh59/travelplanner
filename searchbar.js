// SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setSearchTerm(event.target.value.toLowerCase()); // Pass the lowercase search term to the parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
