# NSI Extension Focus Mode Toggle

This is a simple browser extension for the website `raisintine.fr` that disables the "Focus Mode" feature on question pages.

> [!WARNING]
> This is for educational purposes only. Use at your own risk. The author is not responsible for your actions or any consequences that may follow.

## How It Works

The extension injects a content script (`content.js`) into pages matching the `https://raisintine.fr/chocolatine/question.php*` URL pattern. This script runs once the page's DOM is ready and performs the following actions to disable the focus mode:

*   **Removes Overlays**: Hides the overlay elements that cover inactive questions.
*   **Reveals Questions**: Forces all question containers to be visible.
*   **Hides Timers**: Hides the countdown timers associated with questions.
*   **Disables Event Triggers**: Removes the `onmouseenter` and `onmouseleave` JavaScript event handlers that are used to detect the mouse and trigger the focus mode.
*   **Removes Key Handlers**: Removes the `onkeyup` event handler from the page body.
*   **Patches Page Script**: Neutralizes the `activation_focus` function within the page's `window.q` object to prevent it from being triggered.

## Installation

Since this extension is not on an official web store, you must load it manually in a Chromium-based browser (like Google Chrome, Microsoft Edge, Brave, etc.).

1.  **Download the Code**: Clone this repository or download it as a ZIP file and extract it to a folder on your computer.
2.  **Open Extensions Page**: Navigate to your browser's extensions page.
    *   In Chrome, go to `chrome://extensions`
    *   In Edge, go to `edge://extensions`
3.  **Enable Developer Mode**: Find and enable the "Developer mode" toggle, usually located in the top-right corner of the page.
4.  **Load the Extension**:
    *   Click the "Load unpacked" button.
    *   Select the folder where you saved the extension's files (`content.js`, `manifest.json`).
5.  The "Raisintine Anti-Focus" extension should now appear in your list of installed extensions and will be active.

## Usage

Once installed, the extension works automatically. Simply navigate to a question page on `raisintine.fr`, and the focus mode will be disabled by default. There are no settings or buttons to configure.
