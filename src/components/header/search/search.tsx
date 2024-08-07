import {  useRef  } from "react";
import "./search.css";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { currentSelectCountry } from "../../../redux/features/currentCountrySlice";
import { dataCountry } from "../../../redux/features/dataCountrySlice";
import { toast } from "react-toastify";

// TODO - please add default country. 
// Use your current location to choose the default country.

const Search = () => {
  // TODO - why don't use form ? if you are using button as a type=submit then handleClickSearch trigger. 
    const inputRef = useRef<HTMLInputElement>(null);
      const dispatch = useAppDispatch();  

    const handleClickSearch = async () => {
        if (inputRef.current) {
            let searchTerm = inputRef.current.value;
            // TODO - why do need to capitalize ? 
            // https://disease.sh/v3/covid-19/countries/israel - works for me as lower case
            // you can just trim and make as a lowercase --> searchTerm.trim().toLowerCase()
            searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

            try {
                // TODO - usually domain url sit on .env file BASE_URL=https://disease.sh/v3/covid-19
                const response = await axios(`https://disease.sh/v3/covid-19/countries/${searchTerm}`);
                dispatch(currentSelectCountry(searchTerm))
                dispatch(dataCountry(response.data));
                
            } catch (err) {
              toast(String("Country not found. Please check the name and try again."))
            }
        } 
    };
  return (
    <div className="searchContainer">
      {/* TODO - why not using <form onSubmit={handleClickSearch}>  */}
      <div className="searchInput">
        <input type="text" placeholder="search country..." ref={inputRef}/>
      </div>
      <button className="btnSearch" onClick={handleClickSearch}>
        search
      </button>
    </div>
  );
};

export default Search;
