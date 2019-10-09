$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        //obtains array value to generate random full quote
        let quoteIndex = Math.floor(Math.random() * (json.length));

        //loop through object to get nested values
        for (let i = 0; i < json.length; i++) {
            let beginningQuoteIndex = Math.floor(Math.random() * (json[i].quote.beginningQuote.length));
            let middleQuoteIndex = Math.floor(Math.random() * (json[i].quote.middleQuote.length));
            let endQuoteIndex = Math.floor(Math.random() * (json[i].quote.endQuote.length));
            console.log(beginningQuoteIndex);
        }

        //output
        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
