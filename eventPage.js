chrome.contextMenus.create({
    "id": "Saak",
    "title": "Open SAAK App",
    "contexts": ["all"]
})

let saakPath = (info, tab) => {

    let msg = {
        type: 'saakPath'
        // message type must be an object
    }

    chrome.tabs.sendMessage(tab.id, msg, () => {
        console.log("Message Sent");
    })
    console.log(tab);
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
    saakPath(info, tab)
})