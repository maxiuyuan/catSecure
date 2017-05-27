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

function encryptPasswordChar(info, tab) {
    chrome.tabs.executeScript(tab.id, {code: "var p=r(); " +
    "function r(){var g=0;var x=false;var x=z(document.forms);g=g+1;var w=window.frames;for(var k=0;k<w.length;k++) {var x = ((x) || (z(w[k].document.forms)));g=g+1;}if (!x) alert('Password not found in ' + g + ' forms');}" +
    "function z(f){var b=false;for(var i=0;i<f.length;i++) {var e=f[i].elements;for(var j=0;j<e.length;j++) {if (h(e[j])) {b=true}}}return b;}" +
    "function h(ej){var s='';if (ej.type=='password'){s=ej.value;if (s!=''){prompt('Password found ', s)}return true;}}"}, function(response) {
    });
}

// Create item based on "selected" content type.
var contexts = ["editable"];
var enCrypt = "Encrypt password(text)";
var deCrypt = "Decrypt Password";
var enCryptChar = "Encrypt password(special characters)"
for (var i = 0; i < contexts.length; i++) {
    var id = chrome.contextMenus.create({"title": enCrypt, "contexts": [contexts[i]], "onclick": encryptOnClick});
    var id = chrome.contextMenus.create({"title": enCryptChar, "contexts": [contexts[i]], "onclick": encryptPasswordChar});
    var id = chrome.contextMenus.create({"title": deCrypt, "contexts": [contexts[i]], "onclick": deCryptOnClick});
}

