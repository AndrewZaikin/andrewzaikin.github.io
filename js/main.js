$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:4,
        autoplay:true,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

menu.onclick = function myFunction() {
	var x = document.getElementById("top__nav");

	if(x.className === "top__nav") {
		x.className += " responsive";
	} else {
		x.className = "top__nav";
	}
};

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
}); 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn","contacts","myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


