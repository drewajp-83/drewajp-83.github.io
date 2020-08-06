/**
 * GLOBAL VARIABLES
 */

const textArea = $('#quote-body');
const fileURL = "quotes_final.json";


let fullQuote = "";
let author = "";
let fragmentedQuote = "";
let dropdownValue = "";
let quoteCount = 0;
let whichQuote = true; // default for original quote else mixed quote


function handleAJAX_JSON() {

    $.ajax({
        crossDomain: true,
        dataType: "json",
        method: "GET",
        url: fileURL,
        success: function(data) {
            for (let i = 0; i < quoteCount; i++)
            {generateQuote(data, data.length);} //the data call is pushed into the generateQuote parameters to handle the dot notation logic
        },
        error: function() {
            console.log('there is an error reading parsing the json file');
        },
    });

}

$("#select-list").change(function printDropdown() {
    quoteCount = parseInt($("#select-list").val());
});

function handleQuoteButtonsClick() {
    textArea.html('');
    //console.log(typeof quoteCount);
    if (quoteCount <= 0 || typeof quoteCount === 'undefined') {
        alert('Please select the number of quotes from the dropdown box');
        return;
    }
        if (document.getElementById('original_quote').checked) {
            whichQuote = true;
            handleAJAX_JSON();
            //console.log('Original Quote');
        } else if (document.getElementById('mixed_quote').checked) {
            whichQuote = false;
            handleAJAX_JSON();
            //console.log('Mixed Quote');
        }
}

function generateQuote(json_data, json_len) {
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
    
    //output returned quote
    if (whichQuote == true) {
        textArea.append('<ul><li>"' + fullQuote + '"</li><li>' + author + '</li></ul>');
    } else {
        textArea.append(`<ul><li>" ${fragmentedQuote}" </li></ul>`);
    }
}
