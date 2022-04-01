const toggleButton = document.getElementsByClassName('toggle-button')[0];
const crossButton = document.getElementsByClassName('cross')[0];


const navbarLinks = document.getElementsByClassName('nav-links')[0];
const headerInfo = document.getElementsByClassName('header-info')[0];

const navClass = document.getElementsByClassName("header")[0];
console.log(navClass);

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); // show  navbar by display flex
    navClass.classList.toggle('color');     // change backgroung color of container navbar
    navClass.style.height = "100vh";
    crossButton.classList.add('show');
    toggleButton.classList.add('hidden');
    headerInfo.style.display = "none";
});
crossButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    navClass.classList.toggle('color');
    toggleButton.classList.remove('hidden');
    toggleButton.classList.add('show');
    crossButton.classList.remove('show');
    headerInfo.style.display = "block";
    
    // infoClass.classList.toggle('hidden');
});