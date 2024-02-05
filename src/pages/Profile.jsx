import React from "react";
import "../CSS/Profile.css";
import McDonalds from "../assets/profile-image.jpg";
import birthdate from "../assets/birthdate.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/email.svg";
import house from "../assets/house.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Profile = () => {
  return (
    <div >
      <div className="bg" style={{height: "700px"}}></div>
      <div className="profile-main" style={{scale: "0.67"}}>
        <img src={McDonalds} alt="" />
        <div className="info">
          <div>
            <h1>JOHN SMILGA</h1>
          </div>
          <h2>SENIOR UI/UX DEVELOPER</h2>
          <p>
            Passionate UI/UX developer skilled in creating intuitive
            <br /> and engaging digital experiences. Expert in user research,
            <br /> prototyping, and crafting visually appealing interfaces
            <br /> that enhance user satisfaction.
          </p>
          <div className="details">
            <div className="detail">
              <img src={birthdate} alt="" />
              <p>31 February, 2003</p>
            </div>
            <div className="detail">
              <img src={phone} alt="" />
              <p>8657192890</p>
            </div>
            <div className="detail">
              <img src={mail} alt="" />
              <p>johnsmilga@gmail.com</p>
            </div>
            <div className="detail">
              <img src={house} alt="" />
              <p>Bhandup, Outside Mumbai, Maharashtra</p>
            </div>
            <div className="socials">
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;