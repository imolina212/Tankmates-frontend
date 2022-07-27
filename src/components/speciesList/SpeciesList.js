import React, { useEffect, useState } from 'react';

const SpeciesList = () => {

    //hooks
    const [species, setSpecies] = useState([])

    //functions
    useEffect(() =>{
        const url = 'http://localhost:9000/species'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSpecies(data.species)
            })
    },[])

    //return or JSX

    return (
        <div>
            SpeciesList
        </div>
    )
}

export default SpeciesList;