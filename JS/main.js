
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {

    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 580 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

function background(value){
  element=document.getElementById("dsa");

  switch(value){
      case "Suma Vectorilor":
      document.getElementById("practice1").style.display="block";
      document.getElementById("practice2").style.display="none";
      document.getElementById("practice3").style.display="none";
      console.log(value);
      break;

      case "Elementul Maxim":
      document.getElementById("practice1").style.display="none";
      document.getElementById("practice2").style.display="block";
      document.getElementById("practice3").style.display="none";
      console.log(value);
      break;

      case "Intersectia a 2 multimi":
      document.getElementById("practice1").style.display="none";
      document.getElementById("practice2").style.display="none";
      document.getElementById("practice3").style.display="block";
      
      console.log(value);
      break;

  }

}

function problemaRezolvata1() {
  var random,sir=" ",suma=0;
  for(i=0;i<=3;i++){
  random= parseInt(Math.random()*10);
  suma+=random;
  toString(random);
  sir += random+ " ";
  }
  console.log(suma)
  console.log(sir)
  document.getElementById("rezolvare1").innerHTML="Vectorul este: " + sir + "<br>" +"Suma vectorului: "+  suma;
}

function problemaRezolvata2() {
  var random,sir=" ",counter=0, maxim=0, v = [0,0];
  for(i=0;i<=3;i++){
  random= parseInt(Math.random()*10);
  v[i]=random;
  if(random>maxim){
    maxim=random;
  }
  toString(random);
  sir += random+ " ";
  }

  for(i=0;i<=3;i++){
    if(v[i]===maxim){
      counter++;
      console.log(v[i]);
    }
  }

  
  console.log(v[i])
  console.log(sir)
  document.getElementById("rezolvare2").innerHTML="Vectorul este:" + sir + "<br>" + "Elementul maxim este: " + maxim + "<br> Si apare de "+ counter +" ori";
}

function problemaRezolvata3(){

  var v1=[],v2=[],v3=[], stringV1, stringV2, string;
  for(i=0;i<=4;i++){
    v1[i]= parseInt(Math.random()*10);
    v2[i]= parseInt(Math.random()*10);
    if(v1[i]===v2[i]){
      v3.push(v1[i]);
    }
  }
  stringV1=v1.toString();
  stringV2=v2.toString();
  string= v3.toString();
  console.log(stringV1)

  document.getElementById("rezolvare3").innerHTML="Primul sir: " + stringV1 +" <br> Al 2 lea sir: " + stringV2 + "<br> Intersectia Multimilor: " + string;
}
function Abonare(){
  prompt("Adresa de email:");
  alert("Multumim pentru abonare!");
};

