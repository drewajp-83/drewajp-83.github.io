$(document).ready(function() {
    //global variables
    let fullQuote = "";
    let author = "";
    let fragmentedQuote = "";
    let textArea = $('.full-quote');
    let dropdownValue = "";
    $.getJSON("quotes_final.json", function(json) {

                function createQuote(full, begin, mid, end) {

                    //randomly selecting sentence fragments
                    let fullIndex = Math.floor(Math.random() * full.length);
                    let beginIndex = Math.floor(Math.random() * begin.length);
                    let midIndex = Math.floor(Math.random() * mid.length);
                    let endIndex = Math.floor(Math.random() * end.length);
                    
                    let beginningQuote = begin[beginIndex];
                    let middleQuote = mid[midIndex];
                    let endQuote = end[endIndex];

                //assembles quote
                    fullQuote = '"' + beginningQuote + middleQuote + end + '"';

                    console.log(beginningQuote);
                }
        
      
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

        
    })// end JSON function
});//end document ready
