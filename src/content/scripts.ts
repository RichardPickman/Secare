import { getSavedState } from '../lib/utils';

const html = document.querySelector('html');

// const toCamelCase = (key: string) =>
//     key.replace(/[-_](.)/g, (_match, character) => character.toUpperCase());

const toggleFlag = (key: string, value: boolean) => {
    if (html) {
        if (!value) {
            html.removeAttribute(key);
        }

        if (value) {
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
                    toggleFlag(`data-disable-${key}`, value);
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
                console.log(key, state);

                toggleFlag(`data-disable-${key}`, state.newValue as boolean);
            }
        }
    }
});
