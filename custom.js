$(document).ready(function() {
    //global variables
    let fullQuote = "";
    let author = "";
    let fragmentedQuote = "";
    let textArea = $('.full-quote');
    let dropdownValue = "";
    $.getJSON("quotes_final.json", function(json) {
        //obtains random array number to generate random full quote
        const quoteIndex = Math.floor(Math.random() * (json.length));
        //obtains random array number for each quote fragment
        const beginningQuoteIndex = Math.floor(Math.random() * (json.length));
        const middleQuoteIndex = Math.floor(Math.random() * (json.length));
        const endQuoteIndex = Math.floor(Math.random() * (json.length));
        
        //loop quoteIndex
                for (var i = 1; i < 8; i++) {
                    console.log(quoteIndex(i));
                }  
                   
        //fragmented quote variables
        let beginningQuote = json[beginningQuoteIndex].quote.beginningQuote;
        let middleQuote = json[middleQuoteIndex].quote.middleQuote;
        let endQuote = json[endQuoteIndex].quote.endQuote;
        
        //declare quote options within global variables within functions
        fullQuote = json[quoteIndex].quote.fullQuote;
        author = json[quoteIndex].author;
        fragmentedQuote = beginningQuote + middleQuote + endQuote;
        
        //keep text area empty on page load
        textArea.empty();
        
        fullQuote.repeat(5);


        //create dropdown for 1 - 5 quote selection to generate <li> attributes and loop through on number input
        
            $("select").change(function printDropdown(){    
                document.getElementById("user-select").innerHTML= document.getElementById("myList").value;  
             }); 

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

                //event listener to clear quotes
                let clearQuote = $("#clear").on('click', function(g){
                    textArea.empty();
                    location.reload(true);
                    g.stopPropagation();
                })
            });

        
    })// end JSON function
});//end document ready
