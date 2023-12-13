// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const clickOnTab = () => {
    clickTabItem(tabId)
  }
  const btnClassName = isActive ? `tab-btn active` : `tab-btn`
  const jsxElement = (
    <li className="tab-item-container">
      <button type="button" className={btnClassName} onClick={clickOnTab}>
        {displayText}
      </button>
    </li>
  )
  return jsxElement
}
export default TabItem
