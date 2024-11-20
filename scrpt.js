function filterProducts(){

    const searchQuery = document.querySelector('.jsinput').value.toLowerCase();

    const productCards = document.querySelectorAll('.product-card');




    productCards.forEach(card=>{
        const productId = card.id.toLowerCase();

        if(productId.includes(searchQuery)){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
document.querySelector('.jsinput').addEventListener('input', filterProducts);

// Variable to store the currently active element
let activeElement = null;

// Function to change color of the clicked element
function changeColor(event) {
    // If there is an active element, reset its color
    if (activeElement) {
        activeElement.style.color = '';
        activeElement.style.borderBottom =''; // Resets to default color
    }
    
    // Set the clicked element as the new active element and change its color
    activeElement = event.target;

    activeElement.style.color = '#634C9F';

    activeElement.style.borderBottom = '1px solid #634C9F';
}

// Add event listener to each element with the "hover" class
document.querySelectorAll('.hover').forEach(element => {
    element.addEventListener('click', changeColor);
});

let small = document.querySelectorAll('.small-img');

function border(event){

    event.preventDefault();

    if(activeElement){
        activeElement.style.border = 'none';
        activeElement.style.borderRadius = 'none';
    }
    const target = event.target;
    target.style.border = '1px solid #111827';
    target.style.borderRadius = '8px';

    activeElement = target;
}

small.forEach(element => {
    element.addEventListener('click',border);
});


let a = document.querySelectorAll('.a');

function borderBottom(event){
    event.preventDefault();

    if(activeElement){
        activeElement.style.borderBottom = 'none';
    }
    const target = event.target;
    target.style.borderBottom = '2px solid #030712';

    activeElement = target;

}
a.forEach(element => {
    element.addEventListener('click', borderBottom)
});

let button = document.querySelector('.js-button');

function showHide() {
    const searchQuery = document.querySelector('.jsinput');
    const newQuery = document.querySelector('.js-input');

    // Get computed display of searchQuery
    const searchQueryDisplay = window.getComputedStyle(searchQuery).display;

    if (searchQueryDisplay === 'none') {

        // Toggle classes for visibility
        newQuery.classList.remove('hidden');
        newQuery.classList.add('visible');
    } else {

        // Hide by toggling classes
        newQuery.classList.remove('visible');
        newQuery.classList.add('hidden');
    }
}

button.addEventListener('click', showHide);

function filterProducts(){

    const searchQuery = document.querySelector('.js-input').value.toLowerCase();

    const productCards = document.querySelectorAll('.product-card');




    productCards.forEach(card=>{
        const productId = card.id.toLowerCase();

        if(productId.includes(searchQuery)){
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
document.querySelector('.js-input').addEventListener('input', filterProducts);




let filterButton = document.querySelector('.buttone-none');
function showHideFilter(){
    let filter = document.getElementById('filter');

    if(filter.style.display === 'none'||filter.style.display === ''){
        filter.style.display = 'block';
    } else {
        filter.style.display = 'none';
    }

}

filterButton.addEventListener('click',showHideFilter);