import ThreeDTransformText from "../../components/ThreeDTransformText";
import { IoGlobeOutline } from "react-icons/io5";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="flex flex-col mt-56 items-center justify-center">
      <ThreeDTransformText text="WELCOME TO LKMM 2025" />
      <div className="flex gap-5 mt-20">
        <a
          href="https://www.instagram.com/hmifunikom?igsh=MW56bmplNm9qamZvaw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={40}
            className="mx-auto text-[#424242] hover:text-[#3B9DF8] transition-all duration-200"
          />
        </a>
        <a
          href="https://www.youtube.com/@hmifunikom9377"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube
            size={40}
            className="mx-auto text-[#424242] hover:text-[#3B9DF8] transition-all duration-200"
          />
        </a>
        <a
          href="https://www.tiktok.com/@hmifunikom?_r=1&_t=ZS-915rpm7qf9o"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTiktok
            size={40}
            className="mx-auto text-[#424242] hover:text-[#3B9DF8] transition-all duration-200"
          />
        </a>
        <a
          href="https://hmif.unikom.my.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoGlobeOutline
            size={40}
            className="mx-auto text-[#424242] hover:text-[#3B9DF8] transition-all duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
