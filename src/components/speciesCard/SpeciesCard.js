import React from "react";

import './SpeciesCard.scss'

const SpeciesCard = ({student}) => {
    
    const {pic, firstName, lastName, email, company, skill, grades} = student;
    
    // functions

    const calculateAverage = (grades) => {
        const sum = grades.reduce((sum, val) => sum + Number(val), 0);

        return sum / grades.length;
    }
    
    
    
    return (
        <div className="speciesCard">
            <div>
                <img src={pic} />
            </div>
            <div className="speciesCard__name">
                {`${firstName}  ${lastName}`}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                Company: {company}
            </div>
            <div>
                Skill: {skill}
            </div>
            <div>
                Average: {calculateAverage(grades)}%
            </div>
        </div>
    )
}

export default SpeciesCard;