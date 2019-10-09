$(document).ready(function() {
    $.getJSON("quotes_final.json", function(json) {
        //obtains array value to generate random full quote
        let quoteIndex = Math.floor(Math.random() * (json.length));
        
        //loop through object to get nested values
        let nestedValues = ["quote.beginningQuote", "quote.middleQuote", "quote.endQuote"];

        for (let i = 0; i < nestedValues.length; i++) {
            console.log(nestedValues[i]);
        }
        
        //output
        $(".full-quote").html(json[quoteIndex].quote.fullQuote);
        $(".author").html(json[quoteIndex].author);
    })
});
