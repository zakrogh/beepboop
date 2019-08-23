var beepBoop = function(num){
  var outputA = [];
  for(var i = 0; i <= num; i++){
    if(i.toString().includes("3")){
      outputA.push("I'm sorry, Dave. I'm afraid I can't do that.")
    }else if (i.toString().includes("2")) {
      outputA.push("Boop!");
    }else if (i.toString().includes("1")) {
      outputA.push("Beep!");
    }
    else {
      outputA.push(i);
    }
  }
  return outputA;
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    var userInput = parseInt($(".userInput").val());
    var output = beepBoop(userInput);
    $(".output").append(output);
    $(".output").fadeToggle();
    event.preventDefault();
  });
});
