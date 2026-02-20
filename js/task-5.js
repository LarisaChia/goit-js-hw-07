function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 
const colorCode = document.querySelector('.color');
const switchColorBtn = document.querySelector('.change-color');
const body = document.body;

const changeColor = () => {
  colorCode.textContent = body.style.backgroundColor = getRandomHexColor();
};
 

switchColorBtn.addEventListener('click', changeColor);