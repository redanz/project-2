
$('.foodIcon').on('click', function () {
    if ($(this).attr('data-addToHome') === 'false') {
        $(this).attr('data-addToHome', 'true');
        $(this).addClass('selected');
    } else {
        $(this).attr('data-addToHome', 'false');
        $(this).removeClass('selected');
    }
})

$('#newCustomIcon').submit(function () {
    $.ajax({
        url: '/newCustomIcon',
        method: 'POST',
        data: {
            foodName: $("#newCustomIcon input[name='foodName']").val(),
            expiration: $("#newCustomIcon input[name='expiration']").val(),
        }
    }).then(function (response) {
        console.log(response);
        console.log('made it ajax');
    });
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

