
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage
  $('.saveBtn').click(function() {
    alert('saved')
  });
  $('.description').keydown((e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function updateTime() {
    $('#currentDay').html(moment().format('MMMM Do YYYY, h:mma'))
    //current time is converted to a number by parseInt
    var currentTime = parseInt(moment().format('H'))
    var timeBlock = $('.time-block')
    
    for (var i = 0; i < timeBlock.length; i++) {
      var elementID = document.getElementById(timeBlock[i].id)
      $(timeBlock[i].id).removeClass(".present .past .future");
      
      //convert id into number value by replacing the 'hour-' to '' and parseInt
      if (parseInt($(timeBlock[i]).attr('id').replace('hour-','')) < currentTime) {
        $(elementID).addClass("past");
        localStorage.clear();
      } else if (parseInt($(timeBlock[i]).attr('id').replace('hour-','')) > currentTime) {
        $(elementID).addClass("future");
      } else if (parseInt($(timeBlock[i]).attr('id').replace('hour-','')) === currentTime) {
        $(elementID).addClass("present");
      }
    }
    // console.log(parseInt($(timeBlock[5]).attr('id').replace('hour-','')))
  }
  // console.log(parseInt(moment().format('H')))
  updateTime(); 
  setInterval(function() {
    updateTime();
  },6000);
});
