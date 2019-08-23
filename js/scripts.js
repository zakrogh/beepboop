//back end
var beepBoop = function(num, name){
  let userName = name;
  //if a name is not provided then the name "Dave" is used
  if(!name){
    userName = "Dave";
  }
  var outputA = [];
  for(let i = 0; i <= num; i++){
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
var displayOutput = function(arr, reverseOrder){
  if(reverseOrder){
    arr = arr.reverse();
  }
  $(".output").text("");
  $(".output").append(arr.join(" "));
  $(".output").hide();
  $(".output").fadeIn();
  $(".userInput").select();
  $(".htmlInject").attr("disabled", false);
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    let userInput = parseInt($(".userInput").val());
    let userName = $(".userName").val();
    let order = $("input:checkbox[name=reverse]:checked").val();
    let output = beepBoop(userInput, userName);
    displayOutput(output, order);
    event.preventDefault();
  });

  //simple function to showcase html/script injections
  $(".htmlInject").click(function(){
    $(".htmlInject").attr("disabled", true);
    let input = $(".userName");
    $(input).val(input.val() + '<img src="img/img1.png">');
  });
});
