// change contact form bg color when selected
let formArea = document.querySelector('.contact-form');

function formColor() {
	formArea.style.backgroundColor = '#76AFC2';
}

formArea.addEventListener('click', formColor);

// change color of tiles when hover
let tiles = document.querySelectorAll('.exp-card, .pro-card');

console.log(tiles)

function tileHover() {
		  tiles.style.border = '3px solid #76AFC2';
		}
		
function tileHoverOut() {
		  tiles.style.border = 'none';
		}
		
tiles.addEventListener('mouseover', tileHover);
tiles.addEventListener('mouseout', tileHoverOut);
