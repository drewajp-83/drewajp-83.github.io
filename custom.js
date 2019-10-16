$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        //global variables
        let fullQuote = "";
        let author = "";
        let fragmentedQuote = "";
        //obtains random array number to generate random full quote
        const quoteIndex = Math.floor(Math.random() * (json.length));
        //obtains random array number for each quote fragment
        const beginningQuoteIndex = Math.floor(Math.random() * (json.length));
        const middleQuoteIndex = Math.floor(Math.random() * (json.length));
        const endQuoteIndex = Math.floor(Math.random() * (json.length));

        //output
        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
        $(".quote-fragments").html(json[beginningQuoteIndex].quote.beginningQuote + " " +
            json[middleQuoteIndex].quote.middleQuote + " " + json[endQuoteIndex].quote.endQuote);

        //create dropdown for fullquote or mixed quote selection. Wrap outputs for each instance in functions and call on selection

        //create dropdown for 1 - 5 quote selection to generate <li> attributes and loop through on number input

        //event listener to generate quotes

        //event listener to clear quotes

    })
});
