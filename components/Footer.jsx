import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto mt-8">
         
        <footer className="flex justify-between aligin-center">
        <div className="mr-5 ">
            <img src="greylogo.svg"></img>
        </div>
        <div className="flex">
        <FaWikipediaW size={20} className="cursor-pointer mr-1"/>
        <FaPinterest size={20} className="cursor-pointer mr-1"/>
        <FaTwitter size={20} className="cursor-pointer mr-1"/>
        <FaInstagram size={20} className="cursor-pointer mr-1"/>
        <FaFacebook size={20} className="cursor-pointer"/>
       
        </div>
        <div className="flex">
        <p className="text-grey">All Right Reserved 2018 3layers</p>
        </div>
        
        </footer>
        </div>
    </div>
  )
}

export default Footer