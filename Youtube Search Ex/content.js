console.log("Chrome Extension GO");

document.onkeypress=function(event){
    keyCode = event.keyCode;
    Console.log(keycode);
    switch(keyCode){
        
        case 103:
            window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
            console.log("in");
            break;
        case 71:
            window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
            console.log("in");
            break;
        case 121:
            window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
            console.log("in");
            break;
        case 89:
            window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
            console.log("in");
            break;
        case 100:
            window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
            console.log("in");
            break;
        case 68:
            window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
            console.log("in");
            break;
	}
};
console.log("Chrome Extension u ");
