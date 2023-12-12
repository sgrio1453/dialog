import React from 'react'
import { SearchNormal,} from 'iconsax-react';
const SearchBar = () => {
  return (
    <form className="flex items-center bg-[#FDFDFD] p-3 space-x-3 rounded-lg border b-[#D8D8D8] w-80">
        <SearchNormal size="20" color="#ABABAB" />
        <input type="text" placeholder="Arama" className="outline-none" />
      </form>
  )
}

export default SearchBar
