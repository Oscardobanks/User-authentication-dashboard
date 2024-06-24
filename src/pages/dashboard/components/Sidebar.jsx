import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user2 from "../../../assets/user2.jpg";
import {
    faChevronDown,
  faChevronRight,
  faCoins,
  faCube,
  faGear,
  faKey,
  faMagicWandSparkles,
  faQuestionCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 md:px-5 flex flex-col pt-10 pb-5">
      <div className="flex items-end md:justify-start justify-center mb-8 text-2xl">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGear} />
          <span className="font-bold ml-2 md:block hidden">Dashboard</span>
        </div>
        <span className="text-xs text-gray-500 mb-1 md:block hidden">v.01</span>
      </div>
      <nav className="flex flex-col space-y-6 md:px-0 sm:px-5 px-3">
        <div className="flex md:justify-between justify-center px-2 items-center text-gray-700 hover:text-purple-700">
          <p className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faKey} /><span className="md:block hidden"> Dashboard</span>
          </p>
        </div>
        <div className="flex md:justify-between justify-center px-2 items-center text-gray-700 hover:text-purple-700">
          <p className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCube} /><span className="md:block hidden"> Product</span>
          </p>
          <FontAwesomeIcon icon={faChevronRight}  className="md:block hidden"/>
        </div>
        <div className="flex md:justify-between justify-center items-center p-2 text-white bg-purple-800 rounded-md">
          <p className="flex md:gap-2 items-center">
            <FontAwesomeIcon icon={faUser} /> <span className="md:block hidden">Customers</span>
          </p>
          <FontAwesomeIcon icon={faChevronRight} className="md:block hidden"/>
        </div>
        <div className="flex md:justify-between justify-center px-2 items-center text-gray-700 hover:text-purple-700">
          <p className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCoins} /><span className="md:block hidden"> Income</span>
          </p>
          <FontAwesomeIcon icon={faChevronRight}  className="md:block hidden"/>
        </div>
        <div className="flex md:justify-between justify-center px-2 items-center text-gray-700 hover:text-purple-700">
          <p className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faMagicWandSparkles} /><span className="md:block hidden"> Promote</span>
          </p>
          <FontAwesomeIcon icon={faChevronRight}  className="md:block hidden"/>
        </div>
        <div className="flex md:justify-between justify-center px-2 items-center text-gray-700 hover:text-purple-700">
          <p className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faQuestionCircle} /><span className="md:block hidden"> Help</span>
          </p>
          <FontAwesomeIcon icon={faChevronRight}  className="md:block hidden"/>
        </div>
      </nav>
      <div className="mt-auto mb-5">
        <div className="p-4 rounded-lg text-center boxStyle md:block hidden">
          <p className="text-white">Upgrade to PRO to get access all Features!</p>
          <button className="bg-white text-purple-800 font-bold py-2 px-4 rounded-full w-full mt-4">
            Get Pro Now!
          </button>
        </div>
        <div className="flex md:justify-between items-center mt-8 justify-center">
          <div className="flex items-center">
            <img src={user2} alt="User" className="w-12 h-12 rounded-full" />
            <div className="ml-2 md:block hidden">
              <p className="text-sm font-bold">Evano</p>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 md:block hidden" />
        </div>
      </div>
    </div>
  );
};

// const boxStyle = {
    
// }

export default Sidebar;
