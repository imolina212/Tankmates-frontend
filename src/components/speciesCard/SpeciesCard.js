import React, {useState} from "react";
import { Link } from "react-router-dom";

import './SpeciesCard.scss'
import { FaPlus, FaMinus } from 'react-icons/fa';
import SingleTextInput from "../singleTextInput/SingleTextInput";

const SpeciesCard = ({student}) => {
    
    // props deconstructed
    const {pic, firstName, lastName, email, company, skill, grades} = student;
    
    //hooks

    const [showGrades, setShowGrades] = useState(false);
    const [tags, setTags] = useState(['new tag']);

    // functions

    const calculateAverage = (grades) => {

        let sum = 0;
        
        grades.map((grade )=> {
            sum += Number(grade);
        });

        return sum / grades.length;
    }
    
    const toggleGrades = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShowGrades(!showGrades);
    }
    
    
    return (
        <div className="speciesCard">
            <Link to={`/species/${student.id}`} state={{ student: student }}>
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
                                <div key={index}><span>Test {index+1}: </span><span>{grade}%</span></div>
                            )
                        })}
                    </div>
                </div>
                <div className="speciesCard__toggleIcons">
                        {!showGrades && <FaPlus className="speciesCard__toggleIcon" onClick={(e) => toggleGrades(true)} size="1.8em" />}
                        {showGrades && <FaMinus className="speciesCard__toggleIcon" onClick={(e) => toggleGrades(false)} size="1.8em" />}
                </div>
            </Link>
            <div className="speciesCard__tagCollection">
                <div className="speciesCard__tags">
                    <span className="speciesCard__tag">{tags[0]}</span>
                    
                </div>
                <div className="speciesCard__tagInput">
                    <SingleTextInput width="26%" placeholder="Add a tag" />
                </div>
            </div>
        </div>
    )
}

export default SpeciesCard;