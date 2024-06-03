chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "showDetails",
    title: "Show Details",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "showDetails" && info.selectionText) {
    chrome.storage.local.set({ selectedText: info.selectionText }, () => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
    });
  }
});
