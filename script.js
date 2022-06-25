var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}

function submitdata() {
    var bijak = document.getElementById("bijak").value;

    alert(bijak);
}

function kirimdata() {
    var motiv = document.getElementById("motiv").value;
    
    alert(motiv);
    
}

function hitungTambah() {
    var tam1 = parseInt(document.getElementById("tambah1").value);
    var tam2 = parseInt(document.getElementById("tambah2").value);
    var jawab = document.getElementById("jawTam");
    jawab.value = tam1+tam2;
}

function hitungKurang() {
    var kur1 = parseInt(document.getElementById("kurang1").value);
    var kur2 = parseInt(document.getElementById("kurang2").value);
    var jawab = document.getElementById("jawKur");
    jawab.value = kur1-kur2;
}

function hitungKali() {
    var kali1 = parseInt(document.getElementById("kali1").value);
    var kali2 = parseInt(document.getElementById("kali2").value);
    var jawab = document.getElementById("jawKali");
    jawab.value = kali1*kali2;
}

function hitungBagi() {
    var bagi1 = parseInt(document.getElementById("bagi1").value);
    var bagi2 = parseInt(document.getElementById("bagi2").value);
    var jawab = document.getElementById("jawBagi");
    jawab.value = bagi1/bagi2;
}

function gambar1() {
    var gambartampil = document.getElementById("tampilkan").value;
    var gambarhacker = document.getElementById("hacker");
    gambartampil = gambarhacker.style.display = "block";
}

function gambar2() {
    var gambarhilang = document.getElementById("hilangkan").value;
    var gambarhacker = document.getElementById("hacker");
    gambarhilang = gambarhacker.style.display = "none";
    
}