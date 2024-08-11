import React, { useRef } from "react";
import "./search.css";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { toast } from "react-toastify";
import { setCurrentCountry, setDataCountry } from "../../../redux/features/dataCountrySlice";

const Search = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();


  const handleClickSearch = async (event:React.FormEvent<HTMLFormElement>) : Promise<void> => {
    event.preventDefault(); 
    if (inputRef.current) {
      let searchTerm = inputRef.current.value;
      searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

      try {
        const response = await axios(
          `https://disease.sh/v3/covid-19/countries/${searchTerm}`
        );
        dispatch(setCurrentCountry(searchTerm));
        dispatch(setDataCountry(response.data));
      } catch (err) {
        toast(
          String("Country not found. Please check the name and try again.")
        );
      }
    }
  };
  return (
    <form onSubmit={handleClickSearch}>
      <div className="searchContainer">
        <div className="searchInput">
          <input type="text" placeholder="search country..." ref={inputRef} />
        </div>
        <button className="btnSearch">
          search
        </button>
      </div>
    </form>
  );
};

export default Search;
