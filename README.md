# Secare: YouTube UI Disabler Extension

Secare is a browser extension designed to enhance your YouTube experience by allowing you to selectively disable various UI elements with a single click. This project is built with React and TypeScript, powered by Vite, and uses Tailwind CSS for styling. It is designed to be cross-browser compatible for both Chrome and Firefox.

## Features

*   **Disable YouTube UI Elements**: Easily toggle off distracting or unwanted elements on YouTube.
*   **Cross-Browser Compatibility**: Supports both Chrome and Firefox browsers.
*   **User Preferences**: Saves your preferences using browser storage.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing.
*   **Vite**: A fast build tool that provides a lightning-fast development experience.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Radix UI**: A collection of unstyled, accessible UI components.
*   **WebExtension Polyfill**: For consistent WebExtension API usage across different browsers.

## Project Structure

*   `public/`: Static assets for the extension.
*   `src/`:
    *   `content/`: Content scripts that interact with YouTube pages (CSS and TypeScript).
    *   `components/`: React components used in the extension's popup and potentially content scripts.
    *   Other React application files.
*   `manifest.json`: Defines the extension's properties, permissions, and entry points for both Chrome and Firefox.
*   `prepareArchive.ts`: A script to prepare the extension archives for distribution.

## Development

To set up the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/richardpickman/secare
    cd secare
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
    (Assuming `pnpm` is used, as indicated by `pnpm-lock.yaml`)

3.  **Build the extension**
    ```bash
    pnpm build
    ```
    This will build the extension. You will need to load the unpacked extension in your browser from the `dist` folder that Vite generates.

## Building for Production

To build the extension for production, you can target either Chrome or Firefox:

*   **Build for Firefox:**
    ```bash
    pnpm run build:firefox
    ```
    This will generate a `firefox-secare.zip` file in the root directory, ready for submission to the Firefox Add-on store.

*   **Build for Chrome:**
    ```bash
    pnpm run build:chrome
    ```
    This will generate a `chrome-secare.zip` file in the root directory, ready for submission to the Chrome Web Store.

## Installation

### Chrome

1.  Open Chrome and navigate to `chrome://extensions`.
2.  Enable "Developer mode" by toggling the switch in the top right corner.
3.  Click on "Load unpacked" and select the `dist` folder from your project directory after running a build command (e.g., `pnpm run build:chrome`).

### Firefox

1.  Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2.  Click on "Load Temporary Add-on...".
3.  Navigate to your project's `dist` folder (after running a build command like `pnpm run build:firefox`) and select any file inside (e.g., `manifest.json`).

## Linting

To check for code style and errors, run the linter:

```bash
pnpm run lint
