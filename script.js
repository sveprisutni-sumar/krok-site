const darkModeButton = document.querySelector('.dark-mode');
const darkModeButtonState = localStorage.getItem('darkModeButtonState');
console.log(`Pocetno stanje> ${localStorage.getItem('darkModeButtonState')}`);
window.addEventListener('DOMContentLoaded', initMode);
darkModeButton.addEventListener('click', changeMode);

function initMode(){
    console.log(`Pocetno stanje iz funkcije initMode() kada se ucita DOM > ${localStorage.getItem('darkModeButtonState')}`);
    const state = localStorage.getItem('darkModeButtonState');
    if (state === 'day') {
        document.body.style.backgroundColor = 'white';
        darkModeButton.textContent = "Dnevni režim";
        console.log(`${darkModeButton.textContent}; izvrsena je funk. changeMode()`);
        localStorage.setItem('darkModeButtonState','day');
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je dnevni rezim`);
    } else if (state === 'night'){
        document.body.style.backgroundColor = 'black';
        darkModeButton.textContent = "Noćni režim";
        localStorage.setItem('darkModeButtonState','night');
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je nocni rezim`);
    }
}

function changeMode(){
    const state = localStorage.getItem('darkModeButtonState');
    if (state === 'night') {
        document.body.style.backgroundColor = 'white';
        darkModeButton.textContent = "Dnevni režim";
        console.log(`${darkModeButton.textContent}; izvrsena je funk. changeMode()`);
        localStorage.setItem('darkModeButtonState','day');
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je dnevni rezim`);
    } else if (state === 'day'){
        document.body.style.backgroundColor = 'black';
        darkModeButton.textContent = "Noćni režim";
        localStorage.setItem('darkModeButtonState','night');
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je nocni rezim`);
    }
    
}

// Ovaj komentar je dodao Copilot: This IIFE dynamically loads the weather widget script from weatherwidget.io 
    !function(d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if(!d.getElementById(id))
        {js = d.createElement(s);
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }
        (document, 'script', 'weatherwidget-io-js');


