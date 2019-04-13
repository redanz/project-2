
$('.foodIcon').on('click', function () {
    if ($(this).attr('data-addToHome') === 'false') {
        $(this).attr('data-addToHome', 'true');
        $(this).addClass('selected');
    } else {
        $(this).attr('data-addToHome', 'false');
        $(this).removeClass('selected');
    }
})

function addToHome() {
    var selectedIcons = [];
    for (let i in $('.foodIcon')) {
        if ($('.foodIcon').eq(i).attr('data-addToHome') == 'true') {
            selectedIcons.push(($('.foodIcon').eq(i).attr('data-foodId')));
        }
    }
    console.log(selectedIcons);
    $.ajax({
        type: "POST",
        url: '/icons-to-home',
        data: { si: selectedIcons }
    })
}