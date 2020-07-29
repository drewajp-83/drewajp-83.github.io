var JSONdata = [{
        "quote": {
            "fullQuote": "The way to get started is to quit talking and begin doing.",
            "beginningQuote": "The way to get started",
            "middleQuote": " is to quit talking",
            "endQuote": " and begin doing."
        },
        "author": "Walt Disney"
    },
    {
        "quote": {
            "fullQuote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            "beginningQuote": "Spread love everywhere you go",
            "middleQuote": " let no one ever come to you",
            "endQuote": " without leaving happier."
        },
        "author": "Mother Theresa"
    },
    {
        "quote": {
            "fullQuote": "Don't judge each day by the harvest you reap, but by the seeds that you plant.",
            "beginningQuote": "Don't judge each day by",
            "middleQuote": " the harvest you reap",
            "endQuote": ", but by the seeds that you plant."
        },
        "author": "Robert Louis Stevenson"
    },
    {
        "quote": {
            "fullQuote": "The future belongs to those who believe in the beauty of their dreams.",
            "beginningQuote": "The future belongs",
            "middleQuote": " to those who believe in the beauty",
            "endQuote": " of their dreams."
        },
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": {
            "fullQuote": "It is during our darkest moments that we must focus to see the light.",
            "beginningQuote": "It is during our darkest moments",
            "middleQuote": " that we must focus",
            "endQuote": " to see the light."
        },
        "author": "Aristotle"
    },
    {
        "quote": {
            "fullQuote": "Whoever is happy will make others happy too.",
            "beginningQuote": "Whoever is happy",
            "middleQuote": " will make others",
            "endQuote": " happy too."
        },
        "author": "Anne Frank"
    },
    {
        "quote": {
            "fullQuote": "Never let the fear of striking out keep you from playing the game.",
            "beginningQuote": "Never let the fear of striking out",
            "middleQuote": " keep you from",
            "endQuote": " playing the game."
        },
        "author": "Babe Ruth"
    },
    {
        "quote": {
            "fullQuote": "Life is either a daring adventure or nothing at all.",
            "beginningQuote": "Life is either",
            "middleQuote": " a daring adventure or",
            "endQuote": " nothing at all."
        },
        "author": "Helen Keller"
    },
    {
        "quote": {
            "fullQuote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
            "beginningQuote": "Many of life's failures are people",
            "middleQuote": " who did not realize how close they were",
            "endQuote": " to success when they gave up."
        },
        "author": "Thomas Edison"
    },
    {
        "quote": {
            "fullQuote": "Life is a succession of lessons which must be lived to be understood",
            "beginningQuote": "Life is a succession of lessons",
            "middleQuote": " which must be lived",
            "endQuote": " to be understood."
        },
        "author": "Ralph Waldo Emerson"
    }

]

/**
 * GLOBAL VARIABLES
 */
let fullQuote, author, fragmentedQuote, dropdownValue, quoteCount, whichQuote;

const textArea = $('#quote-body');
const fileURL = "quotes_final.json";
const quoteToggle = $('#quote-toggle');

//console.log(quoteToggle.checked);

//init();

/**
 * Initialise and pass variable values upon page load
 */
window.init() => {
    let fullQuote = "";
    let author = "";
    let fragmentedQuote = "";
    let dropdownValue = "";
    let quoteCount = 0;
    let whichQuote = true; // default for original quote else mixed quote
}

function handleAJAX_JSON() {

    $.ajax({
        crossDomain: true,
        dataType: "json",
        method: "GET",
        url: fileURL,
        success: function(data) {
            generateQuote(data, data.length); //the data call is pushed into the generateQuote parameters to handle the dot notation logic
        },
        error: function() {
            console.log('there is an error reading parsing the json file');
        },
    });

}

    $("#select-list").change(function printDropdown() {
        quoteCount = $("#select-list").val();    
        //console.log(quoteCount);
                
        //loop through quote button handler according to the users input
            for (let i = 0; i < quoteCount; i++) {
            handleQuoteButtonsClick(i);
            console.log(i);
         }
    });

function handleQuoteButtonsClick() {
    if (quoteCount <= 0 || typeof === 'undefined') {
        alert('Please select the number of Quotes first!');
        return;
    }

    $("#original-quote, #mixed-quote").on('click', function() { //needs changing to toggle switch ids
        if (this.id == 'original-quote') {
            whichQuote = true;
            handleAJAX_JSON();
        } else if (this.id == 'mixed-quote') {
            whichQuote = false;
            handleAJAX_JSON();
        }
    });

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

    //output returned quotes
    if (whichQuote == true) {
        textArea.append('<ul><li>' + fullQuote + '</li><li>' + author + '</li></ul>');
    } else {
        textArea.append('<ul><li>' + fragmentedQuote + '</li></ul>');
    }
}
