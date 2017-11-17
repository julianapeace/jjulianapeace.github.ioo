// Show and hide code snippets
$('.one .code-button').click(function() {
    $('.one-code').slideToggle().css('float', 'right');
});
$('.two .code-button').click(function() {
    $('.two-code').slideToggle();
});
$('.three .code-button').click(function() {
    $('.three-code').slideToggle().css('float', 'right');
});
$('.four .code-button').click(function() {
    $('.four-code').slideToggle();
});
$('.portfolio').on('click', '.hide-button', function() {
    $('.code').slideUp();
});


// If on touch, toggle overlay when project is clicked
    // When image is clicked on touch device, add hover class (show overlay)
    $('.project img').on('click', function(event){
        event.preventDefault();
        $(this).parent('.project').addClass('hover');
    });
    // When overlay is clicked on touch device, remove hover class (hide overlay)
    $('.project .overlay').on('click', function(){
        $(this).parent('.project').removeClass('hover');
    });
