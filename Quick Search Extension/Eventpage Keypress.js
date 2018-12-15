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

// document.onkeypress=function(event){
//     keyCode = event.keyCode;
//     switch(keyCode){
//         case 103:
//             window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
//             break;
//         case 71:
//             window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
//             break;
//         case 121:
//             window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
//             break;
//         case 89:
//             window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
//             break;
//         case 100:
//             window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
//             break;
//         case 68:
//             window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
//             break;
// 	}
// };


// 	if (clickData.menuItemId == "GS" && clickData.selectionText){
// 		var googleUrl ="https://www.google.com/search?q=" + fixedEncodeURI(clickData.selectionText);
// 		var createData = {
// 			"url": googleUrl,
// 			"type": "popup",
// 			"top": 5,
// 			"left": 5,
// 			"width": screen.availHeight/2,
// 			"height": screen.availHeight/2
// 		};
// 		chrome.windows.create(createData, function(){});
// 	}
// 	if (clickData.menuItemId == "WS" && clickData.selectionText){
// 		var wikiUrl ="https://www.youtube.com/results?search_query=" + fixedEncodeURI(clickData.selectionText);
// 		var createData = {
// 			"url": wikiUrl,
// 			"type": "popup",
// 			"top": 5,
// 			"left": 5,
// 			"width": screen.availHeight/2,
// 			"height": screen.availHeight/2
// 		};
// 		chrome.windows.create(createData, function(){});
// 	}
// 	if (clickData.menuItemId == "DS" && clickData.selectionText){
// 		var duckUrl ="https://duckduckgo.com/?q=" + fixedEncodeURI(clickData.selectionText);
// 		var createData = {
// 			"url": duckUrl,
// 			"type": "popup",
// 			"top": 5,
// 			"left": 5,
// 			"width": screen.availHeight/2,
// 			"height": screen.availHeight/2
// 		};
// 		chrome.windows.create(createData, function(){});
// 	}
// 	// if (clickData.menuItemId == "UCS" && clickData.selectionText){
// 	// 	var youtubeUrl ="https://www.youtube.com/results?search_query=" + fixedEncodeURI(clickData.selectionText);
// 	// 	var createData = {
// 	// 		"url": youtubeUrl,
// 	// 		"type": "popup",
// 	// 		"top": 5,
// 	// 		"left": 5,
// 	// 		"width": screen.availHeight/2,
// 	// 		"height": screen.availHeight/2
// 	// 	};
// 	// 	chrome.windows.create(createData, function(){});
// 	// }
// });



// document.onkeypress=function(event){
//     keyCode = event.keyCode;
//     switch(keyCode){
//         case 103:
//             window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
//             break;
//         case 71:
//             window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
//             break;
//         case 121:
//             window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
//             break;
//         case 89:
//             window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
//             break;
//         case 100:
//             window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
//             break;
//         case 68:
//             window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
//             break;
// 	}
// };



// chrome.contextMenus.create(menuItem);

// function fixedEncodeURI (str){
// 	return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
// }

// chrome.contextMenus.onClicked.addListener(function(clickData){
// 	if (clickData.menuItemId == "YS" && clickData.selectionText){
// 		var youtubeUrl ="https://www.youtube.com/results?search_query=" + fixedEncodeURI(clickData.selectionText);
// 		var createData = {
// 			"url": youtubeUrl,
// 			"type": "popup",
// 			"top": 5,
// 			"left": 5,
// 			"width": screen.availHeight/2,
// 			"height": screen.availHeight/2
// 		};
// 		chrome.windows.create(createData, function(){});
// 	}

// });