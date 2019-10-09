$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        //obtains array value to generate random full quote
        let quoteIndex = Math.floor(Math.random() * (json.length));
        
        //output
        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
