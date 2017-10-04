$(document).ready(function()
{

  //Delay en la aparición de los links de la barra de navegación
  $('.navbar-nav-Option').hide().delay(300).show(400);

  //Delay en la aparición del mensage de bienvenidos
  $('h1').hide().delay(350).show(450);

  //Delay en la marca de la barra de navegación
  $('.Brand-Text').hide().delay(200).show(300);


  //Cursor sobre los links de la barra de navegación
  //item1
  $('#item1').hover(function()
  {
      $('.option1').css('color','#000000');
      //$('.option1').css('text-decoration-color','#FFF85F');
      //$('.option1').css('text-decoration','underline');
      $('#item1Div1').css('background-color','#FFF85F');
  },
      function()
      {
        $('.option1').css('color','#FFFFFF');
        $('#item1Div1').css('background-color','#000000');
      }
  );
  //item2
  $('#item2').hover(function()
  {
      $('.option2').css('color','#000000');
      //$('.option1').css('text-decoration-color','#FFF85F');
      //$('.option1').css('text-decoration','underline');
      $('#item2Div2').css('background-color','#FFF85F');
  },
      function()
      {
        $('.option2').css('color','#FFFFFF');
        $('#item2Div2').css('background-color','#000000');
      }
  );
  //item3
  $('#item3').hover(function()
  {
      $('.option3').css('color','#000000');
      //$('.option1').css('text-decoration-color','#FFF85F');
      //$('.option1').css('text-decoration','underline');
      $('#item3Div3').css('background-color','#FFF85F');
  },
      function()
      {
        $('.option3').css('color','#FFFFFF');
        $('#item3Div3').css('background-color','#000000');
      }
  );
  //item4
  $('#item4').hover(function()
  {
      $('.option4').css('color','#000000');
      //$('.option1').css('text-decoration-color','#FFF85F');
      //$('.option1').css('text-decoration','underline');
      $('#item4Div4').css('background-color','#FFF85F');
  },
      function()
      {
        $('.option4').css('color','#FFFFFF');
        $('#item4Div4').css('background-color','#000000');
      }
  );


})
