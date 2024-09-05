$(document).ready(function() {
    $("button").click(function() {
        if (!$("#city").val()) {
            alert("Please enter the city");
            return;
        }
        alert("Success");
    })

}) 

