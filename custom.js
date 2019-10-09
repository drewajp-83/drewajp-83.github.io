$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        const quoteData = json;
        console.log(quoteData);
        let quoteIndex = Math.floor(Math.random() * (json.length));

        $(".full-quote").html(json[quoteIndex].quote.beginningQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
