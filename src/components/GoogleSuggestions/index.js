import { Component } from "react";

import SuggestionItem from "../SuggestionItem";
import "./index.css";

class GoogleSuggestions extends Component {
  state = {
    searchInput: "",
  };

  updateSearchInput = (value) => {
    this.setState({ searchInput: value });
  };

  onChangeInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    console.log(searchInput);
    const { suggestionsList } = this.props;
    const searchResults = suggestionsList.filter((eachList) =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google"
          className="google-logo"
        />
        <div className="search-input-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-box"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul>
            {searchResults.map((eachItem) => (
              <SuggestionItem
                SuggestionDetails={eachItem}
                key={eachItem.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default GoogleSuggestions;
