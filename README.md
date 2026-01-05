# Local Search Chrome Extension 🌍

**Search Google from anywhere in the world without a VPN.**

Local Search is a Chrome extension that allows you to see localized Google search results from over 100 locations worldwide. It works by appending specific `gl` (geolocation), `hl` (host language), and `uule` (precise location) parameters to your search queries.

## Features

- **🌍 Search from 60+ Countries:** View results as if you were in the UK, Japan, Brazil, and more.
- **🏙️ precise City Targeting:** Search from specific cities like New York, Tokyo, London, and Paris using advanced UULE parameter generation.
- **🗣️ Language Control:** Toggle between "Search as Local" (native language) and "Search in English" modes.
- **🔒 Privacy First:** Automatically disables personalization (`pws=0`) and country redirects (`ncr=1`) for unbiased results.
- **🌙 Modern UI:** Beautiful dark-themed interface with teal accents.

## Installation

1. Clone this repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the extension directory.

## How to Use

1. Click the **Local Search** icon in your toolbar.
2. Enter your search query.
3. Select a **Country** or **City** from the tabs.
4. (Optional) Use the toggle to switch between Local Language and English results.
5. Click a location to search!

## Technical Details

- **Manifest V3:** Built using the latest Chrome Extension standards.
- **Dynamic UULE:** Generates precise location parameters on the fly for city-level targeting.
- **No External Dependencies:** Lightweight and fast.

## License

MIT

