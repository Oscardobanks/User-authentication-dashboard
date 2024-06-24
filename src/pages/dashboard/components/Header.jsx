import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="p-4 lg:px-16 sm:px-8 px-4 flex lg:flex-row flex-col lg:gap-0 gap-5 lg:items-center justify-between">
      <h1 className="text-2xl font-bold mb-1">Hello Evano 👋,</h1>
      <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input type="text" placeholder="Search for address"/>
        </div>
    </header>
  );
};

export default Header;