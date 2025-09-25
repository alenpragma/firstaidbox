"use client";

import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { Twitter, Instagram, Tiktok, Messenger, Whatsapp } from "lucide-react";
import useAppStore from "../../../lib/store/general";

const Topbar = () => {
  const { appData } = useAppStore();

  const socialLinks = [
    {
      icon: (
        <FaFacebookSquare className="text-[14px] md:text-[30px] text-white" />
      ),
      url: appData?.social_links?.facebook,
    },
    {
      icon: <FaLinkedin className="text-[14px] md:text-[30px] text-white" />,
      url: appData?.social_links?.linkedin,
    },
    {
      icon: <BsYoutube className="text-[14px] md:text-[35px] text-white" />,
      url: appData?.social_links?.youtube,
    },
    {
      icon: <Twitter className="text-[14px] md:text-[30px] text-white" />,
      url: appData?.social_links?.twitter,
    },
    {
      icon: <Instagram className="text-[14px] md:text-[30px] text-white" />,
      url: appData?.social_links?.instagram,
    },
    {
      icon: <Tiktok className="text-[14px] md:text-[30px] text-white" />,
      url: appData?.social_links?.tiktok,
    },
    {
      icon: <Messenger className="text-[14px] md:text-[30px] text-white" />,
      url: appData?.social_links?.messenger,
    },
    {
      icon: <Whatsapp className="text-[14px] md:text-[30px] text-white" />,
      url: appData?.social_links?.whatsapp,
    },
  ];

  return (
    <div className="bg-p-green py-[15px]">
      <div className="max-w-container mx-auto px-[10px]">
        <div className="flex justify-between items-center">
          {/* Social Links */}
          <div className="flex gap-x-2 md:gap-x-4">
            {socialLinks.map(
              (link, index) =>
                link.url && (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                )
            )}
          </div>

          {/* Contact Info */}
          <div className="flex gap-x-2 md:gap-x-6">
            <a
              href="tel:+8801511899175"
              className="flex md:gap-x-2 items-center text-white"
            >
              <BsFillTelephoneFill className="text-[14px] md:text-[35px]" />
              <span className="text-[10px] md:text-base">+8801511899175</span>
            </a>
            <a
              href="mailto:goodmorningaid@gmail.com"
              className="flex md:gap-x-2 items-center text-white"
            >
              <CgMail className="text-[14px] md:text-[35px]" />
              <span className="text-[10px] md:text-base">
                goodmorningaid@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
