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
            <div className="speciesCard_profilePic">
                <img src={pic} />
            </div>
            <div className="speciesCard__info">
                <div className="speciesCard__name">
                    {`${firstName}  ${lastName}`}
                </div>
                <div className="speciesCard__infoLine">
                    Email: {email}
                </div>
                <div className="speciesCard__infoLine">
                    Company: {company}
                </div>
                <div className="speciesCard__infoLine">
                    Skill: {skill}
                </div>
                <div className="speciesCard__infoLine">
                    Average: {calculateAverage(grades)}%
                </div>
            </div>
        </div>
    )
}

export default SpeciesCard;