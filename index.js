function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  var spy = "HELLO";
  console.log(spy); 
}
function logWhisper(string){
  var spy = "hello";
  console.log(spy);
}

function sayHiToGrandma(string){
  var uppercase = "YES INDEED!";
  var  lowercase = "I can't hear you!";
  var mixedcase = "I love you, too!";
if(sayHiToGrandma === sayHiToGrandma.toLowerCase){
  return(lowercase);}

if(sayHiToGrandma === sayHiToGrandma.toUpperCase){
  return(uppercase);}

 
if(sayHiToGrandma === "I love you, Grandma!"){
  return(mixedcase);}
}



