const handler = (text) => {
    // perform text update
    console.log("from content:", text)
    
    const sel = document.getSelection();
    const range = sel.getRangeAt(0);

    console.log(sel, range)
    
    const temp_wrapper = document.createElement("span");
    temp_wrapper.appendChild(document.createTextNode(text));

    range.deleteContents()
    range.insertNode(temp_wrapper)

}

browser.runtime.onMessage.addListener(handler);