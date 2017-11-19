// Chrome extension icon click event
chrome.browserAction.onClicked.addListener(function(tab) {

  // execute script
  chrome.tabs.executeScript(null, {file: "ft_fonts.js"});
  chrome.tabs.executeScript(null, {file: "fontester.js"});


});
