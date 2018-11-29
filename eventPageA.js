var menuItem ={
	"id": "AS",
	"title": "Amazon Search",
	"contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str){
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "AS" && clickData.selectionText){
		var amazonUrl ="https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": amazonUrl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availHeight/2,
			"height": screen.availHeight/2
		};
		chrome.windows.create(createData, function(){});
	}
});