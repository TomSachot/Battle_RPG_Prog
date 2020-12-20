var atk = document.getElementById("Attaque1")
var def = document.getElementById("Défense1")
var ulti1 = document.getElementById("Actionperso1")
var pvmonstre = document.getElementById("HPmonstre")
var pvperso1 = document.getElementById("affichePV")
var texte = document.getElementById("lw")
var manaperso1 = 30
var atkperso1 = 24
var defperso1 = 0.5
var tourulti1 = 3
var atkmonstre = 13

pvmonstre.value = 250
pvmonstre.innerHTML = pvmonstre.value
pvperso1.value = 100
pvperso1.innerHTML = pvperso1.value


atk.onclick = function(){
    texte.innerHTML = "Vous causez des dégâts au Révélator ! Quelle est votre prochaine action ?";
    pvmonstre.value = pvmonstre.value-atkperso1;
    pvmonstre.innerHTML = pvmonstre.value;
    pvperso1.value = pvperso1.value-atkmonstre;
    pvperso1.innerHTML = pvperso1.value; 
}
def.onclick = function(){
    texte.innerHTML = "Vous êtes à couvert mais aussi légèrement blessé... Quelle est votre prochaine action ?"
    pvperso1.value = pvperso1.value-(atkmonstre*defperso1);
    pvperso1.innerHTML = pvperso1.value;
}

