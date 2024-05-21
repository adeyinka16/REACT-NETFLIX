import { IoIosArrowForward } from "react-icons/io";
import Navbar from "./Navbar";

const Banner = () => {
  return (

    
    <div className=" bg-banner h-[100vh] bg-cover">
      <Navbar />
      <div className="mt-[15%]">
        <h1 className="text-white text-[56px] font-bold text-center">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-white text-center text-[24px] font-regular">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white text-center text-[24px] font-regular mt-[10px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className=" w-[50%] m-[auto] mt-[30px] ">
          <input
            type="text"
            placeholder="Email Address"
            className="p-[12px] mr-2 w-[70%] rounded-md bg-transparent border-2"
          />
          <button className="bg-red-600 p-[12px] text-white font-bold rounded-md w-[27%]  border-2 border-transparent inline-flex justify-between items-center">
            <p className="text-[20px]">Get Started</p>
            <IoIosArrowForward size={20} color="#FFF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
