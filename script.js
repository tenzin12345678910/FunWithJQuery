$(document).ready(function(){
// all jQuery methods go here...
$('#runningman-img').hover(enter, leave);
function enter(){
  this.src = "images/runningman-giphy.gif"
}
function leave(){
  this.src = "images/runningman-icon.png"
}
$('#taketheL-img').hover(enter, leave);
function enter(){
  this.src = "images/taketheL-giphy.gif"
}
function leave(){
  this.src = "images/taketheL-icon.png"
}
$('#electroshuffle-img').hover(enter, leave);
function enter(){
  this.src = "images/electroshuffle-giphy.gif"
}
function leave(){
  this.src = "images/electroshuffle-icon.png"
}
$('#bestmates-img').hover(enter, leave);
function enter(){
  this.src = "images/bestmates-giphy.gif"
}
function leave(){
  this.src = "images/bestmates-icon.png"
}
$('#title').text("code next")
$('#extra-text').remove()
$('images/logo.jpg').click(bgChange)
function bgChange(){
 $("body").css("background-image", "url('images/bg2.jpg')");
//all the things to be executed
}



});
