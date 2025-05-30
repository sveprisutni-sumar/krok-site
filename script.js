// DEFINISANJE KONSTANTI I REGISTROVANJE DOGAĐAJA 'DOMContentLoaded' I 'click' ZA DUGME ZA NOĆNI REŽIM (klasa ".dark-mode")

// Selektuje se klasa "dark-mode" čime se obuhvata dugme za tamni režim na svakoj stranici.
const darkModeButton = document.querySelector('.dark-mode');
// Čita se ključ na "localStorage" pod nazivom "darkModeButtonState" i čuva u konstanti "darkModeButtonState".
const darkModeButtonState = localStorage.getItem('darkModeButtonState');
// DEBUG ispis u konzoli naziva HTML datoteke i stanja ključa "darkModeButtonState". Ovo je vid provere u konzoli kako teče izvršavanje koda.
console.log(`Početno stanje dugmeta na stranici ${window.location.pathname} je ${localStorage.getItem('darkModeButtonState')}`);
// DEBUG
/* Nadgledanje učitavanja sadržaja DOM-a i pozivanje funkcije "initMode" kojom se obrađuje dati događaj učitavanja i vrše se provere i
inicijalizacija režima dugmeta odn. prikaza. */
document.addEventListener('DOMContentLoaded', initMode);
/* Nadgledanje događaja klika na dugme putem objekta "darkModeButton" i pozivanje obrađivača "changeMode", funkcije kojom se vrši promena stanja
dugmeta, a samim tim i prikaza. */
darkModeButton.addEventListener('click', changeMode);

// TEST

window.addEventListener('resize', prikazSV);

function prikazSV(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

const i = window.innerWidth;
if (i < 810) {
    toggleMenu;
    console.log("ispunjen prvi uslov");
}
const menu = document.querySelector('.site-navigation');
const menuItems = document.querySelectorAll('.navigation-link');
const hamburger = document.querySelector('.hamburger-button');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

hamburger.addEventListener('click', toggleMenu);
    
// TEST

// FUNKCIJE ZA DUGME ZA NOĆNI REŽIM (klasa ".dark-mode")

function applyNight() {
    document.body.style.backgroundColor = 'black';
    darkModeButton.textContent = "Noćni režim";
    localStorage.setItem('darkModeButtonState','night');
}

/* "applyDay()" je funkcija kojom se postavlja da telo dokumenta (stranice) bude bele boje - uključuje se dnevni režim, 
   tekst u dugmetu se postavlja na "Dnevni režim" i na kraju se stanje "day" čuva na "localStorage" u ključu "darkModeButtonState" kako
   bi bilo dostupno za čitanje kada se inicijalizuje stranica funkcijom "initMode".
   U osnovi ovako se memoriše stanje i tako je dostupno za očitavanje kada se otvaraju druge stranice i dnevni režim se primenjuje na čitav sajt!
*/
function applyDay() {
    document.body.style.backgroundColor = 'white';
    darkModeButton.textContent = "Dnevni režim";
    localStorage.setItem('darkModeButtonState','day');
}

// Funkcija kojom se postavlja početno stanje (inicijalizuje) dugmeta, odn. prikaza. Ovo je i obrađivač događaja 'DOMContentLoaded'.
function initMode(){
    const state = localStorage.getItem('darkModeButtonState'); // Preuzimanje stanja sa "localStorage"-a.
    // DEBUG
    console.log(`Početno stanje za funk. "initMode()" kada se učita DOM: ${state}`);
    // DEBUG
    if (state === null || state === undefined) { // Provera da li je stanje "null" (nema reference na objekat) ili "undefined" (nema vrednosti). 
        applyNight(); // Ako jeste, poziva se "applyNight()" kojom se postavlja podrazumevano stanje ("night") koje se upisuje u "state".
    }
    if (state === 'day') { /* Provera da li je stanje "day". Ako jeste, poziva se "applyDay()" i primenjuje se dnevni režim. */
        applyDay();        
    } else if (state === 'night') { /* Provera ako stanje nije "day", da li je "night". Ako jeste, poziva se "applyNight()" i primenjuje se noćni. */
        applyNight();
    }
}

// Funkcija kojom se menja režim prikaza kada se klikne na dugme. Ovo je i obrađivač događaja 'click'.
/* Logika rada: 
   1. očita se trenutno stanje i upiše u konstantu "state";
   2. ako je stanje "night", to znači da je to prethodno stanje, a pošto je kliknuto na dugme to stanje treba promeniti u stanje "day" pozivom funk.
   "applyDay()" odn. režim prikaza je bio noćni, kliknuto je na dugme i sada se prebacuje na dnevni režim;
   3. ako stanje nije "night" i ako je "day", to znači da je to prethodno stanje bilo "day", odn. režim prikaza je bio dnevni, kliknuto je na dugme
   i sada se prebacuje na noćni režim posredstvom funk. "applyNight()" - obrnuta logika od izraza 2.!
*/
function changeMode(){
    const state = localStorage.getItem('darkModeButtonState');
    if (state === 'night') {
        applyDay();
    } else if (state === 'day'){
        applyNight();
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


