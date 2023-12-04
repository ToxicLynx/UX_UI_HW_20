

document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav1').classList.toggle('active');
    document.getElementById('nav2').classList.toggle('active');
  });
  // $(".navbar-list a").on("mouseover", function() {
//     $(this).css("color", "red");
// }).on("mouseout", function() {
//       $(this).css("color", "blue");
// });

// $(document).ready(function() {
//   // Add hover effect to all li elements in the navigation
//   $('.navbar-list li').hover(
//     function() {
//       $(this).css('color', 'pink');
//     },
//     function() {
//       $(this).css('color', ''); // Reset color on hover out
//     }
//   );
// });

$( ".linkHover" ).hover(function() {
    $( this ).css( "color", "pink");},
    function() {
      $(this).css('color', ''); // Reset color on hover out
    }

);

$( ".figure" ).hover(function() {
  $( this ).css( "background-color", "#666678");},
  function() {
    $(this).css('background-color', '#22222B'); // Reset color on hover out
  }

);

$( ".mySkills" ).hover(function() {
  $( this ).css( "background-color", "#666678");},
  function() {
    $(this).css('background-color', '#22222B'); // Reset color on hover out
  }

);

$( ".myExperience" ).hover(function() {
  $( this ).css( "background-color", "#666678");},
  function() {
    $(this).css('background-color', '#22222B'); // Reset color on hover out
  }

);
 
// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });