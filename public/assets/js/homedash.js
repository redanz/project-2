$('.foodIcon').on('click', function() {
	$.ajax({
        type: 'POST',
        url: '/homedash',
        data: {
        	food_id: $(this).attr('data-foodID')
        }
    })
});