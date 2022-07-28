import React, {useState} from "react";

import './SpeciesCard.scss'
import { FaPlus, FaMinus } from 'react-icons/fa';

const SpeciesCard = ({student}) => {
    
    // props deconstructed
    const {pic, firstName, lastName, email, company, skill, grades} = student;
    
    //hooks

    const [showGrades, setShowGrades] = useState(false);
    console.log(showGrades)

    // functions

    const calculateAverage = (grades) => {
        const sum = grades.reduce((sum, val) => sum + Number(val), 0);

        return sum / grades.length;
    }
    
    
    
    return (
        <div className="speciesCard">
            <div className="speciesCard__profilePic">
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
                <div className="speciesCard__gradesList" style={{"display": showGrades ? "block" : "none"}}>
                    {grades.map((grade, index) => {
                        return(
                            <div><span>Test {index+1}: </span><span>{grade}%</span></div>
                        )
                    })}
                </div>
            </div>
            <div className="speciesCard__toggleIcons">
                    {!showGrades && <FaPlus className="speciesCard__toggleIcon" onClick={() => setShowGrades(true)} size="1.8em" />}
                    {showGrades && <FaMinus className="speciesCard__toggleIcon" onClick={() => setShowGrades(false)} size="1.8em" />}
            </div>
        </div>
    )
}

export default SpeciesCard;