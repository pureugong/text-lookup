console.log("Content script loaded.");

chrome.storage.local.get("selectedText", ({ selectedText }) => {
  console.log("Selected text retrieved from storage:", selectedText);
  
  fetch(chrome.runtime.getURL('data.csv'))
    .then(response => {
      console.log("Fetching data.csv...");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      console.log("Data.csv content fetched successfully.");
      const lines = text.split('\n');
      console.log("CSV lines:", lines);
      
      let result = "No details found.";
      for (let line of lines) {
        const [abbr, meaning] = line.split(',');
        console.log("Checking line:", abbr, meaning);
        if (abbr.trim() === selectedText.trim()) {
          result = meaning.trim();
          console.log("Match found:", result);
          break;
        }
      }
      
      showFloatingBox(result);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});

function showFloatingBox(text) {
  console.log("Displaying floating box with text:", text);
  
  const floatingBox = document.createElement('div');
  floatingBox.style.position = 'fixed';
  floatingBox.style.top = '10px';
  floatingBox.style.right = '10px';
  floatingBox.style.zIndex = '1000';
  floatingBox.style.backgroundColor = 'white';
  floatingBox.style.border = '1px solid black';
  floatingBox.style.padding = '10px';
  floatingBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  floatingBox.style.font = '16px Arial';
  floatingBox.style.color = 'black';

  floatingBox.innerText = text;

  document.body.appendChild(floatingBox);

  setTimeout(() => {
    console.log("Removing floating box.");
    floatingBox.remove();
  }, 5000);
}

console.log("Content script execution completed.");
