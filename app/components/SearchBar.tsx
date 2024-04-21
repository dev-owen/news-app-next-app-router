'use client';

import React, {useTransition} from 'react';
import {SearchIcon} from "@/app/components/ui/icons";
import {Input} from "@/app/components/ui/input";
import {Button2} from "@/app/components/ui/button2";

const SearchBar = ({searchQuery, setSearchQuery}: any) => {
  const [isSearching, startTransition] = useTransition();

  const handleSearch = () => {
    startTransition(() => {
      console.log("Searching for:", searchQuery);
    });
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          className="rounded-md border border-gray-300 bg-white py-2 pl-10 pr-12 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          placeholder="Search for anything..."
          type="search"/>
      </div>
      <Button2
        className="ml-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </Button2>
    </>
  );
};

export default SearchBar;
