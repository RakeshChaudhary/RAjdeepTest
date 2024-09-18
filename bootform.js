function validate(){
    let f=false;
//Name feild validation
let name=$(".name-feild").val();
if(name=="" || name==undefined){
    $(".name-feild-msg")
    .html("name is required")
    .addClass("text-danger");
    f=false;
}else{
    $(".name-feild-msg")
    .html("OK")
    .removeClass("text-danger").addClass("text-sucess");
    f=true;
}   

//Email Validation
let email=$('.email-feild').val();
let exp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email==""||name==undefined){
    $('.email-feild-msg').html('Email is required').addClass('text-danger');
    f=false;
}else if(exp.test(email)==false){
    $('.email-feild-msg').html('Invalid Email, Email must be coorect format(ex-rajdeep@gmail.com)')
    .addClass('text-danger');
    f=false;
}else{
    $(".email-feild-msg")
    .html("OK")
    .removeClass("text-danger").addClass("text-sucess");
    f=true;
}
//Password Validation
let password=$('.password-feild').val();
let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password==''||password==undefined){
    $('.pasword-feild-msg').html('Password is required').addClass('text-danger');   
    f=false;
}else if(pass.test(password)==false){
    $('.pasword-feild-msg').html('password is must between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
    .addClass('text-danger');   
    f=false;
}else{
    $('.pasword-feild-msg').html('OK..!!').removeClass('text-danger').addClass("text-sucess");
    f=true;
}
//Phone Validation
let phone=$(".phone-feild").val();
if(phone=="" || phone==undefined){
    $(".phone-feild-msg")
    .html("phone is required")
    .addClass("text-danger");
    f=false;
}else if(phone.length!=10){
    $('.phone-feild-msg').html('phone is must only 10 digit only')
    .addClass('text-danger'); 
f=false;
}else{
    $('.phone-feild-msg').html('OK..!!').removeClass('text-danger').addClass("text-sucess");
    f=true;  
}

//f=false;
return f;
}

// function  (){ 
    //alert("test")
     //Cal to ajax
   // var request= new XMLHttpRequest();
  // request.open("GET","JQindex.html");
  // request.onreadystatechange=function(){
     //call whenever state change
   //  if(this.readyState==4 && this.status==200){
     //  console.log(this.responseText);
       //var obj=JSON.parse(this.responseText);
       //console.log(obj);
      // document.getElementById("container1").innerHTML=this.responseText;
    // }
  // };
   //request.send();} 