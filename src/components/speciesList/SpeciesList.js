import React, { useEffect, useState } from 'react';

import SpeciesCard from '../speciesCard/SpeciesCard';
import './SpeciesList.scss'

const SpeciesList = () => {

    //hooks
    const [students, setStudents] = useState([])

    //functions
    useEffect(() =>{
        const url = 'https://tankmates-backend.herokuapp.com/species'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setStudents(data.students)
            })
    },[])

    //return or JSX

    return (
        <div className="speciesList">
            {students.map(student => {
                return ( 
                    <SpeciesCard student={student} />
                )
            })}
        </div>
    )
}

export default SpeciesList;