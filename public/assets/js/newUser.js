$('#newUserSignUp').submit(function(e){
	e.preventDefault();

	var name = $("#newUserSignUp input[name='userName']").val();
	var emailVal = $("#newUserSignUp input[name='email']").val();
	var passVal = $("#newUserSignUp input[name='password']").val();
	var url = '/newUser/login/' + emailVal + '/' + passVal;

	$.ajax({
		url: '/newUser',
		method: 'POST',
		data: {
			userName : name, 
			email : emailVal, 
			password : passVal
		}
	}).then(function(response){
		console.log(response);
		console.log('made it ajax (signup)');
		window.location.assign(url);
	});
})
