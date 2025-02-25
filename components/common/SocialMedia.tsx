import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-3 text-white p-2">
      <h4>Bizi sosial media hesablarından izləyin</h4>
      <div className="flex gap-3 text-3xl justify-center">
        <Link href="/">
          <FaInstagram />
        </Link>
        <Link href="/">
          <FaTelegram />
        </Link>
        <Link href="/">
          <FaWhatsapp />
        </Link>
        <Link href="/">
          <FaFacebook />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
