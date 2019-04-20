var deleteFlag = true;


$('.foodIcon').on('click', function () {
    if (deleteFlag) {
        if ($(this).attr('data-addToHome') === 'false') {
            $(this).attr('data-addToHome', 'true');
            $(this).addClass('selected');
        } else {
            $(this).attr('data-addToHome', 'false');
            $(this).removeClass('selected');
        }
    } else {
        if ($(this).attr('data-customid') != 0) {
            if ($(this).attr('data-stageForDelete') === 'false') {
                $(this).attr('data-stageForDelete', 'true');
                $(this).addClass('stagedForDelete');
            } else {
                $(this).attr('data-stageForDelete', 'false');
                $(this).removeClass('stagedForDelete');
            }
        }
    }
})

// $.ajax({
//     url: '/show-currently-selected',
//     method: 'GET'
// }).then(function (response) {
//     console.log(response[0].user_id);
// });

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
    if (deleteFlag) {
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

function stageIconForDelete() {
    if (deleteFlag) {
        for (let i in $("[data-customId=0]")) {
            $("[data-customId=0]").eq(i).addClass('grayOut');
        }
        $(".newCustomIcon").addClass('grayOut');
        $("#deleteButton").removeClass('btn-secondary');
        $("#deleteButton").addClass('btn-danger');
        deleteFlag = false;
    } else {
        for (let i in $("[data-customId=0]")) {
            $("[data-customId=0]").eq(i).removeClass('grayOut');
        }
        $(".newCustomIcon").removeClass('grayOut');
        $("#deleteButton").removeClass('btn-danger');
        $("#deleteButton").addClass('btn-secondary');
        deleteFlag = true;

        var selectedIcon = [];
        for (let i = 0; i < $("[data-stagefordelete='true']").length; i++) {
            selectedIcon.push($("[data-stagefordelete='true']").eq(i).attr('data-foodId'));
        }
        console.log(selectedIcon);
    }
}
