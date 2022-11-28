$(function () {
  $('.saveBtn').on("click", function(event) {
    var input = event.target.parentElement.children[1].value
    var keyOfInput = event.target.parentElement.children[0].innerText
    localStorage.setItem(keyOfInput, input)
  });
  //on refresh load data stored in localStorage
  $(document).ready(function () {
    var timeBlock = $('.time-block')
    if(localStorage["9AM"] !== null && localStorage["9AM"] !== undefined) {
      timeBlock[0].children[1].append(localStorage.getItem(["9AM"]))
    }
    if(localStorage["10AM"] !== null && localStorage["10AM"] !== undefined) {
      timeBlock[1].children[1].append(localStorage.getItem(["10AM"]))
    }
    if(localStorage["11AM"] !== null && localStorage["11AM"] !== undefined) {
      timeBlock[2].children[1].append(localStorage.getItem(["11AM"]))
    }
    if(localStorage["12PM"] !== null && localStorage["12PM"] !== undefined) {
      timeBlock[3].children[1].append(localStorage.getItem(["12PM"]))
    }
    if(localStorage["1PM"] !== null && localStorage["1PM"] !== undefined) {
      timeBlock[4].children[1].append(localStorage.getItem(["1PM"]))
    }
    if(localStorage["2PM"] !== null && localStorage["2PM"] !== undefined) {
      timeBlock[5].children[1].append(localStorage.getItem(["2PM"]))
    }
    if(localStorage["3PM"] !== null && localStorage["3PM"] !== undefined) {
      timeBlock[6].children[1].append(localStorage.getItem(["3PM"]))
    }
    if(localStorage["4PM"] !== null && localStorage["4PM"] !== undefined) {
      timeBlock[7].children[1].append(localStorage.getItem(["4PM"]))
    }
    if(localStorage["5PM"] !== null && localStorage["5PM"] !== undefined) {
      timeBlock[8].children[1].append(localStorage.getItem(["5PM"]))
    }
  });
  
  // code to display the current date in the header of the page 
  // color of scheduler changes due to current time
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
      } else if (parseInt($(timeBlock[i]).attr('id').replace('hour-','')) > currentTime) {
        $(elementID).addClass("future");
      } else if (parseInt($(timeBlock[i]).attr('id').replace('hour-','')) === currentTime) {
        $(elementID).addClass("present");
      }
    }
  }
  // updates time in an interval of 10000 ms to keep time running live.
  updateTime(); 
  setInterval(function() {
    updateTime();
  },60000);
});