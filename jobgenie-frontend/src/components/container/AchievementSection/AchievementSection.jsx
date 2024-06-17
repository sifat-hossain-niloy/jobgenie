import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDelete } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";

const AchievementSection = ({achievementDetails, setAchievementDetails,downLoadButtonClicked,color}) => {
  const [achievements, setAchievements] = useState([
    { achievement: "", achievementDescription: "" },
  ]);

  useEffect(()=>{

    if(achievementDetails.length>0)
    {
      setAchievements(achievementDetails);
    }
    
  },[achievementDetails])

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      { achievement: "", achievementDescription: "" },
    ]);
  };

  const deleteAchievement = (index) => {
    const updatedAchievements = [...achievements];
    updatedAchievements.splice(index, 1);
    setAchievements(updatedAchievements);
    setAchievementDetails(updatedAchievements);
  };
  

  const handleachievementChange = (index, event) => {
    const updatedAchievements = [...achievements];
    const { name, value } = event.target;
    updatedAchievements[index][name] = value;
    setAchievements(updatedAchievements);
    setAchievementDetails(updatedAchievements);
  };

  return (
    <div style={{ color: color }}>
      <h2 className="text-3xl font-bold mb-4">Achievements</h2>
      <hr className="w-[50%]    mb-4 border-black" />
      {achievements.map((achievement, index) => (
        <div className="flex flex-col mb-8 gap-4" key={index}>
          <div className="flex items-center gap-4">
            <SlDiamond className="text-2xl" style={{ color: color }} />
            <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              name="achievement"
              value={achievement.achievement}
              onChange={(e) => handleachievementChange(index, e)}
              placeholder="What are you most proud of?"
              className="input outline-none text-2xl w-full"
            />

            <input
              type="text"
              name="achievementDescription"
              value={achievement.achievementDescription}
              onChange={(e) => handleachievementChange(index, e)}
              placeholder="Why are you proud of this achievement?"
              className="input outline-none text-2xl w-full"
            />


            </div>

            <MdOutlineDelete className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-2 text-red-800 cursor-pointer text-3xl"} onClick={()=>deleteAchievement(index)}>Delete</MdOutlineDelete>

            
            
          </div>
          <hr className="w-full border-dashed font-bold" />
        </div>
      ))}

      <button className={downLoadButtonClicked ? "overflow-hidden h-0": "mt-4 btn btn-ghost"} onClick={addAchievement}>
        Add Achievement
      </button>
    </div>
  );
};

export default AchievementSection;
