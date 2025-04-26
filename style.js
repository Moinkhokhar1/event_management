$(document).ready(function () {
    $('.tab').click(function () {
        // Remove active class from all tabs
        $('.tab').removeClass('active');
        
        // Add active class to the clicked tab
        $(this).addClass('active');

        // Hide all tab contents
        $('.tab-contents').removeClass('active');

        // Show the selected tab content
        $('#' + $(this).data('tab')).addClass('active');

        $(".faq-question").click(function(){
            $(".faq-answer").not($(this).next()).slideUp();
            $(".faq-question .icon").text("+")
            $(this).next(".faq-answer").slideToggle();
    
            //change icon (+ to -)
            $(this).children(".icon").text($(this).next(".faq-answer").is(":visible")?"-":"+")
        });
    });
});

