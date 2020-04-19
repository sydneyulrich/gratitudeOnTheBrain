/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
$(document).ready(function() {
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
});


