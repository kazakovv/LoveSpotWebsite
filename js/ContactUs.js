// JavaScript Document

window.onload = init;




function init() { 


sendButton.onclick = sendMail();

}


function sendMail() {
nameSender = $('#contact-name').val();
emailSender = $('#contact-email').val();
message = $('#contact-message').val();

	
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '5C5lNIkNFHwbe8gwPHO7PA',
        'message': {
          'from_email': + emailSender,
          'to': [
              {
                'email': 'kazakov.victor@hotmail.com',
                'name': + nameSender,
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'LoveSpot email',
          'html': + message
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
	 
	 alert("email sent");
}

/*
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

*/