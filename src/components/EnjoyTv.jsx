import tv from "./../assets/images/tv.png";
import netflixVideo from "./../assets/images/netflix-video.m4v";
const EnjoyTv = () => {
  return (
    <div className="bg-black border-t-[6px] border-gray-600 ">
      <div className=" flex justify-between items-center w-[80%] m-[auto]">
        <div className="basis-1/2">
          <h2 className="text-white text-[48px] font-bold">Enjoy on your TV</h2>
          <p className="text-white text-[20px] font-regular">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="relative basis-1/2">
          <img src={tv} alt="Yayyy" className="relative w-[100%] z-100 " />
          <video
            className="absolute top-[80px] right-[70px] w-[370px] "
            type="video/m4v"
            playsInline
            muted
            loop
            autoPlay
          >
            <source src={netflixVideo} />
          </video>
        </div>
      </div>
    </div>
  );
};
export default EnjoyTv;
