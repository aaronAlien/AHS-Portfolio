import React from "react";
import Tooltip from "../Tooltip/Tooltip";

const IconInstance = ({ icon, message }) => {
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

export default IconInstance;
