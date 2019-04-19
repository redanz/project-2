$('#login').submit(function(e){
	e.preventDefault();
	$.ajax({
		url: '/login',
		method: 'POST',
		data: {
			email : $("#inputEmail").val(), 
			password : $("#inputPassword").val()
		}
	}).then(function(response){
		// if(response.status === 'failed') {
		// 	alert('Incorrect email and/or password. Please try again.');
		// } else {
		// 	return;
		// }
		
		console.log("got response");
	});
})