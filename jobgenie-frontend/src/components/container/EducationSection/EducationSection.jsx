import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";



const EducationSection = ({educationDetails, setEducationDetails,downLoadButtonClicked,color}) => {
    const [degrees, setDegrees] = useState([
        { degree: "", institution: "", dateRange: [new Date(), new Date()] },
    ]);

    useEffect(()=>{

        if(educationDetails.length>0)
        {
            setDegrees(educationDetails);
        }
        
      },[educationDetails])

    const addDegree = () => {
        setDegrees([
            ...degrees,
            { degree: "", institution: "", dateRange: [new Date(), new Date()] },
        ]);
    };

    const deleteDegree = (index) => {
        const updatedDegree = [...degrees];
        updatedDegree.splice(index, 1);
        setDegrees(updatedDegree);
        setEducationDetails(updatedDegree);
      };

    const handleDegreeChange = (index, event) => {
        const updatedDegrees = [...degrees];
        const { name, value } = event.target;
        updatedDegrees[index][name] = value;
        setDegrees(updatedDegrees);
        setEducationDetails(updatedDegrees);
    };

    const handleDateChange = (dateRange, index) => {
        const updatedDegrees = [...degrees];
        updatedDegrees[index].dateRange = dateRange;
        setDegrees(updatedDegrees);
        setEducationDetails(updatedDegrees);
        
    };

    return (
        <div className="h-min" style={{ color: color }}>
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <hr className="w-[50%]    mb-4 border-black" />
            {degrees.map((degree, index) => (
                <div className="flex flex-col mb-8 gap-2" key={index}>
                    <div className="flex items-center gap-2">
                    <IoSchoolOutline className="text-2xl" style={{ color: color }}/>
                    <input
                        type="text"
                        name="degree"
                        value={degree.degree}
                        onChange={(e) => handleDegreeChange(index, e)}
                        placeholder="Degree and Field of Study"
                        className="input outline-none text-2xl w-full"
                    />
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <LiaSchoolSolid className="text-2xl" style={{ color: color }} />
                    <input
                        type="text"
                        name="institution"
                        value={degree.institution}
                        onChange={(e) => handleDegreeChange(index, e)}
                        placeholder="Institution"
                        className="input outline-none text-2xl w-full"
                    />
                    </div>
                    
                    <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-2xl" style={{ color: color }} />
                    <DatePicker
                        selected={degree.dateRange[0]}
                        selectsRange
                        startDate={degree.dateRange[0]}
                        endDate={degree.dateRange[1]}
                        onChange={(dateRange) => handleDateChange(dateRange, index)}
                    />
                    </div>

                    <MdOutlineDelete className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-2 text-red-800 cursor-pointer text-3xl"} onClick={()=>deleteDegree(index)}>Delete</MdOutlineDelete>
                    
                </div>
            ))}

            <button className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-4 btn btn-ghost"} onClick={addDegree}>Add Degree</button>
        </div>
    );
};

export default EducationSection;
