$(document).ready(function(){
    $.getJSON("quotes_final.json", function(json) {
            console.log(json.author); 
        })
});
