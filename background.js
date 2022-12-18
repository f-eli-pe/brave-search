function searchbrave(info) {
  var searchstring = info.selectionText;
  chrome.tabs.create({
    url:
      "https://search.brave.com/search?q=" + encodeURIComponent(searchstring),
  });
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Search Brave for "%s"',
    contexts: ["selection"],
    id: "BraveSearch",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  searchbrave(info);
});
