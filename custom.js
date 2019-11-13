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
	document.location.reload()
}

function handleSelectChange(){
	//create dropdown for 1 - 5 quote selection to generate <li> attributes and loop through on number input
    $("#myList").change(function printDropdown(){
        quoteCount = $("#myList").val();
	  if (quoteCount == 1){
	  for(let i = 0; i < 1; i++){
	  	handleQuoteButtonsClick(i);
	      }
	  } else {
	  //loop through quote button handler according to the users input
	  for(let j = 0; j < quoteCount - 1; j++){
	  	handleQuoteButtonsClick(j);
	  console.log(j);
         }
	}
     });
}

function handleQuoteButtonsClick(){
	if (quoteCount == 0){
		alert('Please select the number of Quotes first!');
		return;
	}

	textArea.empty();
	$("#original-quote, #mixed-quote").on('click', function(){
		if (this.id == 'original-quote') {
		      whichQuote = true;
		      handleAJAX_JSON();
		      textArea.append('<ul><li>' + fullQuote + '</li><li>' + author + '</li></ul>');
		} else if (this.id == 'mixed-quote') {
		      whichQuote = false;
		      handleAJAX_JSON();
		      textArea.append('<p>' + fragmentedQuote + '</p>');
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
	
    //output returned quotes
    /*if (whichQuote == true) {
        textArea.append('<ul><li>' + fullQuote + '</li><li>' + author + '</li></ul>');
    } else {
        textArea.append('<p>' + fragmentedQuote + '</p>');
    }*/
}







