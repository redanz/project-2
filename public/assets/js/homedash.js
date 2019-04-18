
function getCurrentDate() {
	var currentDate = new Date();
	var date = currentDate.getDate();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var dateString = year + "-" + (month + 1) + "-" + date;
	return dateString;
}

$('.foodIcon').on('click', function() {
	$(this).css('background-color', 'lightgreen');
	console.log(getCurrentDate());
	$.ajax({
        type: 'POST',
        url: '/homedash',
        data: { time: getCurrentDate() }
    })
});