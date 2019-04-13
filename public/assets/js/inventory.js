
$(".foodIcon").on('click', function () {
    if ($(this).attr('data-addToHome') === 'false') {
        $(this).attr('data-addToHome', 'true');
        $(this).addClass('selected');
    } else {
        $(this).attr('data-addToHome', 'false');
        $(this).removeClass('selected');
    }
})