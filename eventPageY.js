var menuItem ={
	"id": "YS",
	"title": "YouTube Search",
	"contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str){
	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "YS" && clickData.selectionText){
		var youtubeUrl ="https://www.youtube.com/results?search_query=" + fixedEncodeURI(clickData.selectionText);
		var createData = {
			"url": youtubeUrl,
			"type": "popup",
			"top": 5,
			"left": 5,
			"width": screen.availHeight/2,
			"height": screen.availHeight/2
		};
		chrome.windows.create(createData, function(){});
	}
});