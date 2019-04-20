// $('.foodIcon').on('click', function() {
// 	$.ajax({
//         type: 'POST',
//         url: '/update-purchase_time',
//         data: {
//         	food_id: $(this).attr('data-foodID')
//         }
//     }).then(function(){
//     	location.reload();
//     })
// });

function changeColor(expiration, daysLeft) {
	var colors = getColor(expiration, daysLeft);
	$(this).css('backgroundColor', 'rgb(' + colors[0] + ',' + colors[1] + ',' + 0 + ')');
}

function goToInventory() {
	$.ajax({
        method: "GET",
        url: '/inventory'
    })
}