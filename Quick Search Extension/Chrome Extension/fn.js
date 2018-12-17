
document.addEventListener('mouseup',function(){
    var thetext = getSelection()
    if(thetext.toString().length > 0){
        document.onkeypress=function(event){
        keyCode = event.keyCode;
        switch(keyCode){
        case 103:
            window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
            break;
        case 71:
            window.open('https://www.google.com/search?q=' + window.getSelection().toString(), '_blank');
            break;
        case 121:
            window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
            break;
        case 89:
            window.open('https://www.youtube.com/results?search_query=' + window.getSelection().toString(), '_blank');
            break;
        case 100:
            window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
            break;
        case 68:
            window.open('https://duckduckgo.com/?q=' + window.getSelection().toString(), '_blank');
            break;
    }
};
}

    
}, false)

