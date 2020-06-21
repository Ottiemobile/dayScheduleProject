
var enterDay = function() { 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
}


//when item is clicked
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var userInput = $(this).siblings("textarea").val();
    var hourId = $(this).parent().attr("id");
    console.log(hourId)
    localStorage.setItem(hourId, userInput);
});

var enterTask = function(){
    $("#9").children("textarea").val(localStorage.getItem("9"));

    $("#10").children("textarea").val(localStorage.getItem("10"));

    var hour11 = localStorage.getItem("11")
    $("#11").children("textarea").val(hour11);

    var hour12 = localStorage.getItem("12")
    $("#12").children("textarea").val(hour12);

    var hour13 = localStorage.getItem("13")
    $("#13").children("textarea").val(hour13);

    var hour14 = localStorage.getItem("14")
    $("#14").children("textarea").val(hour14);

    var hour15 = localStorage.getItem("15")
    $("#15").children("textarea").val(hour15);

    var hour16 = localStorage.getItem("16")
    $("#16").children("textarea").val(hour16);

    var hour17 = localStorage.getItem("17")
    $("#17").children("textarea").val(hour17);
}

var colorChange = function(){
    var currentHr = moment().hours();
    console.log(currentHr);
    $(".time-block").each(function(_index,element){
        var calendarHrString = $(this).attr("id");
        var calendarHr = parseInt(calendarHrString);
        console.log(calendarHrString);
     /*   var currentHrString = moment().format("H");
        
        calendarHr = parseInt(calendarHrString);
        currentHr = parseInt(currentHrString); 

        console.log({calendarHr, currentHr});
    */
   
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").removeClass("present");
        $(this).children("textarea").removeClass("future");
        if (currentHr > calendarHr) {
           $(this).children("textarea").addClass("past");
        } else if (currentHr === calendarHr){
            $(this).children("textarea").addClass("present");
        } else {
            $(this).children("textarea").addClass("future");
        }
    }
    )
};

 

enterTask();
setInterval(enterDay, 1000);
colorChange();