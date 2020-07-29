import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  // what happens when you type into input element (controlled element)
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  // when form is submitted
  onFormSubmit = (event) => {
    event.preventDefault(); // prevents page from refreshing
    // TODO: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  

  render() {
    // onChange() is a special property name that must be named this way to
    // invoke it
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
        <div role="listitem" className="item">
          <div className="ui red horizontal label">
            <i className="power cord icon"></i>API Powered by: YouTube
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
