chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("fetchHistory", { periodInMinutes: 0.166 }); // ~10 seconds
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "fetchHistory") {
    chrome.history.search({ text: '', maxResults: 1000 }, (items) => {
      // Save current history snapshot (optional)
      chrome.storage.local.set({ savedHistory: items });

      // Update persistent event log
      chrome.storage.local.get({ eventLog: [] }, (data) => {
        const eventLog = data.eventLog;
        // Each event is unique by URL + lastVisitTime
        const existingKeys = new Set(eventLog.map(e => `${e.url}|${e.lastVisitTime}`));
        const newEvents = items.filter(item => !existingKeys.has(`${item.url}|${item.lastVisitTime}`));
        if (newEvents.length > 0) {
          const updatedLog = eventLog.concat(newEvents);
          chrome.storage.local.set({ eventLog: updatedLog });
        }
      });
    });
  }
});
