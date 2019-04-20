$('.foodIcon').on('click', function() {
	$.ajax({
        type: 'POST',
        url: '/update-purchase_time',
        data: {
        	food_id: $(this).attr('data-foodID')
        }
    }).then(function(){
    	location.reload();
    })
});


function getColor(exp, daysToExp) {
	var g = 255;
	var r = 0;
	var colorsArr = [];
	var percToExp = (exp - daysToExp) / exp;
	if (percToExp < 0.5){
		r = percToExp * 255 * 2;
	} else if (percToExp > 0.5) {
		r = 255
		g = (1-percToExp) * 255 * 2;
	} else {
		r = 255;
	}
	colorsArr.push(r, g)
	return colorsArr;
}

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

