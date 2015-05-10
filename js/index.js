// JavaScript Document

window.onload = canPlayVideo;

function canPlayVideo() { 
	var browserCanPlayVideo=false;
	//if not empty the browser can play it
	if(video.canPlayType("video/mp4") != "")  { 
		browserCanPlayVideo = true;
	} else if (video.canPlayType("video/webm") != "") { 
		browserCanPlayVideo = true;
	} else if(video.canPlayType("video/ogg") != "") { 
		browserCanPlayVideo = true;
	}
	
	//ako browserCanPlayVideo is false we delete the video container and replace it with img container
	if(browserCanPlayVideo==false) { 
		alert("You can't play video");
	}
}