$(document).ready(function() {
    //global variables
    let fullQuote = "";
    let author = "";
    let fragmentedQuote = "";
    let textArea = $('.full-quote');
    $.getJSON("quotes_final.json", function(json) {
        //obtains random array number to generate random full quote
        const quoteIndex = Math.floor(Math.random() * (json.length));
        //obtains random array number for each quote fragment
        const beginningQuoteIndex = Math.floor(Math.random() * (json.length));
        const middleQuoteIndex = Math.floor(Math.random() * (json.length));
        const endQuoteIndex = Math.floor(Math.random() * (json.length));
        
        //fragmented quote variables
        let beginningQuote = json[beginningQuoteIndex].quote.beginningQuote;
        let middleQuote = json[middleQuoteIndex].quote.middleQuote;
        let endQuote = json[endQuoteIndex].quote.endQuote;
        
        //declare quote options within global variables
        fullQuote = json[quoteIndex].quote.fullQuote;
        author = json[quoteIndex].author;
        fragmentedQuote = beginningQuote + middleQuote + endQuote;
        
        //keep text area empty on page load
        textArea.empty();
     

        //create dropdown for 1 - 5 quote selection to generate <li> attributes and loop through on number input

        //event listener to generate quotes
        
            $(function(){
                let originalQuote = $("#original-quote").on('click', function(e){
                    textArea.append('<ul><li>' + fullQuote + '</li><li>' + author + '</li></ul>');
                    e.stopPropagation();
                })
                let mixedQuote = $("#mixed-quote").on('click', function(f){
                    textArea.append('<ul><li>' + fragmentedQuote + '</li></ul>');
                    f.stopPropagation();
                })
                //unbind events
                    originalQuote('click', function(h){
                        mixedQuote.off();
                        h.stopPropagation();
                    })
                    mixedQuote('click', function(j){
                        originalQuote.off();
                        j.stopPropagation();
                    });
                //event listener to clear quotes
                let clearQuote = $("#clear").on('click', function(g){
                    textArea.empty();
                    g.stopPropagation();
                })
            });
    })// end JSON function
});//end document ready
