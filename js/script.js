//typing efect


const subtitle = document.querySelector('p') // Cria uma variavel 

function typeWrite(element) { // criando a funcao typewhrite piuchando a variavel
	const textArray = element.innerHTML.split(''); // mudara o que esta escrito na variavel, o splits faz separacao de textos, Bruno.split separa as letras
	element.innerHTML = ''; //comeco da frase, pega o elemento html, fazendo fucar vazio no comeco
	textArray.forEach((letter, i) => { //chamando a variavel e dando atributo a ela um valor infinito, o parenteses com a flecha vira uma funcao
		setTimeout (() => element.innerHTML += letter, i * 300); // settimeout da um tempo para o atributo ser executavel, o element tem a escrita mudada com um tempo, o += faz com que acresente as letras com o decorrer da frase, mantendo a letra anterior, o espacamento vazio tem um tempo de 300 milisegundos
	});

}

typeWrite(subtitle) // chamar a funcao 

//galeria previus

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['Próximo'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

	constructor(container, items, controls){
		this.carouselContainer = container;
		this.carouselControls = controls;
		this.carouselArray = [...items];
	}

	updateGallery(){
		this.carouselArray.forEach(el => {
			el.classList.remove('gallery-item-1');
			el.classList.remove('gallery-item-2');
			el.classList.remove('gallery-item-3');
			el.classList.remove('gallery-item-4');
			el.classList.remove('gallery-item-5');
		})

		this.carouselArray.slice(0, 5).forEach((el , i) => {
			el.classList.add(`gallery-item-${i+1}`);
		});
	}

	setCurrentState(direction){
		if (direction.className == 'gallery-controls-previus'){
			this.carouselArray.unshift(this.carouselArray.pop());
		}else{
			this.carouselArray.push(this.carouselArray.shift());
		}
		this.updateGallery();
	}

	setControls() {
		this.carouselControls.forEach(control => {
			galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
			document.querySelector(`.gallery-controls-${control}`).innerText = control;
		});
	}

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

document.querySelectorAll('.gallery-item-1').forEach(item => {
	item.addEventListener('click', function() {
		let url = 'https://brunorobertocataneo.github.io/olhar_cultural/'; 
		window.open(url, '_blank');
	});
});

document.querySelectorAll('.gallery-item-2').forEach(item => {
	item.addEventListener('click', function() {
		let url = 'https://brunorobertocataneo.github.io/Calculadora/'; 
		window.open(url, '_blank');
	});
});

// navbar

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});