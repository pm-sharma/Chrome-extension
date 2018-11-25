var menuItem ={
	"id": "WikiS",
	"title": "WikiPedia Search",
	"contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str){
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "WikiS" && clickData.selectionText){
		var wikiUrl ="https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": wikiUrl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availHeight/2,
			"height": screen.availHeight/2
		};
		chrome.windows.create(createData, function(){});
	}
});
