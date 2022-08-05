import React, { useEffect, useState } from 'react';
import { useParams , useLocation } from 'react-router-dom';

import SpeciesCard from '../components/speciesCard/SpeciesCard';
// import SpeciesForm from '../components/speciesForm/SpeciesForm';

function SpeciesDetailPage(props) {

    let params = useParams();
    const location = useLocation();
    const [student, setStudent] = useState({});
    console.log('params', params)
    console.log('location =>',location);
    
    
    const speciesId = params.id;

    useEffect(() => {
        if(location.state?.student){
            setStudent(location.state?.student)
        } else {

            const singlesSpeciesURL = `https://tankmates-backend.herokuapp.com/species/${speciesId}`; 
            
            fetch(singlesSpeciesURL)
                .then(response => response.json())
                .then(data => data)
        }
    },[]);


    // with the species Id , we can fetch student info
    // from API

    return (
        <div className="studentDetailPage">
            {Object.keys(student).length > 0 && <SpeciesCard student={student} showDelete />}
        </div>
    );
}

export default SpeciesDetailPage