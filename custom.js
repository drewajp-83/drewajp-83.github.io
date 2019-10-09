$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        let quoteIndex = Math.floor(Math.random() * (json.length));
        let beginQuote = Math.floor(Math.random() * (json.[quoteIndex].quote.length));
        console.log(json[beginQuote]);

        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
