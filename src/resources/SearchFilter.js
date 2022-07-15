import React, { useState } from 'react'
// import RecipesData from './HEEEEEEEEEEEEELP!'
// source: https://www.youtube.com/watch?v=x7niho285qs

function SearchFilter({placeholder, data}) {
  
  const [searchInput, setSearchInput] = useState([]);
  const handleSearch = (event) => {
    const searchEntry = event.target.value
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchEntry.toLowerCase());
    });

    if (searchEntry === '') {
      setSearchInput([])
    }else {
      setSearchInput(newFilter);
    }
  };
    
  return (
    <div className="searchbar">          
        <div className="inputSearch">          
          <input type="text" placeholder={placeholder} onChange={handleSearch}/>
        </div>
      {searchInput.length != 0 && (
      <div className="searchResult">
        {searchInput.slice(0, 10).map((value, key) => {
          return (
            <a clasName="dataItem" href={value.link}>                      
              <p>{value.title}</p>
            </a>
          );
        })}

      </div>
      )}
    </div>
  );
}

export default SearchFilter