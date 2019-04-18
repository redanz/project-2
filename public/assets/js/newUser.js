$('#newUserSignUp').submit(function(e){
	e.preventDefault();
	$.ajax({
		url: '/newUser',
		method: 'POST',
		data: {
			userName : $("#newUserSignUp input[name='userName']").val(), 
			email : $("#newUserSignUp input[name='email']").val(), 
			password : $("#newUserSignUp input[name='password']").val() 
		}
	}).then(function(response){
		console.log(response);
		console.log('made it ajax'); 
	});
})
