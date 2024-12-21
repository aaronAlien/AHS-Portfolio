import React from "react";
import StackIcon from "tech-stack-icons";
import Tooltip from "../Tooltip/Tooltip";

const SkillInstance = ({ icon, message }) => {
  return (
    <>
      <div className=''>
        <Tooltip message={message}>
          <button>{icon}</button>
        </Tooltip>
      </div>
    </>
  );
};

export default SkillInstance;
