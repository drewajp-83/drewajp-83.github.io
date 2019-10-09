$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        let quoteIndex = Math.floor(Math.random() * (json.length));
        let beginQuote = Math.floor(Math.random() * (json[quoteIndex].quote.length));
        console.log(beginQuote);

        $(".full-quote").html(json[quoteIndex].quote);
        $(".author").html(json[quoteIndex].author);
    })
});
