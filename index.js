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
  var  lowercase = "I can't hear you!";
  return(lowercase);
}

if(sayHiToGrandma === sayHiToGrandma.toUpperCase){
  var uppercase = "YES INDEED!";
  return(uppercase);
  }
if(sayHiToGrandma === "I love you, Grandma!"){
   var mixedcase = "I love you, too!";
  return(mixedcase);

  
}



