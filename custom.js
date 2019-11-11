//global variables
let fullQuote = "";
let author = "";
let fragmentedQuote = "";
let dropdownValue = "";
const textArea = $('.full-quote');
const fileURL = "quotes_final.json";
let quoteCount = 0;
let whichQuote = true; // default for original quote else mixed quote

function handleAJAX_JSON(){

    $.ajax({
      crossDomain: true,  
      dataType: "json",
      method: "GET",
      url: fileURL,
      success: function(data){
			generateQuote(data, data.length); //the data call is pushed into the generateQuote parameters to handle the dot notation logic
      	},
      error: function () {
        console.log('there is an error reading parsing the json file');
      },
    });

}

function handleClearQuote(){
	textArea.empty();
}

function handleSelectChange(){
	//create dropdown for 1 - 5 quote selection to generate <li> attributes and loop through on number input
    $("#myList").change(function printDropdown(){
        quoteCount = $("#myList").val();
     });
}

function handleQuoteButtonsClick(){
	if (quoteCount < 1){
		alert('Please select the number of Quotes first!');
		return;
	}

	textArea.empty();
	$("#original-quote, #mixed-quote").on('click', function(){
		if (this.id == 'original-quote') {
		      whichQuote = true;
		      handleAJAX_JSON();
		} else if (this.id == 'mixed-quote') {
		      whichQuote = false;
		      handleAJAX_JSON();
		}
	});

}

function generateQuote(json_data, json_len){
	// json_len = json_data.length;
	//obtains random array number to generate random full quote
    let quoteIndex = Math.floor(Math.random() * (json_len));

    //obtains random array number for each quote fragment
    let beginningQuoteIndex = Math.floor(Math.random() * (json_len));
    let middleQuoteIndex = Math.floor(Math.random() * (json_len));
    let endQuoteIndex = Math.floor(Math.random() * (json_len));
            
    //fragmented quote variables
    let beginningQuote = json_data[beginningQuoteIndex].quote.beginningQuote;
    let middleQuote = json_data[middleQuoteIndex].quote.middleQuote;
    let endQuote = json_data[endQuoteIndex].quote.endQuote;

    //declare quote options within global variables within functions
    fullQuote = json_data[quoteIndex].quote.fullQuote;
    author = json_data[quoteIndex].author;
    fragmentedQuote = beginningQuote + middleQuote + endQuote
	
    //loop through with handleSelectChange value
	
    //output returned quotes
    if (whichQuote == true) {
        textArea.append('<ul><li>' + fullQuote + '</li><li>' + author + '</li></ul>');
    } else {
        textArea.append('<ul><li>' + fragmentedQuote + '</li></ul>');
    }
}
let runQuery = function(){
	for(let i = 0; i < quoteCount; i++){
	return generateQuote[i];
    }
}

console.log(runQuery);




