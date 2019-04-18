$('.foodIcon').on('click', function() {
	$(this).css('background-color', 'lightgreen');
	$.ajax({
        type: 'POST',
        url: '/homedash',
        data: {
        	food_id: $(this).attr('data-foodID')
        }
    })
});