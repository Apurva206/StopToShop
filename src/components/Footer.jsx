import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  const socialStyle =
    "m-3 rounded-full cursor-pointer p-2 text-white text-2xl";
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
      <h1 className="text-white">E-COMMERCE SITE</h1>
      <div className="flex-1 flex flex-col p-2 md:ml-4 text-white">
        <div className="flex m-3">
          <GrLocation />
          <p className="pl-3">India</p>
        </div>
        <div className="flex m-3">
          <AiFillPhone />
          <p className="pl-3">+91 123456789</p>
        </div>
        <div className="flex m-3">
          <AiOutlineMail />
          <p className="pl-3">abcde@gmail.com</p>
        </div>
      </div>
        <p className="text-white text-center">
          Copyright &copy; Apurva Singhal 🤍 2023. All rights reserved.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle}>
            <AiFillFacebook />
          </div>
          <div className={socialStyle}>
            <AiFillInstagram />
          </div>
          <div className={socialStyle}>
            <AiOutlineTwitter />
          </div>
          <div className={socialStyle}>
            <FaPinterest />
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
