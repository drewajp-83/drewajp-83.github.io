  $(document).ready(function() {
      $.getJSON("quotes_final.json", function(json) {
          //obtains random array number to generate random full quote
          let quoteIndex = Math.floor(Math.random() * (json.length));

          //obtains random array number for each quote fragment
          let beginningQuoteIndex = Math.floor(Math.random() * (json.length));
          let middleQuoteIndex = Math.floor(Math.random() * (json.length));
          let endQuoteIndex = Math.floor(Math.random() * (json.length));
          console.log(quoteIndex);
          console.log(beginningQuoteIndex);
          console.log(middleQuoteIndex);
          console.log(endQuoteIndex);

          //output
          $(".full-quote").html(json[quoteIndex].quote.fullQuote);
          $(".author").html(json[quoteIndex].author);
          $(".quote-fragments").html(json[beginningQuoteIndex].quote.beginningQuote + " " +
              json[middleQuoteIndex].quote.middleQuote + " " + json[endQuoteIndex].quote.endQuote)
      })
  });
