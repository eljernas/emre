
// navbar items:
const homeitem=document.querySelector('.homeitem');
const serviceitem=document.querySelector('.serviceitem');
const aboutitem=document.querySelector('.aboutitem');
const contactitem=document.querySelector('.contactitem');

// section isimler:
const servicel=document.querySelector('#service h1');
const aboutl=document.querySelector('#about h1');
const contactl=document.querySelector('#contact h1');

// home title
const hometitle=document.querySelector('.maintitle p');
// card titles:
const yatak=document.querySelector('.yatak');
const oto=document.querySelector('.oto');
const bag=document.querySelector('.bag');






// languages change buttons:
const english=document.querySelector('.english');
const turk=document.querySelector('.turk');





english.addEventListener('click',() => { 
homeitem.innerHTML='Home';
serviceitem.innerHTML='Service';
aboutitem.innerHTML='Âbout us!';
contactitem.innerHTML='Contact';
//  sectin title:
servicel.innerHTML='Service';
aboutl.innerHTML='About us!';
contactl.innerHTML='Contact';
// home title:
hometitle.innerHTML='Quilted sponge fiber is made in the pattern you want';
// card titles:
yatak.innerHTML='Bedspread';
oto.innerHTML='autoccase';
bag.innerHTML='bags';






} );

turk.addEventListener('click',() => { 
   
    homeitem.innerHTML='Ana sayfa';
    serviceitem.innerHTML='ürüler';
    aboutitem.innerHTML='Hakkımızda';
    contactitem.innerHTML='iletişim';

// sectin title;
servicel.innerHTML='ürüler';
aboutl.innerHTML='Hakkımızda';
contactl.innerHTML='iletişim';
// home title:
hometitle.innerHTML='Kapitone işler ve nakış işler her türlü yaplır';
// card titles:
yatak.innerHTML='Yatak örtüsü';
oto.innerHTML='oto kılıf';
bag.innerHTML='Çanta';

});




