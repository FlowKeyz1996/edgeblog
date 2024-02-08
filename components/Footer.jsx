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
        <FaWikipediaW size={20} className="cursor-pointer mr-2"/>
        <FaPinterest size={20} className="cursor-pointer mr-2"/>
        <FaTwitter size={20} className="cursor-pointer mr-2"/>
        <FaInstagram size={20} className="cursor-pointer mr-2"/>
        <FaFacebook size={20} className="cursor-pointer"/>
       
        </div>
        
        <p className="text-[#808080] text-sm">All Right Reserved 2018 3layers</p>

        
        </footer>
        </div>
    </div>
  )
}

export default Footer