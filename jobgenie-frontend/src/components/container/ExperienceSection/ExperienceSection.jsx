import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const ExperienceSection = ({experienceDetails, setExperienceDetails,downLoadButtonClicked,color}) => {
  const [experiences, setExperiences] = useState([
    {
      experienceTitle: "",
      companyName: "",
      dateRange: [new Date(), new Date()],
      location: "",
    },
  ]);

  useEffect(()=>{
    if(experienceDetails.length>0)
    {
        setExperiences(experienceDetails);
    }
    
  },[])

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        experienceTitle: "",
        companyName: "",
        dateRange: [new Date(), new Date()],
        location: "",
      },
    ]);
    
  };


  const deleteExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
    setExperienceDetails(updatedExperiences);
  };

  const handleExperienceChange = (index, event) => {
    const updatedExperiences = [...experiences];
    const { name, value } = event.target;
    updatedExperiences[index][name] = value;
    setExperiences(updatedExperiences);
    setExperienceDetails(updatedExperiences);
  };

  const handleDateChange = (dateRange, index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].dateRange = dateRange;
    setExperiences(updatedExperiences);
  };

  return (
    <div style={{ color: color }}>
      <h2 className="text-3xl font-bold mb-4">Experiences</h2>
      <hr className="w-[50%] mb-4 border-black" />
      <div>
        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
          {experiences.map((experience, index) => (
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={`timeline-end space-y-4 mb-10`}>
                <time className="font-mono italic">
                  <div className="flex items-center gap-2 ">
                    <FaRegCalendarAlt className="text-2xl" style={{ color: color }} />
                    <DatePicker
                      selected={experience.dateRange[0]}
                      selectsRange
                      startDate={experience.dateRange[0]}
                      endDate={experience.dateRange[1]}
                      onChange={(dateRange) =>
                        handleDateChange(dateRange, index)
                      }
                    />
                  </div>
                </time>
                <div className="text-lg font-black">
                  <input
                    type="text"
                    name="experienceTitle"
                    value={experience.experienceTitle}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Title"
                    className="input outline-none text-2xl flex justify-start"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LuFactory className="text-4xl " style={{ color: color }}/>
                  <input
                    type="text"
                    name="companyName"
                    value={experience.companyName}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Company Name"
                    className="input outline-none text-2xl w-full"
                  />
                  <div className="flex items-center gap-2 w-full">
                    <CiLocationOn className="text-2xl" style={{ color: color }} />
                    <input
                      type="text"
                      name="location"
                      value={experience.location}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Location"
                      className="input outline-none text-2xl w-full"
                    />
                  </div>
                </div>
                <MdOutlineDelete  className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-2 text-red-800 text-3xl cursor-pointer"} onClick={()=>deleteExperience(index)}>Delete</MdOutlineDelete>
              </div>
              <hr />
              
            </li>
            
          ))}
        </ul>
        
      </div>

      <button className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-4 btn btn-ghost"} onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceSection;
