$(document).ready(function() {
    //global variables
    let fullQuote = "";
    let author = "";
    let fragmentedQuote = "";
    let textArea = $('.full-quote');
    let dropdownValue = "";
    //$.getJSON("quotes_final.json", function(json) {initialise JSON call
    function setUp(){
        loadJSON("quotes_final.json", getData);
    }
    function getData(json){
        console.log(json);
    }
    // 
        //obtains random array number to generate random full quote
        let quoteIndex = Math.floor(Math.random() * (json.length));
        //obtains random array number for each quote fragment
        let beginningQuoteIndex = Math.floor(Math.random() * (json.length));
        let middleQuoteIndex = Math.floor(Math.random() * (json.length));
        let endQuoteIndex = Math.floor(Math.random() * (json.length));
                
            //fragmented quote variables
            let beginningQuote = json[beginningQuoteIndex].quote.beginningQuote;
            let middleQuote = json[middleQuoteIndex].quote.middleQuote;
            let endQuote = json[endQuoteIndex].quote.endQuote;

            //declare quote options within global variables within functions
            fullQuote = json[quoteIndex].quote.fullQuote;
            author = json[quoteIndex].author;
            fragmentedQuote = beginningQuote + middleQuote + endQuote;
            
            console.log(fullQuote);
            console.log(author);
            console.log(fragmentedQuote);
        });
        
        //loop through quote
        
      
        //keep text area empty on page load
        textArea.empty();
        

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

        
    //})// end JSON function
//});//end document ready
