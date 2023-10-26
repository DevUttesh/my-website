import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <section className="home h-screen ">
      <div className="home-txt bg-white h-full bg-opacity-75 flex flex-col justify-center px-40">
        <h1 className="font-bold text-7xl">Suthar Uttesh</h1>
        <p className="text-3xl mt-5">I'm Web Developer.</p>
        <div className="flex gap-8 w-full mt-5 ">
          <div className="w-5 h-5" >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="w-5 h-5" >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="w-5 h-5" >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="w-5 h-5" >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="w-5 h-5" >
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          
        </div>
        <div className="absolute right-4 bottom-4 hidden  bg-green-700 flex items-center justify-center p-5 w-10 rounded-full" >^</div>
      </div>
    </section>
  );
};

export default Home;
