//back end

var beepBoop = function(num, name){
  var userName = name;
  if(!name){
    userName = "Dave";
  }
  var outputA = [];
  for(var i = 0; i <= num; i++){
    if(i.toString().includes("3")){
      outputA.push("I'm sorry, " + userName + ". I'm afraid I can't do that.");
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

//front end
var displayOutput = function(arr){
  $(".output").text("");
  $(".output").append(arr.join(" "));
  $(".output").hide();
  $(".output").fadeIn();
  $(".userInput").select();
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    $(".inputGroup").removeClass("has-error");
    var userInput = parseInt($(".userInput").val());
    var userName = $(".userName").val();
    var output = beepBoop(userInput, userName);
    displayOutput(output);

    event.preventDefault();
  });
});
