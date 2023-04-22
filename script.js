var gradovi = ['Beograd', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Čačak', 'Zrenjanin', 'Pančevo', 'Smederevo', 'Valjevo'];

function dostupnost(grad) {
    var grad = prompt("Unesi ime grada:");
    for (var i = 0; i < gradovi.length; i++) {
      if (gradovi[i].toUpperCase() === grad.toUpperCase()) {
        alert("Proizvodi su dostupni u gradu " + grad);
        return true;
      }
    }
    alert("U gradu " + grad + " nije dostupno.");
    return false;
  }

  function proveriPopust(popust) {
    var današnjiDan = new Date().getDay();
    if (današnjiDan === 2) { // Utorak
        var novaCena = 200 - (200 * popust / 100);
        alert("Današnji popust je: " + popust + "%. Nova cena je: " + novaCena + " dinara.");
        return novaCena;
    } else {
        alert("Danas nema popusta za ovaj proizvod.");
        return false;
    }
}

function promenaTeksta(){
    var promena = document.getElementById('dva');
    promena.innerHTML = "Mi smo najbolji u gradu";
    promena.style.color = "green";
}

function ispisivanje(){
let name = Forma.name;
let lastname = Forma.lastname;
let komentar = Forma.komentar;

if (name.length === 3) {
    alert('Morate upisati vaše ime!');
    return;
  }
alert('Ime:' +name.value+ "Prezime:" +lastname.value);
}