import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faClock, faClose, faDollar, faLocationDot, faPeopleGroup, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./AddAddressSearch.css";

const AddAddressSearch = ({ handleNextStep, handlePreviousStep }) => {
  AddAddressSearch.propTypes = {
    handleNextStep: PropTypes.object.isRequired,
    handlePreviousStep: PropTypes.func.isRequired,
  };

  return (
    <div className="add-address-search">
      <div className="header pb-10">
        <div className="flex gap-5 items-center font-bold">
          <p className="text-xl pb-1">Add address</p>
          <span>3 of 3</span>
        </div>
        <button className="close-button text-xl" onClick={handlePreviousStep}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="form-body">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input type="text" placeholder="Search for address"/>
        </div>
        <p className="text-gray-500">
          Your address is not visible to other users
        </p>
        <div className="flex gap-3 py-10 pb-32">
          <button className="location-btn flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            Use current location
          </button>
          <button className="add-manually" onClick={handleNextStep}>
            Add manually
          </button>
        </div>
      </div>
      <div>
        <p className="text-xl pb-5 font-bold">Sharing your address shows:</p>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faPeopleGroup} className="w-5" />
            People near you
          </li>
          <li className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faClock} className="w-5" />
            Estimated delivery time
          </li>
          <li className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faDollar} className="w-5" />
            Estimate shipping costs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddAddressSearch;
