$(document).ready(function(){
    // Smooth scroll to the Bestselling Collection section
    $('#best-selling-btn').click(function(event){
        event.preventDefault(); // Prevent the default anchor click behavior
        $('html, body').animate({
            scrollTop: $('#product1').offset().top
        }, 1000); // Adjust the 1000 to the desired scroll speed in milliseconds
    });
});
