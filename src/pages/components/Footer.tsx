import { IoGlobeOutline } from "react-icons/io5";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-[#abc2d3] w-full p-4 md:p-6 mt-5 rounded-t-3xl shadow-inner">
      <div className="flex flex-col items-center gap-6 w-full sm:px-16">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center flex-wrap gap-4 text-[#abc2d3]">
          <a
            href="https://www.instagram.com/hmifunikom?igsh=MW56bmplNm9qamZvaw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/@hmifunikom9377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
          >
            <BsYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@hmifunikom?_r=1&_t=ZS-915rpm7qf9o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
          >
            <BsTiktok />
          </a>
          <a
            href="https://hmif.unikom.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] p-2 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] transition-all duration-300"
          >
            <IoGlobeOutline />
          </a>
        </div>

        {/* Divider Line */}
        <div className="border-t border-slate-700 w-full max-w-3xl"></div>

        {/* Copyright */}
        <p className="text-[0.9rem] text-slate-400 text-center">
          © 2025 HMIF. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
