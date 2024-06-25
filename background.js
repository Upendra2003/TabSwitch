chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (tab.url.includes('youtube.com/watch')) {
        chrome.scripting.executeScript({
            target: {tabId: activeInfo.tabId},
            files: ['content.js']
        });
    }
});
