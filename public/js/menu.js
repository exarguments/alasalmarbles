$(function() {
  $('#menu').prepend('<ul>' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="about.html">About Us</a></li>' +
    // '<li><div class = "dropdown" >'+
    // '<div onclick = "myFunction()"class = "dropbtn"> About<i class="material-icons">more_vert</i> </div>'+
    // '<div id = "myDropdown" class = "dropdown-content">'+
    // '<a href = "about.html"> About Developers </a> '+
    // '<a href = "about_pal.html"> About Project </a>' +
    // '</div> </div></li>'+
    // '<li><div class = "dropdown" >'+
    // '<div onclick = "myFunction2()"class = "dropbtn">Flatlist<i class="material-icons">more_vert</i> </div>'+
    // '<div id = "myDropdown2" class = "dropdown-content">'+
    // '<a href = "apartments.html"> Apartments </a> '+
    // '<a href = "commercial.html"> Commercial </a>' +
    // '<a href = "garden_apartments.html"> Garden Apartments </a>' +
    // '</div> </div></li>'+
    // '<li><div class = "dropdown" >'+
    // '<div onclick = "myFunction3()"class = "dropbtn">Gallery<i class="material-icons">more_vert</i> </div>'+
    // '<div id = "myDropdown3" class = "dropdown-content">'+
    // '<a href = "interior.html"> Apartments </a> '+
    // '<a href = "exterior.html"> Commercial </a>' +
    // '<a href = "gardenunit.html"> Garden Apartments </a>' +
    // '</div> </div></li>'+
    '<li><a href="contact.html">Contact</a></li>' +
    '<li><a href="./products_list.html">Products</a></li>' +

    '</ul>'
  );
});

$('#menubtn').click(function() {
  $("#menu").slideToggle("medium");
  // $('#menu').toggle('slow');
  $('#menubtn i').html($('#menubtn').text() == 'menu' ? 'close' : 'menu');
});

// function flatlist() {
//   var x = document.getElementByClass("submenu");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

$('.drop').click(function() {
  //$('.submenu').slideToggle("medium");
  $('.submenu').css('display', 'block');
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
