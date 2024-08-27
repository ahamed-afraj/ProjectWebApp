import "./index.css";

const SuggestionItem = (props) => {
  const { SuggestionDetails, updateSearchInput } = props;
  const { suggestion } = SuggestionDetails;
  const onClickSuggestion = () => {
    updateSearchInput(suggestion);
  };
  return (
    <li>
      <p className="para"> {suggestion} </p>
      <button className="btn" type="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-logo"
          alt="arrow"
        />
      </button>
    </li>
  );
};
export default SuggestionItem;
