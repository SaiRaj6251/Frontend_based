import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/Loading.css';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    setTimeout(()=>{
        navigate("/dashboard")
    }, 1500)
  }, [])

  return (
    <div className="loader-container">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
