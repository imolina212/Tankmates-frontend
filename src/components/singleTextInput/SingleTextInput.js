import React from 'react'

import './SingleTextInput.scss'

function SingleTextInput({searchTerm, setSearchTerm, placeholder= "Search by name"}) {

    const updateSearchTerm = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }


    return (
        <div>
            <input 
                className="searchBar" 
                placeholder={placeholder}
                value={searchTerm}
                onChange={updateSearchTerm} />
        </div>
    )
}

export default SingleTextInput;