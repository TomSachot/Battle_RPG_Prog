var atk = document.getElementById("Attaque1")
var def = document.getElementById("Défense1")
var ulti1 = document.getElementById("Actionperso1")
var pvmonstre = document.getElementById("HPmonstre")
var pvperso1 = document.getElementById("affichePV")
var manaperso1 = document.getElementById("afficheMana")
var texte = document.getElementById("lw")
var coutmana = 9
var atkperso1 = 27
var defperso1 = 0.5
var atkmonstre = 12

pvmonstre.value = 250
pvmonstre.innerHTML = pvmonstre.value
pvperso1.value = 100
pvperso1.innerHTML = pvperso1.value
manaperso1.value = 30
manaperso1.innerHTML = manaperso1.value
atkperso1.value = 27
atkmonstre.value = 12
coutmana = 9


atk.onclick = function(){
    texte.innerHTML = "Vous causez des dégâts au Révélator !";
    pvmonstre.value = pvmonstre.value-atkperso1;
    pvmonstre.innerHTML = pvmonstre.value;
    pvperso1.value = pvperso1.value-atkmonstre;
    pvperso1.innerHTML = pvperso1.value;
    if (pvperso1.value <= 0){
        texte.innerHTML = "Le Révelator est trop puissant pour vous...";
        pvperso1.innerHTML = "0";
    }
    if (pvmonstre.value <= 0){
        texte.innerHTML = "Rentrez faire votre rapport, la région est sauvée !";
        document.getElementById("Monstre1").style.backgroundImage = "url(explosion.png)";
        pvmonstre.innerHTML = "0";
    }
    if (pvmonstre.value <= atkperso1){
        atkmonstre = 0;
    }
}
def.onclick = function(){
    texte.innerHTML = "Vous êtes à couvert mais aussi légèrement blessé..."
    pvperso1.value = pvperso1.value-(atkmonstre*defperso1);
    pvperso1.innerHTML = pvperso1.value;
    if (pvperso1.value <= 0){
        texte.innerHTML = "Le Révelator est trop puissant pour vous...";
        pvperso1.innerHTML = "0";
    }
}
ulti1.onclick = function(){
    if (manaperso1.value > coutmana){
    texte.innerHTML = "Eli se soigne avec un kit de soins !"
    pvperso1.value = pvperso1.value + 23;
    pvperso1.innerHTML = pvperso1.value;
    manaperso1.value = manaperso1.value-coutmana;
    manaperso1.innerHTML = manaperso1.value;
    }
    if (pvperso1.value > 100){
        pvperso1.value = 100;
        pvperso1.innerHTML = pvperso1.value;
    }
    if (manaperso1.value < coutmana){
        texte.innerHTML = "Vous n'avez plus de médikits sous la main...";
    }
}

