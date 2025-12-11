chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local') {
        console.log('This is changes', changes);
    }
});
