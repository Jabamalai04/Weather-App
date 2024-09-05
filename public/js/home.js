$(document).ready(function() {
    $("button").click(function() {
        if (!$("#field").val()) {
            alert("Please enter the city");
            return;
        }
        alert("Success");
    })

}) 

