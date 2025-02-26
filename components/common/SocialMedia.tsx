import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

const SocialMedia = () => {


  const icons = [
    {
      id:0,
      icon: <FaInstagram/>
    },
    {
      id:1,
      icon: <FaTelegram/>
    },
    {
      id:2,
      icon: <FaWhatsapp/>
    },
    {
      id:3,
      icon: <FaFacebook/>
    }

  ]


  return (
    <div className="flex flex-col gap-3 text-white p-2">
      <h4>Bizi sosial media hesablarından izləyin</h4>
      <div className="flex gap-3 text-3xl justify-center">
        {
          icons.map((icon) => (
            <Link key={icon.id} href="/" className="text-2xl md:text-3xl">{icon.icon}</Link>
          ))
        }
      </div>
    </div>
  );
};

export default SocialMedia;
