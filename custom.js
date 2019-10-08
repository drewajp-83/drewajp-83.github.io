$(document).ready(function(){
    $.getJSON("quotes_final.json", function(json) {
        let quoteIndex = 0;
        quoteIndex = Math.random() * (json.length - 0) + 0;
        quoteIndex = quoteIndex.toFixed(0);
            console.log(json.length); 
            console.log(quoteIndex);
        })
});
