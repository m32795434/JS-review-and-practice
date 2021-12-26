const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// convert the nodeList to an array.
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hidde all the panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark all the tabs as unselected
  tabButtons.forEach((tab) => {
    /*
      //because we have a dash, we use the camel case to access the attribute
      but we will use the generic method to avoid problems on other browsers
    tab.ariaSelected = false; */
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it
  const { id } = event.currentTarget;
  /* METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // METHOD 2 - find the FIRST match in the array of tabPanels
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
  // end of handleTabClick.
}
tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
});
