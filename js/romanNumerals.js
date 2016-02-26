$(document).ready(function() {

  $('#converter').submit(function() {                               // on submit button or return
    $('#roman').empty();                                            // clear result 
    $('#error').empty();                                            // clear error message
    var number = $('#number').val();                                // get number from input
    if (isNaN(number) || number == 0) {                             // validate input as number 
      $('#error').text("You must enter a number");                  // display error message
    } else if (number > 3999999) {                                     // validate upper range limit
      $('#error').text("This generator only handles numbers up to 3,999,999 due to limitations of the vinculum (overline), which indicates multiplication by 1000."); // display error message      
    } else {
      var romanNumeral = convert(number);
      $('#roman').append("<span class='red'>" + number + "</span>" +
          "<span class='label'> converts to </span>" + 
          "<span class='red'>" + romanNumeral + "</span>");         // convert number to roman numeral
    }
    $('#number').val('');                                           // reset input field    
    return false;                                                   // prevent page from refreshing
  });
});
