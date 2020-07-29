import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // what happens when you type into input element (controlled element)
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  // when form is submitted
  const onSubmit = (event) => {
    event.preventDefault(); // prevents page from refreshing

    onFormSubmit(term);
  };
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    
  }
}

export default SearchBar;
