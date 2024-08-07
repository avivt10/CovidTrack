import {  useRef  } from "react";
import "./search.css";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { currentSelectCountry } from "../../../redux/features/currentCountrySlice";
import { dataCountry } from "../../../redux/features/dataCountrySlice";
import { toast } from "react-toastify";

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
      const dispatch = useAppDispatch();  

    const handleClickSearch = async () => {
        if (inputRef.current) {
            let searchTerm = inputRef.current.value;
            searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

            try {
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
