// make auto writing effect:
const tit = document.getElementById('autowrite');
var word = 'OSCAR';
console.log(word.length)
let i = 0;
setInterval(() => {
    tit.innerHTML += word[i]
    i++;
    if (i == word.length + 1) {
        i = 0;
        tit.innerHTML = '';
    }
}, 800);

const home = document.querySelector('#home');
const service = document.querySelector('#service');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');




// make navbar effect:
const navitem = document.querySelectorAll('.nav-item');
navitem.forEach(item => {

    item.addEventListener('click', () => {
        console.log(item.dataset.scrol);
        console.log(home.offsetTop);


        if (item.dataset.scrol == '#home') {
            scrollTo(0, home.offsetTop);
        }


        if (item.dataset.scrol == '#service') {
            scrollTo(0, service.offsetTop);
        }

        if (item.dataset.scrol == '#about') {
            scrollTo(0, about.offsetTop);
        }
        if (item.dataset.scrol == '#contact') {
            scrollTo(0, contact.offsetTop);
        }

    });
});
