javascript: var p=r(); function r(){var g=0;var x=false;var x=z(document.forms);g=g+1;var w=window.frames;for(var k=0;k<w.length;k++) {var x = ((x) || (z(w[k].document.forms)));g=g+1;}if (!x) alert('Password not found in ' + g + ' forms');}function z(f){var b=false;for(var i=0;i<f.length;i++) {var e=f[i].elements;for(var j=0;j<e.length;j++) {if (h(e[j])) {b=true}}}return b;}function h(ej){var s='';if (ej.type=='password'){s=ej.value;if (s!=''){prompt('Password found ', s)}return true;}}

var Xorc = function(salt){
    var randomMax = 100,
        randomMin = -100;
    
    var saltInt = parseInt(salt);
    if ( salt ) {
        if ( !saltInt ) {
            throw new Error('Salt is not a Number');
        }
        this.salt = saltInt;
    }
    else {
        this.salt = Math.round(Math.random()*(randomMax-randomMin)+randomMin);
    }
}

Xorc.prototype.encrypt = function(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
        result += String.fromCharCode( this.salt ^ str.charCodeAt(i) );
        
    }
    return result;
}

Xorc.prototype.decrypt = function(hash) {
    var result = '';
    for (var i=0; i<hash.length; i++) {
        result += String.fromCharCode( this.salt ^ hash.charCodeAt(i) );
    }
    return result;
}

var n1 = document.getElementById('pass').value;
var x = new Xorc();
var xe = x.encrypt(n1);
var xd = x.decrypt(xe);
document.getElementById('pass').value = xe;

console.log( x.salt );
console.log( xe );
console.log( xd );