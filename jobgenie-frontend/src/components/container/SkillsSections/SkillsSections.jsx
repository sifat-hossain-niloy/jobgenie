import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaCodepen } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";



const SkillsSection
 = ({skillsDetails,setSkillsDetails,downLoadButtonClicked,color}) => {
    const [skills, setSkills] = useState([
        { skillTitle: "", skillProficiency: 50},
    ]);

    const [editingSkillIndex, setEditingSkillIndex] = useState(null);

    useEffect(()=>{

        if(skillsDetails.length>0)
        {
            setSkills(skillsDetails);
        }
        
      },[skillsDetails])

    const addSkill = () => {
        setSkills([
            ...skills,
            { skillTitle: "", skillProficiency: 50},
        ]);
    };

    const deleteSkill = (index) => {
        const updatedSkills = [...skills];
        updatedSkills.splice(index, 1);
        setSkills(updatedSkills);
        setSkillsDetails(updatedSkills);
      };

    const handleSkillChange = (index, event) => {
        const updatedSkills = [...skills];
        const { name, value } = event.target;
        updatedSkills[index][name] = value;
        setSkills(updatedSkills);
        setSkillsDetails(updatedSkills);
    };

    const handleProficiencyChange = (index, event) => {
        const updatedSkills = [...skills];
        updatedSkills[index].skillProficiency = parseInt(event.target.value, 10);
        setSkills(updatedSkills);
    };

    const finishEditing = () => {
        setEditingSkillIndex(null); // Hide the input field
    };


    return (
        <div style={{ color: color }}>
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <hr className="w-[50%]    mb-4 border-black" />
            <div className="grid grid-cols-2 gap-y-8 w-[85%]">

            {skills.map((Skill, index) =>(

                <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 w-full">
                    <FaCodepen className="text-2xl" style={{ color: color }} /> 
                    <input
                        type="text"
                        name="skillTitle"
                        value={Skill.skillTitle}
                        onChange={(e) => handleSkillChange(index, e)}
                        placeholder="Skill Title"
                        className="input outline-none text-2xl w-full"
                    />
                    </div>
                    <progress
                                className="progress w-56"
                                value={Skill.skillProficiency}
                                max="100"
                                onClick={() => setEditingSkillIndex(index)} // Open the input field when the progress bar is clicked
                            ></progress>
                {editingSkillIndex === index && (
                                <div className="flex gap-2 items-center">
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={skills[index].skillProficiency}
                                        onChange={(e) => handleProficiencyChange(index, e)}
                                        className="w-20"
                                    />
                                    <button onClick={finishEditing}>Okay</button>
                                </div>
                            )}

                            <MdOutlineDelete className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-2 text-red-800 cursor-pointer text-3xl"} onClick={()=>deleteSkill(index)}>Delete</MdOutlineDelete>
                
                </div>       
            ))}
            </div>
            

            <button className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-4 btn"} onClick={addSkill}>Add Skill</button>
        </div>
    );
};

export default SkillsSection;
