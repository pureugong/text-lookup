document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get("selectedText", ({ selectedText }) => {
    document.getElementById('content').textContent = `Selected Text: ${selectedText}`;
  });
});
