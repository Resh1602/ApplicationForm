function handleSubmission(){
	var t1 = document.getElementById('name');
	var name1 = t1.value;
	var t2 = document.getElementById('num');
	var num1 = t2.value;
	validateRegisterForm();
	const Url='/doregister';
	const data ={
			name: name1,
			num: num1
	}
	$('.btn').click(function(){
		$.post(Url,data,function(data, status){
			console.log('${data} and status is ${status}')
		})
	})
}
function validateRegisterForm(){
	var t1 = document.getElementById('name');
	var name = t1.value;
	var t2 = document.getElementById('num');
	var num = t2.value;
	t1.style.borderColor = '';
	t2.style.borderColor = '';
	if(name.trim().length<=0){
		document.getElementById('errormsg').innerHTML="Please enter Name";
		t1.style.borderColor="red"
		return false;
	}
	if (!name.match(/^[0-9a-zA-Z]+$/)) {
		document.getElementById('errormsg').innerHTML="Check name";
	    return false;
    }
	if (!num.match(/^[0-9]+$/)) {
		document.getElementById('errormsg').innerHTML="Check num";
	    return false;
    }
	if(num.trim().length<=0){
		document.getElementById('errormsg').innerHTML="Please enter Number";
		t2.style.borderColor="red";
		return false;
	}
	return true;
}

