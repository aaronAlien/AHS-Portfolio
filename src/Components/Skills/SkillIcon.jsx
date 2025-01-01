import React from "react";
import { TooltipSkills } from "../Tooltip/Tooltip";

const SkillIcon = ({ icon, message }) => {
  return (
    <>
      <div className=''>
        <TooltipSkills message={message}>
          <button>{icon}</button>
        </TooltipSkills>
      </div>
    </>
  );
};

export default SkillIcon;
