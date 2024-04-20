console.log("Hi! Welcome to My Portfolio Site");

function menuToggle() {
	var x = document.getElementById('myNavtoggle');
	if (x.className === 'navtoggle') {
		x.className += ' responsive';
	} else {
		x.className = 'navtoggle';
	}
}

// Vanilla JavaScript code
document.addEventListener("DOMContentLoaded", function () {
	const linkToHeader = document.querySelector('a[href="#header"]');
	const headerElement = document.getElementById("header");

	if (linkToHeader && headerElement) {
		linkToHeader.addEventListener("click", function (e) {
			e.preventDefault();
			headerElement.scrollIntoView({ behavior: "smooth" });
		});
	}
});

// Testimonials slider
let testSlide = document.querySelectorAll('.testItem');
let dots = document.querySelectorAll('.dot');
var counter = 0;

function switchTest(currentTest) {
    var testId = parseInt(currentTest.getAttribute('attr'));

    // Lógica para aplicar las animaciones
    if (testId > counter) {
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
        testSlide[testId].style.animation = 'next2 0.5s ease-in forwards';
        testSlide[testId].style.left = "100%"; // Para posicionar fuera de la vista antes de animar
    } else if (testId < counter) {
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
        testSlide[testId].style.animation = 'prev2 0.5s ease-in forwards';
        testSlide[testId].style.left = "-100%"; // Para posicionar fuera de la vista antes de animar
    } else { // Si es el mismo, no hacer nada
        return;
    }

    setTimeout(() => {
        testSlide[counter].classList.remove('active');
        testSlide[testId].classList.add('active');
        dots[counter].classList.remove('active');
        dots[testId].classList.add('active');
        counter = testId;

        // Restablecer estilos post-animación
        testSlide[counter].style.animation = '';
        testSlide[counter].style.left = '';
        testSlide[testId].style.animation = '';
        testSlide[testId].style.left = '';
    }, 500);  // esperamos medio segundo, que es la duración de la animación
}

function slideNext() {
    testSlide[counter].classList.remove('active');
    dots[counter].classList.remove('active');

    if (counter >= testSlide.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    testSlide[counter].classList.add('active');
    dots[counter].classList.add('active');
}

let deleteInterval = setInterval(slideNext, 20000);

const container = document.querySelector('.indicators');
container.addEventListener('mouseover', function() {
    clearInterval(deleteInterval);
});

container.addEventListener('mouseout', function() {
    deleteInterval = setInterval(slideNext, 20000);
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// fin del código testimonio// 
// Table of contents
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
// photo slider// 
