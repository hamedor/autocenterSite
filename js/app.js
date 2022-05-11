var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


const detail = document.querySelector('#details');
const content = document.querySelector('#content');
const header = document.querySelector('.header__list');
const btn = document.querySelector('#bigbtn');
const btnContainer = document.querySelector('#bigbtnContainer');


detail.addEventListener('mouseenter', ()=>{
    detail.open = true;
})

detail.addEventListener('mouseleave', e=>{
    if(e.relatedTarget !== content && e.relatedTarget !== header){
        content.style.animationName = 'heightDown'
        setTimeout(animationReset, 350)
    }
})
function animationReset(){
    detail.open = false;
    content.style.animationName = 'heightUp';
}

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu-header');
let menuActive = document.querySelector('.menu-header');


burger.onclick = function(){
    menu.classList.toggle('menuActive');
    burger.classList.toggle('_active');
    btnContainer.classList.toggle('bigbtnContainerActive');
    if(window.screen.width <= 991.98){
        document.body.classList.toggle("_lock");
    }
}

function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('show');
    }
    });
}
let options = {
    threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animated');

for (let elm of elements) {
    observer.observe(elm);
}

let form = document.querySelector('.form')
let closebtn = document.querySelector('.closebtn');

btn.onclick = function(){
    form.classList.toggle('formActive')
}
closebtn.onclick = function(){
    form.classList.remove('formActive')
    beat.style.display = "none"
}

let modalOpen = document.querySelector('#modalOpen');
let modalClose = document.querySelector('#modalClose');
let modalForm = document.querySelector('#modalForm');

modalOpen.onclick = function(){
    modalForm.classList.toggle('formActive');
}

modalClose.onclick = function(){
    modalForm.classList.remove('formActive')
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });

  const swiper2= new Swiper('.swiper2', {
    // Optional parameters
    loop: false,
    allowTouchMove: false,
    slidesPerView:1,
    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
  const swiper3 = new Swiper('.reviews__swiper', {
    // Optional parameters
    loop: false,
    allowTouchMove: false,
    slidesPerView:1,
    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  });
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [56.81564019179031,60.52404516061663],
            zoom: 15,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './/img/map/placemark.png',
            iconImageSize: [80, 80],
            iconImageOffset: [-5, -38]
        });
        myMap.geoObjects
        .add(myPlacemark),
        myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
}



const formOne  = document.getElementById('form');

const formName = document.getElementById('formName');
const formPhone = document.getElementById('formPhone');
const beat = document.getElementById('beat');

const formError = document.querySelector('#formName + label + p.error');
const formErrorPhone = document.querySelector('#formPhone + label + p.error');
const beatCloseBtn = document.getElementById('beatCloseButton');

formName.addEventListener('input', function (event) {
if (formName.validity.valid) {
        formError.textContent = '';
        formError.className = 'error';
        formName.classList.remove('formInvalid');
    } else {
        formName.classList.add('formInvalid');
        showError();
}
});

formPhone.addEventListener('input', function (event) {
    if (formPhone.validity.valid) {
        formErrorPhone.textContent = '';
        formErrorPhone.className = 'error';
        formPhone.classList.remove('formInvalid');
    } else {
        formPhone.classList.add('formInvalid');
        showError();
}
});

formOne.addEventListener('submit', function (event) {
    if(!formName.validity.valid) {
        showError();
        event.preventDefault();
    }

    if(!formPhone.validity.valid) {
        showError();
        event.preventDefault();
    }
    if(formPhone.validity.valid && formName.validity.valid){
        event.preventDefault();
        beat.style.display='block';
    }
});

function showError() {
    if(formName.validity.valueMissing) {
        formError.textContent = 'Обязательное поле';
    }
        formError.className = 'error active';
    if(formPhone.validity.valueMissing) {
        formErrorPhone.textContent = 'Обязательное поле';
    }
        formErrorPhone.className = 'error active';
}

beatCloseBtn.onclick = function(){
    form.classList.remove('formActive');
    beat.style.display = "none";
}

