

function encryptOnClick(info, tab) {
    var myJSON = JSON.stringify(info);
    var myText = JSON.parse(myJSON);
    alert(myText['selectionText']);
}

function deCryptOnClick(info, tab) {
    var myJSON = JSON.stringify(info);
    var myText = JSON.parse(myJSON);
    alert(myText['selectionText']);
}

// Create item based on "selected" content type.
var contexts = ["selection", "editable"];
var enCrypt = "Encrypt Selection";
var deCrypt = "Decrypt Selection";
for (var i = 0; i < contexts.length; i++) {
    var id = chrome.contextMenus.create({"title": enCrypt, "contexts": [contexts[i]], "onclick": encryptOnClick});
    var id = chrome.contextMenus.create({"title": deCrypt, "contexts": [contexts[i]], "onclick": deCryptOnClick});
}
