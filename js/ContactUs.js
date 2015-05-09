// JavaScript Document

window.onload = init;

function init(){
    var sendButton = document.getElementById("sendButton");
	sendButton.onclick = handleSendButtonClick;
	//var name = document.getElementById("senderNameError");
	//name.style.visibility="hidden";
}

function handleSendButtonClick() { 
	//proveriavame dali e vaveden text
	
	var sender = document.getElementById("senderName").value;
	var name = document.getElementById("senderNameError");	
	if(sender=="") {
		name.style.visibility="visible";		
	} else {
		name.style.visibility="hidden";
		}
	
	var email = document.getElementById("senderEmail").value;
    var emailError = document.getElementById("emailError"); 

	if(email==""){
		emailError.style.visibility="visible";	
	} else {
		emailError.style.visibility="hidden";
		}   
	
	var message = document.getElementById("messageToSend").value;
	var messageError = document.getElementById("messageError");
	if(message=="") { 
		messageError.style.visibility="visible";
	} else {
		messageError.style.visibility="hidden";
	}
}