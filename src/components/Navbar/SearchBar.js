import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [InputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${InputSearch}`);
    setInputSearch("");
  };
  return (
    <form className="flex relative items-center py-1" onSubmit={submitHandler}>
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={InputSearch}
        type="text"
        placeholder="Search"
        className="rounded-full outline-none border-gray-400 w-60 p-1 border sm:w-80"
      />
      <MagnifyingGlassIcon className="h-6 absolute right-2 text-gray-500 bg-white" />
    </form>
  );
};

export default SearchBar;
