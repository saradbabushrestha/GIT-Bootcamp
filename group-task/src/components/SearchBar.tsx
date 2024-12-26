// search bar
import React, { ChangeEvent } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by Name or Email"
        value={searchTerm}
        onChange={onSearchChange}
        className="border p-2 w-full max-w-md rounded-md mb-4"
      />
    </div>
  );
};

export default SearchBar;
