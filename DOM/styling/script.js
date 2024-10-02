let firstpara = document.getElementById('fpara');
//firstpara.style.backgroundColor = 'yellow'; //but single value only change

firstpara.style.cssText = 'background-Color:red; font-size:20px;';

//firstpara.setAttribute('class', 'divclass');

//firstpara.setAttribute('style', 'margin:1rem')
console.log(firstpara.className);
console.log(firstpara.classList);
firstpara.classList.add('jojo');
firstpara.classList.remove('lolo');
console.log(firstpara);

//toggle
firstpara.classList.toggle('lolo');
firstpara.classList.toggle('khokho');
console.log(firstpara)