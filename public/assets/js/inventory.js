
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
    }).then(function(res){
        window.location.assign('/homedash');
    });
}

function showCurrentlySelected() {
    $.ajax({
        url: '/show-currently-selected',
        method: 'GET'
    }).then(function (response) {
        for (let i in response) {
            console.log('selected food id ' + response[i].food_id)
            // $('.foodIcon').eq(response[i].food_id - 1).addClass('selected');
            // $('.foodIcon').eq(response[i].food_id - 1).attr('data-addToHome', 'true');
            $("[data-foodid=" + response[i].food_id + "]").addClass('selected');
            $("[data-foodid=" + response[i].food_id + "]").attr('data-addToHome', 'true');
        }
    });
}



