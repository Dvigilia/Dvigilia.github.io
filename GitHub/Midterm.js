const userName = document.getElementById("userName");
const password = document.getElementById("password");

const iconUpperCaseName	= document.getElementById('iconUpperCaseName');
const iconLowerCaseName	= document.getElementById('iconLowerCaseName');
const iconSpCharName	= document.getElementById('iconSpCharName');

const iconUpperCasePass	= document.getElementById("iconUpperCasePass");
const iconLowerCasePass	= document.getElementById("iconLowerCasePass");
const iconSpCharPass	= document.getElementById("iconSpCharPass");
const iconNumPass		= document.getElementById("iconNumPass");
const iconLengthPass	= document.getElementById("iconLengthPass");

userName.addEventListener('keyup',function(){
	validateUserName(this.value);
});
password.addEventListener('keyup',function(){
	validatePassword(this.value);
});


function validateUserName(e){

	var test = /[A-Z]/.test(e);
	var test2 = /[a-z]/.test(e);
	var test3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e);

	if(test){
		iconUpperCaseName.classList.replace("fa-circle-xmark","fa-circle-check");
		iconUpperCaseName.classList.replace("red","green");
	}else{
		iconUpperCaseName.classList.replace("fa-circle-check","fa-circle-xmark");
		iconUpperCaseName.classList.replace("green","red");
	}
	if(test2){
		iconLowerCaseName.classList.replace("fa-circle-xmark","fa-circle-check");
		iconLowerCaseName.classList.replace("red","green");
	}else{
		iconLowerCaseName.classList.replace("fa-circle-check","fa-circle-xmark");
		iconLowerCaseName.classList.replace("green","red");
	}
	if(test3){
		iconSpCharName.classList.replace("fa-circle-xmark","fa-circle-check");
		iconSpCharName.classList.replace("red","green");
	}else{
		iconSpCharName.classList.replace("fa-circle-check","fa-circle-xmark");
		iconSpCharName.classList.replace("green","red");
	}
}

function validatePassword(e){

	var test = /[A-Z]/.test(e);
	var test2 = /[a-z]/.test(e);
	var test3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e);
	var test4 = /[0-9]/.test(e);
	var test5 = e.length >= 8;


	if(test){
		iconUpperCasePass.classList.replace("fa-circle-xmark","fa-circle-check");
		iconUpperCasePass.classList.replace("red","green");
	}else{
		iconUpperCasePass.classList.replace("fa-circle-check","fa-circle-xmark");
		iconUpperCasePass.classList.replace("green","red");
	}

	if(test2){
		iconLowerCasePass.classList.replace("fa-circle-xmark","fa-circle-check");
		iconLowerCasePass.classList.replace("red","green");
	}else{
		iconLowerCasePass.classList.replace("fa-circle-check","fa-circle-xmark");
		iconLowerCasePass.classList.replace("green","red");
	}

	if(test3){
		iconSpCharPass.classList.replace("fa-circle-xmark","fa-circle-check");
		iconSpCharPass.classList.replace("red","green");
	}else{
		iconSpCharPass.classList.replace("fa-circle-check","fa-circle-xmark");
		iconSpCharPass.classList.replace("green","red");
	}

	if(test4){
		iconNumPass.classList.replace("fa-circle-xmark","fa-circle-check");
		iconNumPass.classList.replace("red","green");
	}else{
		iconNumPass.classList.replace("fa-circle-check","fa-circle-xmark");
		iconNumPass.classList.replace("green","red");
	}

	if(test5){
		iconLengthPass.classList.replace("fa-circle-xmark","fa-circle-check");
		iconLengthPass.classList.replace("red","green");
	}else{
		iconLengthPass.classList.replace("fa-circle-check","fa-circle-xmark");
		iconLengthPass.classList.replace("green","red");
	}
}