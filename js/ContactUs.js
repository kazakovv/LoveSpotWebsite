// JavaScript Document



$(document).ready(function() { 
	$('#sendButton').click(function(){
    validateForm();  
	
});

function validateForm() { 
var nameSender = $('#contact-name').val();
var mailSender = $('#contact-email').val();
var message = $('#contact-message').val();

if(nameSender == ""){
            $('#contact-name').css('border-color','red');
        }

}

function sendMail() {
var nameSender = $('#contact-name').val();
var mailSender = $('#contact-email').val();
var message = $('#contact-message').val();

	
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '5C5lNIkNFHwbe8gwPHO7PA',
        'message': {
          'from_email': + mailSender,
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
	 
	 alert("Thank you for your message! A member of our team will get back to you shortly.");
}
});
