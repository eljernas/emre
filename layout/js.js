// make auto writing effect:
const tit=document.getElementById('autowrite');
var word='OSCAR';
console.log(word.length)
let i=0;
setInterval(() => {
    tit.innerHTML+=word[i]
   i++;
   if (i==word.length+1) {
    i=0;
    tit.innerHTML='';
   }
}, 800);