// alert("Hello")

let receiver = (message, sender, sendResponse) => {
    console.log(message);
}

chrome.runtime.onMessage.addListener(receiver);

