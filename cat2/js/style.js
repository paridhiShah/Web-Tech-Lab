// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('submit').addEventListener('click',() => {    
  validateCheckbox();
  validateRadio();    
});;
document.getElementById('gender').addEventListener('change', function(e) {
  if(this.value===""){
  gender.classList.add('is-invalid');
  } else {
    gender.classList.remove('is-invalid');
  }
});

function validateRadio(){
  console.log('hlooo');
  let v=document.getElementById('error');
  let ans=false;
  if(document.getElementById('buy').checked && document.getElementById('sell').checked ) {
    v.textContent="Select one";
    v.style.color="red";
  }else if(document.getElementById('buy').checked===false && document.getElementById('sell').checked===false) {
    v.textContent="Select one";
    v.style.color="red";
  }

}
function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]$/;
  const re2=/[A-Z]/;
  
console.log( /[A-Z]/.test( word[0]) );

  if(!re.test(name.value )){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{6}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function validateCheckbox() {
  
  var chkd = document.getElementById('checkbox1').checked || document.getElementById('checkbox2').checked||document.getElementById('checkbox3').checked|| document.getElementById('checkbox4').checked;
  console.log(chkd);
    var formChk=document.getElementById('check');
    console.log(formChk);
  if (chkd === false){
    console.log('Hi');
    formChk.textContent="Atleast one box should be checked!";
    formChk.style.color="red";
    
  } else {
    formChk.textContent="";
    
  }
}
function validateChoose(){
  const choose = document.getElementById('choose');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

$('textarea').keyup(function() {
    
  var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');
    
  current.text(characterCount);
  
      
});

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");



// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  var speciall = /[$,&,*,%,#]/;
  if(myInput.value.match(speciall))
  {
    special.classList.remove("invalid");
    special.classList.add("valid");
  }
  else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
 
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}