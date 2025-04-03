

const  input = document.getElementById("input1"),
      showHide = document.querySelector(".show_hide"),
      indicator = document.querySelector(".indicator"),
      iconText = document.querySelector(".icon-text"),
      text = document.querySelector(".text");

// js code to show & hide password

showHide.addEventListener("click", ()=>{
  if(input.type === "password"){
    input.type = "text";
    showHide.classList.replace("fa-eye-slash","fa-eye");
  }else {
    input.type = "password";
    showHide.classList.replace("fa-eye","fa-eye-slash");
  }
});

// js code to show password strength (with regex)

let alphabet = /[a-zA-Z]/, //letter a to z and A to Z
    numbers = /[0-9]/, //numbers 0 to 9
    scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/; //special characters

input.addEventListener("keyup", ()=>{
  indicator.classList.add("active");

  let val = input.value;
  if(val.match(alphabet) && val.length >=5){
    text.textContent = "Password is weak";
    input.style.borderColor = "#FF6333";
    showHide.style.color = "#FF6333";
    iconText.style.color = "#FF6333";
  }
  if(val.match(alphabet) && val.match(numbers) && val.length >= 6){
    text.textContent = "Password is medium";
    input.style.borderColor = "#cc8500";
    showHide.style.color = "#cc8500";
    iconText.style.color = "#cc8500";
  }
  if(val.match(alphabet) && val.match(numbers) && val.match(scharacters) && val.length >= 8){
    text.textContent = "Password is strong";
    input.style.borderColor = "#22C32A";
    showHide.style.color = "#22C32A";
    iconText.style.color = "#22C32A";
  }

  if(val == ""){
    indicator.classList.remove("active");
    input.style.borderColor = "#A6A6A6";
    showHide.style.color = "#A6A6A6";
    iconText.style.color = "#A6A6A6";
  }
});

    

let input1 = document.getElementById("input").value;
let input2 = document.getElementById("input2").value;

// document.getElementById("myform").onsubmit = function(e){
function onsubmits(e)
{
    e.preventDefault();

    if(input1 === input2){
        this.submit();
    }
    alert("please enter some numbers and characters:");
    }