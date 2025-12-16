import { settings } from '../lib/constants';
import { getSavedState } from '../lib/utils';

const html = document.querySelector('html');

const initialObject = settings.reduce(
    (prev, item) => ({ ...prev, [item]: 'false' }),
    {},
);

const toCamelCase = (separatedString: string) =>
    separatedString.replace(/[-_](.)/g, (_match, character) =>
        character.toUpperCase(),
    );

document.addEventListener('DOMContentLoaded', () => {
    getSavedState()
        .then((result) => {
            const properties = {
                ...initialObject,
                ...result,
            };

            if (html) {
                for (const [key, value] of Object.entries(properties)) {
                    const datasetKey = toCamelCase(`disable-${key}`);

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
                const datasetKey = toCamelCase(`disable-${key}`);

                html.dataset[datasetKey] = String(value.newValue);
            }
        }
    }
});
