/**
 * Created with IntelliJ IDEA.
 * User: Arnaud Da Silva
 * Date: 09/11/2013
 * Time: 14:59
 * To change this template use File | Settings | File Templates.
 */

/* Ce fichier contient le lancement du jeu et son déroulement */




function Tirer(joueurTireur, joueurVictime){
    var caseTire = prompt(joueurTireur.prenom + ", choisissez une case à Tirer (par exemple A1)").toUpperCase();
    if (caseTire == null){
       alert("il faut entrer une coordonnée, vous perdez un coups");
    }
    if (caseTire ==""){
        alert("il faut entrer une coordonnée, vous perdez un coups");
    }
    BateauTouche(joueurVictime, caseTire);
    modifierGrille(joueurVictime);
    joueurTireur.coups+=1;

}

function LancerPartie(joueur, joueurCible){
    var reste = true;
    RAZHistoriqueCases();
    genererGrille();

    alert (joueurCible.prenom+" Vous allez placer vos Bateaux");
    PlacerLesBateaux(joueurCible);
    alert (joueur.prenom+" C'est à votre tour, tentez de détruire les bateaux de "+joueurCible.prenom+" en moins de coups possible");

    while (reste == true){
        Tirer(joueur, joueurCible);
        if (VerifierSiBateauxRestant(joueurCible)){
            reste = true;
        }
        else{
            reste = false;
        }
    }

}

function DeterminerGagnant(joueur1, joueur2){
    if (joueur1.coups > joueur2.coups){
        alert(joueur2.prenom+" gagne la partie avec "+joueur2.coups+" coups contre "+joueur1.coups);
    }
    else if(joueur1.coups < joueur2.coups){
        alert(joueur1.prenom+" gagne la partie avec "+joueur1.coups+" coups contre "+joueur2.coups)
    }
    else{
        alert(joueur1.prenom+" et "+joueur2.prenom+ " vous êtes à égalité avec "+joueur1.coups+" coups");
    }
}

function Jouer(){
    var joueur1 = new Joueur();
    var joueur2 = new Joueur();
    GenererNouveauxJoueurs(joueur1, joueur2);

    alert(joueur2.prenom+" commence la partie");
    LancerPartie(joueur2, joueur1);
    alert("Les bateaux de "+joueur1.prenom+" sont tous coulés !!!");

    alert("C'est au tour de "+joueur1.prenom+" de Tirer");
    LancerPartie(joueur1, joueur2);

    DeterminerGagnant(joueur1, joueur2);
}