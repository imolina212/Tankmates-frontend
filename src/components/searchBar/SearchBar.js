import React from 'react'

import './SearchBar.scss'

function SearchBar({searchTerm, setSearchTerm}) {

    const updateSearchTerm = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }


    return (
        <div>
            <input 
                className="searchBar" 
                placeholder='Search by name'
                value={searchTerm}
                onChange={updateSearchTerm} />
        </div>
    )
}

export default SearchBar