$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        let quoteIndex = Math.floor(Math.random() * (json.length));
        console.log(json[quoteIndex]);

        $(".full-quote").html(json[quoteIndex].fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
