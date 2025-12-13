import { getSavedState } from '../lib';
import { settings } from '../lib/constants';

const html = document.querySelector('html');

document.addEventListener('DOMContentLoaded', () => {
    getSavedState()
        .then((result) => {
            const properties = {
                ...settings,
                ...result,
            };

            if (html) {
                console.log(html, ' moving to dataset');

                for (const [key, value] of Object.entries(properties)) {
                    const datasetKey = `disable-${key}`;

                    html.dataset[datasetKey] = String(value ?? 'false');
                }
            }
        })
        .catch((err) => {
            console.log('Retrieving saved state failed. Error: ', err);
        });
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local') {
        if (html) {
            for (const [key, value] of Object.entries(changes)) {
                const datasetKey = `disable-${key}`;

                html.dataset[datasetKey] = String(value.newValue);
            }
        }
    }
});
