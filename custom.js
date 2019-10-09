$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        let quoteIndex = Math.floor(Math.random() * (json.length));
        const beginningQuote = json.quote.beginningQuote(beginningQuote);
        console.log(beginningQuote);

        $(".full-quote").html(json[quoteIndex].quote);
        $(".author").html(json[quoteIndex].author);
    })
});
