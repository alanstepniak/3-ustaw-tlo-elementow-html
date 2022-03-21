
const setBackground = () => {
   let txt1 = document.getElementById("text");
   let txt2 = document.getElementById('text2');
   txt1.style.backgroundColor = 'red';
   txt2.style.backgroundColor = 'yellow';
}
let button = document.body.lastElementChild.previousElementSibling;
button.addEventListener('click', setBackground);
