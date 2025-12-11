import { settings } from '../constants';

const html = document.querySelector('html');

if (html) {
    for (const key of settings) {
        html.setAttribute(`disable_${key}`, 'false');
    }
}

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local') {
        console.log('This is changes', changes);
        for (const [key, value] of Object.entries(changes)) {
            console.log(html);

            html?.setAttribute(`disable_${key}`, String(value.newValue));
        }
    }
});
