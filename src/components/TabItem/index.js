import "./index.css";

const TabItem = (props) => {
  const { tabDetails, updateTabId, isActive} = props;
  const { displayText, tabId } = tabDetails;

  const onClickTabItem = () => {
    updateTabId(tabId);
  };
  const activeTabClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button onClick={onClickTabItem} type="button" className={`tab-btn ${activeTabClass}`}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
