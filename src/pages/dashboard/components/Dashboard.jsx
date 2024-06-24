import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stats from "./Stats";
import Table from "./Table";
import { faChevronDown, faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="lg:px-16 sm:px-8 px-4 pt-5 pb-10">
      <Stats />
      <div className="bg-white shadow rounded-lg p-6 mt-10">
        <div className="flex lg:flex-row flex-col gap-3 justify-between lg:pb-0 pb-10">
          <div>
            <p className="text-xl font-extrabold">All Customers</p>
            <p className="text-sm text-green-300 font-bold mb-4">
              Active Members
            </p>
          </div>
          <div className="flex md:flex-row flex-col lg:gap-2 gap-5">
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search for address"
                className="bg-gray-50"
              />
            </div>
            <div className="flex justify-between items-center gap-2 h-12 rounded-md bg-gray-50 p-2 px-3">
              <p>
                <span className="text-gray-400">Sort by: </span>Newest{" "}
              </p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <Table />
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between">
          <p className="text-gray-400 mt-5">
            Showing data 1 to 8 of 256x entries
          </p>
          <div className="flex gap-2 items-center mt-5">
            <div className="bg-gray-200 px-2 text-sm">
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="bg-purple-700 text-white px-2 text-sm">1</div>
            <div className="bg-gray-200 px-2 text-sm">2</div>
            <div className="bg-gray-200 px-2 text-sm">3</div>
            <div className="bg-gray-200 px-2 text-sm md:block hidden">4</div>
            <div className="">...</div>
            <div className="bg-gray-200 px-2 text-sm">40</div>
            <div className="bg-gray-200 px-2 text-sm">
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
