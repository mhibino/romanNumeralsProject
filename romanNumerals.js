$(document).ready(function() {

  $('#converter').submit(function() {                               // on submit button or return
    $('#roman').empty();                                            // clear result 
    $('#error').empty();                                            // clear error message
    var number = $('#number').val();                                // get number from input
    if (isNaN(number) || number == 0) {                             // validate input as number 
      $('#error').text("You must enter a number");                  // display error message
    } else if (number > 3999999) {                                     // validate upper range limit
      $('#error').text("This generator only evaluates numbers up to 3,999,999 because that is the largest number that can be expressed using Roman Numerals."); // display error message      
    } else {
      var romanNumeral = convert(number);
      // if (number < 4000) {
      //   $('#roman').append("<span class='red'>" + number + "</span>" +
      //     "<span class='label'> converts to </span>" + 
      //     "<span class='red'>" + romanNumeral + "</span>");         // update result

      // } else if (number > 3999 && number < 4000000) {
      $('#roman').append("<span class='red'>" + number + "</span>" +
          "<span class='label'> converts to </span>" + 
          "<span class='red'>" + romanNumeral + "</span>");       // update result

      // }                          // convert number to roman numeral
      
    }
    $('#number').val('');                                           // reset input field    
    return false;                                                   // prevent page from refreshing
  });
});