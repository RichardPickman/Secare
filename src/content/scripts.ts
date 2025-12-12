const html = document.querySelector('html');

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(null).then((result) => {
        if (html) {
            for (const [key, value] of Object.entries(result)) {
                const val = String(value ?? '');

                if (val) {
                    html.setAttribute(`disable_${key}`, val);
                } else {
                    html.setAttribute(`disable_${key}`, 'false');
                }
            }
        }
    });
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local') {
        console.log('This is changes', changes);
        for (const [key, value] of Object.entries(changes)) {
            console.log(html);

            html?.setAttribute(`disable_${key}`, String(value.newValue));
        }
    }
});
