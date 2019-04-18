$('#login').submit(function(){
	preventDefault();
	$.ajax({
		url: '/login',
		method: 'POST',
		data: {
			email : $("#inputEmail").val(), 
			password : $("#inputPassword").val()
		}
	}).then(function(response){
		console.log(response);
		console.log('made it ajax login'); 
	});
})
