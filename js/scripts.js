$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    var firstnameInput = $("input#firstname").val();
    var lastnameInput = $("input#lastname").val();

    var dateInput = $("input#date").val();

    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
