import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


const ToTop = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setShow(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      show && (
        <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full">
          <Link to="top" smooth={true} duration={500}>
            ⬆ Back to Top
          </Link>
        </button>
      )
    );
};

export default ToTop