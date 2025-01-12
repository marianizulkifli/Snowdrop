$(document).ready(function () {
    // Initialize cart count
    let cartCount = 0;

    // Add to cart functionality
    $(".add-to-cart").on("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Increment cart count
        cartCount++;

        // Update cart count in the navigation bar
        $("#cart-count").text(cartCount);

        // show feedback to the user
        $("body").append('<div id="cart-feedback">Item added to cart!</div>');
        $("#cart-feedback").css({
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#4caf50",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
        }).fadeIn(400).delay(1000).fadeOut(400);
    });
});

