import React, { useEffect, useState } from 'react';

import SearchBar from '../searchBar/SearchBar';
import SpeciesCard from '../speciesCard/SpeciesCard';
import './SpeciesList.scss'
import '../searchBar/SearchBar'

const SpeciesList = () => {

    //hooks
    const [species, setSpecies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    //functions
    useEffect(() =>{
        const url = 'https://tankmates-backend.herokuapp.com/species'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setSpecies(data.students)
            })
    },[])


    let filteredSpecies = species;
    
    if(searchTerm){
        filteredSpecies = species.filter(specie => {
            const fullName = `${specie.firstName} ${specie.lastName}`;

            const fullNameToLowerCase = fullName.toLowerCase();

            const searchTermToLowerCase = searchTerm.toLowerCase();

            return fullNameToLowerCase.includes(searchTermToLowerCase)
        })
    }


    //return or JSX

    return (
        <div className="speciesList">
            <SearchBar className="searchbar" searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {filteredSpecies.map((specie) => {
                return ( 
                    <SpeciesCard student={specie} key={specie.id} />
                )
            })}
            {filteredSpecies.length === 0 && <div className="speciesList__noResults">No Results </div>}
        </div>
    )
}

export default SpeciesList;