browser.runtime.onInstalled.addListener(async () => {
  browser.browserAction.disable();

  browser.declarativeContent.onPageChanged.removeRules(undefined, () => {
    const rules = {
      conditions: [
        new browser.declarativeContent.PageStateMatcher({
          pageUrl: { hostSuffix: ".force.com", schemes: ["https"] },
        }),
      ],
      actions: [new browser.declarativeContent.ShowAction()],
    };

    browser.declarativeContent.onPageChanged.addRules([rules]);
  });
});


browser.browserAction.onClicked.addListener(async () => {

  browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
    const currentTab = tabs[0];
    const currentUrl = currentTab.url;


    // Use the currentUrl as needed
    console.log('Current URL:', currentUrl);

    const updatedUrl = currentUrl.replace(/lightning\.force\.com/, 'my.salesforce.com');

    console.log('Updated URL:', updatedUrl);
    
    const e = browser.runtime.getURL("indexx.html?url="+updatedUrl);
    browser.tabs.create({ url: e });
  });

    

        
    

  });
  