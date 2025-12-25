import { getSavedState } from '../lib/utils';

const html = document.querySelector('html');

const toggleFlag = (key: string, checked: boolean) => {
    if (html) {
        if (!checked) {
            html.removeAttribute(key);
        }

        if (checked) {
            html.setAttribute(key, '');
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    getSavedState()
        .then((result) => {
            const properties = {
                ...result,
            } as Record<string, boolean>;

            if (html) {
                for (const [key, value] of Object.entries(properties)) {
                    toggleFlag(`data-${key}`, value);
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
            for (const [key, state] of Object.entries(changes)) {
                toggleFlag(`data-${key}`, state.newValue as boolean);
            }
        }
    }
});
