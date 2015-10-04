var self = require('sdk/self');
var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");
var selection = require("sdk/selection");

var contextMenu = contextMenu.Item({
        label: "Wikipedia Search",
        context: contextMenu.SelectionContext(),
        contentScript: 'self.on("click", function () { self.postMessage(); });',
        onMessage: function () {
           tabs.open("https://en.wikipedia.org/w/index.php?search="+selection.text+"&title=Special%3ASearch&fulltext=Search");
        }
    });
