import browser from 'webextension-polyfill';

export const getSavedState = () => browser.storage.local.get(null);
