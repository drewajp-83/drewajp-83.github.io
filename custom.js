$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        //obtains array value to generate random full quote
        let quoteIndex = Math.floor(Math.random() * (json.length));

        //generate random number for each quote fragment
        let beginningQuoteIndex = Math.floor(Math.random() * (json.length));
        let middleQuoteIndex = Math.floor(Math.random() * (json.length));
        let endQuoteIndex = Math.Math.floor(Math.random() * (json.length));
        console.log(quoteIndex);
        console.log(beginningQuoteIndex);
        console.log(middleQuoteIndex);
        console.log(endQuoteIndex);
        
        //output
        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
