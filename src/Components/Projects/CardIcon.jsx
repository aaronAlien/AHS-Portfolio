import React from "react";
import { TooltipCards } from "../Tooltip/Tooltip";

const CardIcon = ({ icon, message }) => {
  return (
    <>
      <div className=''>
        <TooltipCards message={message}>
          <button>{icon}</button>
        </TooltipCards>
      </div>
    </>
  );
};

export default CardIcon;
