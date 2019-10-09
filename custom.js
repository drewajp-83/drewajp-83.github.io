$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        const quoteData = json;
        console.log(quoteData);
        console.log(quoteData.quote);
        let quoteIndex = Math.floor(Math.random() * (json.length));

        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
