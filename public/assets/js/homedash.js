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