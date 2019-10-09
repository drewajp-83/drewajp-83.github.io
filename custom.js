$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        
        let quoteIndex = Math.floor(Math.random() * (json.length));

        $(".full-quote").html(json[quoteIndex].quote.beginningQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
