# Text Lookup Chrome Extension

This Chrome extension allows users to look up selected text in a local CSV file and display the corresponding information in a floating box.

## Features

- Retrieve selected text from Chrome's local storage.
- Fetch and parse a local `data.csv` file to find matching information.
- Display the result in a floating box on the current web page.

## Installation

1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Select some text on any web page.
2. Save the selected text to Chrome's local storage (you'll need a mechanism to do this, like a background script or a context menu option).
3. The content script will automatically fetch `data.csv`, look up the selected text, and display the result in a floating box.

## Files

- `manifest.json`: Defines the extension's properties and permissions.
- `content.js`: Contains the logic for fetching and displaying the information.
- `data.csv`: The CSV file containing the data for lookup.
