import "./header.css";
import Search from "./search/search";

const Header = () => {
  return (
    // TODO - why do you need empty tags here
    <>
      <div className="headerContainer">
        <Search />
      </div>
    </>
  );
};

export default Header;
