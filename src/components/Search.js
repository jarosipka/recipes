import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

function Search(props) {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query) return;

    props.onSearch(query);
    history.push("/"); // Redirect to home page
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <h1 className="find-recipe">Find a Recipe</h1>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleChange}
          />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
