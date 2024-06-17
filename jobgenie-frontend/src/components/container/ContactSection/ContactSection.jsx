import React, { useEffect, useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail,MdLocationOn  } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";               

const ContactSection = ({contactDetails, setContactDetails,color}) => {
  const [contact, setContact] = useState([{ name: "", designation: "", phone: "", email: "", address: "", linkedIn: "" }]);

  useEffect(()=>{

    if(contactDetails.length>0)
    {
      setContact(contactDetails);
    }
    
  },[])

  const handleContactChange = (event) => {

    const updatedContact = [...contact];
        const { name, value } = event.target;
        updatedContact[0][name] = value;
        setContact(updatedContact);
        setContactDetails(updatedContact);
};
  return (
    <div className="h-min" style={{ color: color }}>
    <div className="flex flex-col gap-4">
    <input
          type="text"
          name="name"
          value={contact[0].name}
          onChange={(e) => handleContactChange(e)}
          placeholder="Your Name"
          className="input outline-none text-3xl font-bold w-full"
        />
    <input
          type="text"
          name="designation"
          value={contact[0].designation}
          onChange={(e) => handleContactChange(e)}
          placeholder="The role you are applying for?"
          className="input outline-none text-2xl mb-4 w-full"
          style={{ color: color }}
        />
    </div>
    <div className="flex flex-wrap gap-4">
    <div className="flex items-center gap-2">
        <MdLocalPhone  className="text-2xl" style={{ color: color }}/>
        <input
          type="text"
          name="phone"
          value={contact[0].phone}
          onChange={(e) => handleContactChange(e)}
          placeholder="Phone Number"
          className="input outline-none text-2xl"
        />
      </div>

      <div className="flex items-center gap-2">
        <MdOutlineEmail className="text-2xl" style={{ color: color }}  />
        <input
          type="text"
          name="email"
          value={contact[0].email}
          onChange={(e) => handleContactChange(e)}
          placeholder="Email Address"
          className="input outline-none text-2xl"
        />
      </div>

      <div className="flex items-center gap-2">
        <MdLocationOn className="text-2xl" style={{ color: color }}/>
        <input
          type="text"
          name="address"
          value={contact[0].address}
          onChange={(e) => handleContactChange(e)}
          placeholder="Address"
          className="input outline-none text-2xl w-max"
        />
      </div>

      <div className="flex items-center gap-2">
        <FaLinkedin className="text-2xl" style={{ color: color }}/>
        <input
          type="text"
          name="linkedIn"
          value={contact[0].linkedIn}
          onChange={(e) => handleContactChange(e)}
          placeholder="LinkedIn"
          className="input outline-none text-2xl"
        />
      </div>
    </div>
      
    </div>
  );
};

export default ContactSection;
