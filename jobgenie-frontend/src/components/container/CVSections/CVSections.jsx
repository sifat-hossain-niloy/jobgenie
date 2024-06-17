import React, { useEffect, useState } from "react";
import EducationSection from "../EducationSection/EducationSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import SkillsSection from "../SkillsSections/SkillsSections";
import ContactSection from "../ContactSection/ContactSection";
import AchievementSection from "../AchievementSection/AchievementSection";
import DraggableSections from "../DraggableSections/DraggableSections";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';
import Swal from "sweetalert2";
import ColorPicker from 'coloreact';


const CVSections = () => {

  const printRef = React.useRef();
  const [downLoadButtonClicked, setDownloadButtonClicked] = useState(false);
  const [color, setColor] = useState('#000000');


  const handleDownloadPdf = async () => {
    await setDownloadButtonClicked(true);
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
    setDownloadButtonClicked(false);
  };
  
  const [sectionArray, setSectionArray] = useState([]);
  const [sectionButtonArray, setSectionButtonArray] = useState([
    "Experience",
    "Education",
    "Skills",
    "Achievement",
    "Contact",
  ]);

  const [experienceDetails, setExperienceDetails] = useState([]);
  const [skillsDetails, setSkillsDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [achievementDetails, setAchievementDetails] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    let templateData = localStorage.getItem("template");
    templateData = JSON.parse(templateData);
    if(templateData)
      {
        let templateDataKey = templateData.map((key) => key.section);
    setSectionArray(templateDataKey);
    console.log(templateDataKey);
    templateData.map((key) => metaTemplateSet[key.section](key.sectionDetails));
    let remainingButtons = sectionButtonArray.filter(
      (item) => !templateDataKey.includes(item)
    );
    setSectionButtonArray(remainingButtons);

      }
    
  }, []);
  const metaTemplate = {
    Experience: experienceDetails,
    Education: educationDetails,
    Skills: skillsDetails,
    Achievement: achievementDetails,
    Contact: contactDetails,
  };

  const metaTemplateSet = {
    Experience: setExperienceDetails,
    Skills: setSkillsDetails,
    Education: setEducationDetails,
    Achievement: setAchievementDetails,
    Contact: setContactDetails,
  };

  const sectionsObject = {
    Experience: (
      <ExperienceSection
        experienceDetails={experienceDetails}
        setExperienceDetails={setExperienceDetails}
        downLoadButtonClicked={downLoadButtonClicked}
        color={color}
      ></ExperienceSection>
    ),
    Education: <EducationSection educationDetails={educationDetails} setEducationDetails={setEducationDetails} downLoadButtonClicked={downLoadButtonClicked} color={color}>
      
    </EducationSection>,
    Skills: (
      <SkillsSection
        skillsDetails={skillsDetails}
        setSkillsDetails={setSkillsDetails}
        downLoadButtonClicked={downLoadButtonClicked}
        color={color}
      ></SkillsSection>
    ),
    Achievement: <AchievementSection achievementDetails={achievementDetails} setAchievementDetails={setAchievementDetails} downLoadButtonClicked={downLoadButtonClicked}
    color={color}>

    </AchievementSection>,
    Contact: <ContactSection contactDetails={contactDetails}
        setContactDetails={setContactDetails}
        color={color}
        ></ContactSection>
  };

  const handleAddNewSection = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleRearrangeSection = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const handleClickOnSection = (e) => {
    const sectionName = e.target.name;
    console.log(sectionName);
    setSectionArray([...sectionArray, sectionName]);

    const index = sectionButtonArray.indexOf(sectionName);

    const x = sectionButtonArray.splice(index, 1);

    setSectionButtonArray(sectionButtonArray);
  };

  const handleRemoveSection = (sectionName) => {
    setSectionArray(sectionArray.filter(section => section !== sectionName));
    setSectionButtonArray([...sectionButtonArray, sectionName]);
  };

  const handleSaveTemplate = () => {
    let array = sectionArray.map((section) => {
      return { section: section, sectionDetails: metaTemplate[section] };
    });
    localStorage.setItem("template", JSON.stringify(array));
    Swal.fire({
      title: "Nice!",
      text: "Your CV is saved!",
      icon: "success"
    });
  };

  return (
    <div className="flex gap-4">
    <div className="drawer min-h-full w-[300px] lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side min-h-full">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu px-4 py-12 w-80 min-h-full bg-base-200 text-base-content space-y-4">
      {/* Sidebar content here */}
      <li>
      <button className="btn btn-neutral" onClick={handleAddNewSection}>
        Add New Section
      </button>
      </li>
      <li>
      <button className="btn btn-neutral" onClick={handleRearrangeSection}>
        Rearrange the sections
      </button>
      </li>

      <li>
        
          <div className="flex justify-between items-center btn-neutral btn"><label for="hs-color-input" class="block text-sm font-medium mb-2">Change the colour</label>
          <input type="color" class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none " id="hs-color-input" value="#2563eb" title="Choose your color" onChange={(e)=>setColor(e.target.value)}/></div>
      </li>


      <li>
      <button className="btn btn-neutral" onClick={handleSaveTemplate}>
        Save your work
      </button>
      </li>
      <li>
      <button className="btn btn-neutral" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
      </li>

    </ul>
  
  </div>
    </div>
    <div className="divider lg:divider-horizontal ml-4 font-black p-2"></div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          {sectionButtonArray.length>0 ? <p className="py-4">
            Press on specific section to add or click the button below to close
          </p>: <p className="py-4">
            You have added all the sections.
          </p>}
          

          {sectionButtonArray.map((sectionButton) => (
            <button
              className="btn mr-2"
              name={sectionButton}
              onClick={handleClickOnSection}
            >
              {sectionButton}
            </button>
          ))}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div ref={printRef} className="grid grid-cols-2 gap-8 p-8 w-[80%] mx-auto">
        {sectionArray.map((section) => {
          return <div className="justify-between   ">{sectionsObject[section]}
          <button className={downLoadButtonClicked ? "overflow-hidden h-0": "btn btn-danger mt-2"} onClick={() => handleRemoveSection(section)}>Remove {section} Section</button>
          </div> 

            
        })}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Rearrange the sections!</h3>
            <DndProvider backend={HTML5Backend}>
              <DraggableSections
                sectionArray={sectionArray}
                setSectionArray={setSectionArray}
              ></DraggableSections>
            </DndProvider>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
      </div>
      </div>
  );
};

export default CVSections;
