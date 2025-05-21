const darkModeButton = document.querySelector('.dark-mode');//Selektuje se klasa "dark-mode" čime se obuhvata dugme za tamni režim na svakoj stranici 
const darkModeButtonState = localStorage.getItem('darkModeButtonState'); /*Čita se ključ na "localStorage" pod nazivom "darkModeButtonState" i čuva u
konstanti "darkModeButtonState". */

//DEBUG Ispis u konzoli naziva HTML datoteke i koja je stanje za ključ "darkModeButtonState". Ovo je vid provere u konzoli kako teče izvršavanje koda.
console.log(`Početno stanje dugmeta na stranici ${window.location.pathname} je ${localStorage.getItem('darkModeButtonState')}`);
// Ovaj vid dibag ispisa u konzoli odvajam od drugih radnih elemenata koda komentarima kako bi kod bio čitljiviji i pregledniji.
// DEBUG
document.addEventListener('DOMContentLoaded', initMode); /* Nadgledanje učitavanja sadržaja DOM-a i pozivanje funkcije "initMode" kojom se obrađuje
dati događaj učitavanja i vrše se provere i inicijalizacija režima dugmeta odn. prikaza. */

darkModeButton.addEventListener('click', changeMode); /* Nadgledanje događaja klika na dugme putem objekta "darkModeButton" i pozivanje
obrađivača "changeMode", funkcije kojom se vrši promena stanja dugmeta, a samim tim i prikaza. */



function initMode(){ // Funkcija kojom se postavlja početno stanje (inicijalizuje) dugmeta, odn. prikaza.
    const state = localStorage.getItem('darkModeButtonState'); // Preuzimanje stanja sa "localStorage"-a.
    // DEBUG
    console.log(`Pocetno stanje iz funkcije initMode() kada se ucita DOM > ${state}`);
    // DEBUG
    if (state === null || state === undefined) { // Provera da li je stanje "null" (nema reference na objekat) ili "undefined" (nema vrednosti). 
        localStorage.setItem('darkModeButtonState','night'); // Ako jeste, onda se postavlja podrazumevano stanje "night" i to se upisuje u "state".
        state = localStorage.getItem('darkModeButtonState');
        // DEBUG
        console.log(`Provera kada je stanje bilo null, sada je stanje > ${localStorage.getItem('darkModeButtonState')}`);
        // DEBUG
    }
    if (state === 'day') { /* Provera da li je stanje "day". Ako jeste, postavlja se da telo dokumenta (stranice) bude bele boje - dnevni režim,
        tekst u dugmetu se postavlja na "Dnevni režim" i na kraju se stanje "day" čuva na "localStorage" u ključu "darkModeButtonState" kako
        bi bilo dostupno za čitanje kada se inicijalizuje stranica funkcijom "initMode". U osnovi tako se memoriše stanje i tako je dostupno za
        očitavanje kada se otvaraju druge stranice, odn. dnevni režim se primenjuje na čitav sajt! */
        document.body.style.backgroundColor = 'white';
        darkModeButton.textContent = "Dnevni režim";
        localStorage.setItem('darkModeButtonState','day');
        // DEBUG
        console.log(`${darkModeButton.textContent}; izvrsena je funk. changeMode()`);
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je dnevni rezim`);
        // DEBUG        
    } else if (state === 'night') { /* Provera ako stanje nije "day", da li je "night". Ako jeste, onda se primenjuje sve ono što je napisano i za 
        situaciju kada je stanje "day" samo što se u ovom slučaju primenjuje noćni režim. */
        document.body.style.backgroundColor = 'black';
        darkModeButton.textContent = "Noćni režim";
        localStorage.setItem('darkModeButtonState','night');
        // DEBUG
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je nocni rezim`);
        // DEBUG
    }
}

function changeMode(){
    const state = localStorage.getItem('darkModeButtonState');
    if (state === 'night') {
        document.body.style.backgroundColor = 'white';
        darkModeButton.textContent = "Dnevni režim";
        localStorage.setItem('darkModeButtonState','day');
        // DEBUG
        console.log(`${darkModeButton.textContent}; izvrsena je funk. changeMode()`);
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je dnevni rezim`);
        // DEBUG
    } else if (state === 'day'){
        document.body.style.backgroundColor = 'black';
        darkModeButton.textContent = "Noćni režim";
        localStorage.setItem('darkModeButtonState','night');
        // DEBUG
        console.log(`${localStorage.getItem('darkModeButtonState')}; izvrsena je funk. changeMode() i trebalo bi da je nocni rezim`);
        // DEBUG
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


