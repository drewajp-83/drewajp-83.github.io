$(document).ready(function(){
    $.getJSON("quotes_final.json", function(json) {
        let quoteIndex = Math.floor(math.random() * (json.length));
            console.log(json.length); 
            console.log(quoteIndex);
        })
});
