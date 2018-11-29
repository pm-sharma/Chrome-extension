var menuItem = {
	"id": "BS",
	"title": "Bing Search",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str){
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "BS" && clickData.selectionText){
		var bingUrl = "https://www.bing.com/search?q=" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": bingUrl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availHeight/2,
			"height": screen.availHeight/2
		};
		chrome.windows.create(createData, function(){

		});
	}
});