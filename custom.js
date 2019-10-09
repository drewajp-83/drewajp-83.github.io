$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        console.log(json[0].quote);
        let quoteIndex = Math.floor(Math.random() * (json.length));

        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
