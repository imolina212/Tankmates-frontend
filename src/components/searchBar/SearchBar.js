import React from 'react'

import './SearchBar.scss'

function SearchBar({searchTerm, setSearchTerm, placeholder= "Search by name"}) {

    const updateSearchTerm = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }

    return (
        <div className='searchBar'>
            <input 
                placeholder={placeholder}
                value={searchTerm}
                onChange={updateSearchTerm} />

        </div>
    )
}

export default SearchBar;