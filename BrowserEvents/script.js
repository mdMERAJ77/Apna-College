 //let fpara = document.getElementById('fpara');

 // function changeText(event) {
 //     console.log(event)
 //let fpara = document.getElementById('fpara');
 //     fpara.textContent = "hello sakib";
 // }
 // fpara.addEventListener('click', changeText);
 //fpara.removeEventListener('click', changeText);
 //let anchorTag = document.getElementById('anchorTag');
 //anchorTag.addEventListener('click', anchorTag);
 //anchorTag.addEventListener('click', function(event) {
 //event.preventDefault();
 //anchorTag.textContent = 'done bhai';
 //})
 //  let para = document.querySelectorAll('p');

 //  function alertfun(event) {
 //      alert(`you have clicked ${event.target.textContent}`)
 //  }
 //  for (let i = 0; i < para.length; i++) {
 //      let paras = para[i];
 //      paras.addEventListener('click', alertfun);
 //  }
 function alertpara(event) {
     alert(`you have clicked on para: ${event.target.textContent}`)
     console.log(`${event.target.textContent}`);
 }
 let myDiv = document.getElementById('wrapper');
 document.addEventListener('click', alertpara)