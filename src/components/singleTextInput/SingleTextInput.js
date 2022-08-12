import React from 'react'

import './SingleTextInput.scss'

function SingleTextInput({searchTerm, setSearchTerm, placeholder= "Search by name", width="93%"}) {

    const updateSearchTerm = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
    }

    const styles = {
        "width": width
    }
    return (
        <div>
            <input 
                style={styles}
                className="searchBar" 
                placeholder={placeholder}
                value={searchTerm}
                onChange={updateSearchTerm} />
        </div>
    )
}

export default SingleTextInput;