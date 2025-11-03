import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 boxShadow rounded-t-4xl w-full p-2 md:p-5">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex items-center flex-wrap gap-2.5 text-[#424242]">
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300">
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300">
            <BsLinkedin />
          </a>
        </div>
        <div className="border-t dark:border-slate-700 border-gray-200 pt-5 flex items-center w-full flex-wrap gap-5 justify-center">
          <p className="text-[0.8rem] dark:text-slate-500 sm:text-[0.9rem] text-gray-600">
            © 2025 HMIF. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
