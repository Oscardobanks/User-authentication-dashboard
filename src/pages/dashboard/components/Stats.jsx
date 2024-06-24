import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user1 from '../../../assets/user1.jpg'
import user2 from '../../../assets/user2.jpg'
import user3 from '../../../assets/user3.jpg'
import user4 from '../../../assets/user4.jpg'
import user5 from '../../../assets/user5.jpg'
import { faArrowDown, faArrowUp, faComputer, faUserGroup, faUserCheck } from '@fortawesome/free-solid-svg-icons'

const Stats = () => {
  return (
    <div className="bg-white shadow grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-3 rounded-2xl">
      <div className="p-6">
        <div className="flex items-center lg:pr-20 lg:border-r-2 border-gray-200">
          <div className="bg-green-100 p-5 rounded-full">
            <i className="text-green-500">
                <FontAwesomeIcon icon={faUserGroup} />
            </i>
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Total Customers</p>
            <p className="text-xl font-bold">5,423</p>
            <p className="text-xs"><span className="text-green-500"><FontAwesomeIcon icon={faArrowUp} />16%</span> this month</p>
          </div>
        </div>
      </div>
      <div className="lg:pt-6">
        <div className="flex items-center lg:pl-10 pl-6 lg:border-r-2 border-gray-200">
          <div className="bg-green-100 p-5 rounded-full">
            <i className=" text-green-500">
            <FontAwesomeIcon icon={faUserCheck} />
            </i>
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Members</p>
            <p className="text-xl font-bold">1,893</p>
            <p className="text-xs"><span className="text-red-500"><FontAwesomeIcon icon={faArrowDown} />1%</span> this month</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center lg:pl-10">
          <div className="bg-green-100 p-5 rounded-full">
            <i className=" text-green-500">
            <FontAwesomeIcon icon={faComputer} />
            </i>
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-sm">Active Now</p>
            <p className="text-xl font-bold">189</p>
            <div className="flex items-center">
              <img src={user1} alt="User1" className="w-6 h-6 rounded-full border-2 border-white"/>
              <img src={user2} alt="User2" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
              <img src={user3} alt="User3" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
              <img src={user4} alt="User4" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
              <img src={user5} alt="User5" className="w-6 h-6 rounded-full border-2 border-white -ml-2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;