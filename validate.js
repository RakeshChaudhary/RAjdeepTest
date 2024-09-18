$(document).ready(function(){
  console.log("This is my first code");
$('#BTN1').click(function(){
  console.log("click");
//$('#conatiner').hide();
$('#conatiner').fadeOut(2000,function(){
  alert("Block is gone");
});
});

$('#BTN2').click(function(){
  console.log("click to show");
//$('#conatiner').show();
$('#conatiner').fadeIn();
});
$('#BTN3').click(function(){
  $('#conatiner').fadeToggle();
});
$('#BTN4').click(function(){
  $('#conatiner').fadeTo(240,0.4,function(){
    alert("Faded..");
  });
});
$('#BTN5').click(function(){
  $('#conatiner').slideUp(2000,function(){
    alert("Silde UP Done");
  });
});
$('#BTN6').click(function(){
  $('#conatiner').slideDown(1000,function(){
    alert("Silde Down Done");
  });
});

$('#BTN7').click(function(){
  $('#conatiner').slideToggle(1000,function(){
    alert("slideToggle Done");
  });
});

//Animate (Param,spped , calback)
$('#BTN8').click(function(){
$('#conatiner').animate({width:"+=300",height:"400",opacity:0.8,left:"200px"},230,function(){
  $('#conatiner').animate({borderRadius:"240px",left:"0",width:"200",height:"300"})
});
});
// Val function
$('#BTN9').click(function(){
  let v=$('#f').val();
  console.log("value is "+v);
  $('#f').val("this is done using val function");
});
//text function
let c=$('#content').text();
console.log(c);
//$('#content').text("<b>This is New thing to Learn good things</b>")
$('#content').html("<b>This is New thing to Learn good things</b>")

//Image attribute function
//let img=$('.image').attr("src");
//console.log(img);
$('#BTN10').click(function(){
$('.image').attr(
  "src","/JqueryHtml/images/imgFamily.jpg"
);
///

//
});

});
