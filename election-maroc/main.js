// Gestion des Élections et Listes Électorales au Maroc

const prompt = require("prompt-sync")();

// Data

const candidates = [];

// Linear search function par cin 

function linearSearch(cin) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].cin === cin) {
            return candidates[i];
        }
    }
    return (-1);
}

// Linear search function par nom 

function linearSearchParNom(nom) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].nom === nom) {
            return candidates[i];
        }
    }
    return (-1);
}

// linear Search Return Index

function linearSearchReturnIndex(cin) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].cin === cin) {
            return (i);
        }
    }
    return (-1);
}
// Ajouter un condidat

function ajouterCandidats() {
    const cin = prompt("Entrer la CIN : ");

    // check if candidat deja exist
    const candidatDejaExist = linearSearch(cin);

    if (candidatDejaExist !== -1) {
        console.log("Erreur: candidat déja existe.")
        return;
    }
    const nom = prompt("Entrer le nom : ");
    const prenom = prompt("Entrer le prénom : ");
    const partiPolitique = prompt("Entrer le parti politique : ");
    const age = Number(prompt("Entrer L'âge' : "));

    // condidat object

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: [],
    };

    // push condidat in condidats array

    candidates.push(candidat);

    // success message
    console.log();
    console.log("Candidat ajouté avec succès.");
}

// Ajouter plusieurs candidats à la fois.

function ajouterPlusieursCandidats() {
    // ask user to enter the nombre of candidats
    console.log();
    const nombre = Number(prompt("Combien de candidats souhaitez-vous ajouter ? : "));

    for (let i = 0; i < nombre; i++) {
        console.log();
        console.log(`--- Candidat numéro: ${i + 1} ---`);
        console.log();

        ajouterCandidats();
    }
}

//  Afficher la liste des candidats.

function afficherLesCandidats() {
    if (candidates.length === 0) {
        console.log("Aucun candidat enregistré.");
        return;
    }

    console.log();
    console.log("Voici les candidats enregistré.")
    console.log();

    for (let i = 0; i < candidates.length; i++) {
        const candidat = candidates[i];

        console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`)
    }
    console.log();
}

// Afficher candidats par nombre de votes

function afficherCandidatsParNombreDeVotes() {
    if (candidates.length === 0) {
        console.log("Aucun candidat enregistré.");
        return;
    }

    // Save original array in another array

    const sortedCandidates = [];

    for (let i = 0; i < candidates.length; i++) {
        sortedCandidates.push(candidates[i]);
    }

    // bubble sort

    for (let i = 0; i < sortedCandidates.length - 1; i++) {
        for (let j = 0; j < sortedCandidates.length - i - 1; j++) {
            if (sortedCandidates[j].electeurs.length < sortedCandidates[j + 1].electeurs.length) {
                const swap = sortedCandidates[j];
                sortedCandidates[j] = sortedCandidates[j + 1];
                sortedCandidates[j + 1] = swap;
            }
        }

    }

    // affichage le candidats par nombre de Votes

    console.log();
    console.log("--- CANDIDATS PAR NOMBRE DE VOTES ---");

    // loop through candidates and their properties

    for (let i = 0; i < sortedCandidates.length; i++) {
        const candidat = sortedCandidates[i];

        console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`);
    }
}

// Afficher les candidats d'un parti politique spécifique

function afficherCandidatsParPartiPolitique() {
    // ask user to enter their parti politique
    const parti = prompt("Entrer le parti politique : ");

    // search for  candidat par parti politique

    let found = 0;

    console.log(`--- CANDIDATS DU PARTI POLITIQUE : ${parti} ---`);

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].partiPolitique === parti) {
            const candidat = candidates[i];

            // affiche

            console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`);

            found = 1;
        }
    }

    if (found === 0) {
        console.log("Aucun candidat trouvé pour ce parti. ");
    }
}

// Voter pour un candidat

function voter() {
    console.log();
    const electeurCin = prompt("Saisir Ta propre CIN : ");

    // check cin if deja enregistrer
    let found = 0;
    for (let i = 0; i < candidates.length; i++) {
        for (let j = 0; j < candidates[i].electeurs.length; j++) {
            if (candidates[i].electeurs[j] === electeurCin) {
                found = 1;
            }
        }
    }

    if (found === 1) {
        console.log();
        console.log(`Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.`);
        return;
    }
    else {
        // Demander l'identifiant ou la CIN du candidat
        console.log();
        const candidatCin = prompt("Entrer la CIN du candidat : ");
        console.log();

        // Ajouter la CIN de l’électeur à la liste des votes du candidat

        // find le candidat

        const candidat = linearSearch(candidatCin);

        // check
        if (candidat === -1) {
            console.log("Erreur: candidat n'existe pas.");
            return;
        }
        else {
            candidat.electeurs.push(electeurCin);
        }

        console.log("Votre vote a enregistré avec succès.");
    }
}

// Modifier les informations d'un candidat

function modifierInfosDeCandidat() {
    const candidatCin = prompt("Entrer la Cin du candidat : ");

    // search for candidat

    const candidat = linearSearch(candidatCin);

    // check

    if (candidat === -1) {
        console.log("Erreur: candidat n'existe pas.");
        return;
    }
    else {
        const newParti = prompt("Entrer le nouveau parti politique : ");

        const newAge = Number(prompt("Enter le nouvel age : "));

        // change infos

        candidat.partiPolitique = newParti;
        candidat.age = newAge;

        console.log();
        console.log("Les informations du candidat ont été mises à jour avec succès. ");
        console.log();
    }


}


// Supprimer un candidat

function supprimerUnCandidat() {
    console.log();
    const candidatCin = prompt("Entrer la Cin du candidat : ");

    // search for candidat

    const candidatIndex = linearSearchReturnIndex(candidatCin);

    // check

    if (candidatIndex === -1) {
        console.log();
        console.log("Erreur: candidat n'existe pas.");
        return;
    }
    else {
        console.log();
        console.log("Fais attention cette procédure supprimera le candidat de la base de données !");
        console.log();
        const safecheck = prompt("Es-tu sûr? (Non / Oui) : ");

        if (safecheck === "Non") {
            console.log();
            console.log("La suppression a été annulée.");
            return;
        }
        else if (safecheck === "Oui") {
            candidates.splice(candidatIndex, 1);

            console.log();
            console.log("Le candidat a été supprimé avec succès.");
            console.log();
            return;
        }
        console.log();
        console.log("Votre réponse est incorrecte. La suppression a été annulée.");


    }
}

// Rechercher des candidats par nom

function rechercherDesCandidats() {
    const nom = prompt("Entrer le nom de candidat : ");

    const rechercheNom = linearSearchParNom(nom);

    if (rechercheNom === -1) {
        console.log();
        console.log("Erreur: candidat n'existe pas.");
        return;
    }
    else {
        console.log();
        console.log("Candidat est exist.");
    }

}

// Statistiques de l'élection
function Statistiques() {
    // Nombre totale des candidats

    console.log(`Voice le nombre totale des candidtas : ${candidates.length} .`);

    //nombre totale de votes
    let resultat = 0;
    for (let i = 0; i < candidates.length; i++) {
        resultat += candidates[i].electeurs.length;
    }
    console.log(`Voici le nombre totale de votes exprimés dans toute l'élection : ${resultat}.`);

    // Top 3 candidats / votes

    const sortedCandidates = [];

    for (let i = 0; i < candidates.length; i++) {
        sortedCandidates.push(candidates[i]);
    }

    // bubble sort

    for (let i = 0; i < sortedCandidates.length - 1; i++) {
        for (let j = 0; j < sortedCandidates.length - i - 1; j++) {
            if (sortedCandidates[j].electeurs.length < sortedCandidates[j + 1].electeurs.length) {
                const swap = sortedCandidates[j];
                sortedCandidates[j] = sortedCandidates[j + 1];
                sortedCandidates[j + 1] = swap;
            }
        }

    }

    let fin = 3;

    if (sortedCandidates.length < 3) {
        fin = sortedCandidates.length;
    }

    for (let i = 0; i < fin; i++) {
        console.log(`=================================
Candidat ${i + 1}
=================================
CIN : ${candidat.cin}
Nom : ${candidat.nom}
Prénom : ${candidat.prenom}
Parti politique : ${candidat.partiPolitique}
Âge : ${candidat.age}
Nombre de votes : ${candidat.electeurs.length}
=================================`);
    }

    // candidats par parti politique


}

// menu principale

function afficherMenu() {
    console.log();
    console.log(`=================================
GESTION DES ÉLECTIONS
=================================
1. Ajouter un candidat
2. Ajouter plusieurs candidats
3. Afficher la list des candidats
4. Afficher candidats par nombre de votes
5. Afficher les candidats d'un parti politique spécifique
6. Voter pour un candidat
7. Modifier les informations d'un candidat
8. Supprimer un candidat
9. Rechercher des candidats 
10. Statistiques de l'élection
0. Quitter`);

    console.log();

    const choix = Number(prompt("Votre choix : "));
    return (choix);
}

function controlMenu() {
    let choix;

    while (choix !== 0) {
        choix = afficherMenu();

        switch (choix) {
            case 1:
                ajouterCandidats();
                break;

            case 2:
                ajouterPlusieursCandidats();
                break;

            case 3:
                afficherLesCandidats();
                break;

            case 4:
                afficherCandidatsParNombreDeVotes();
                break;

            case 5:
                afficherCandidatsParPartiPolitique();
                break;

            case 6:
                voter();
                break;

            case 7:
                modifierInfosDeCandidat();
                break;

            case 8:
                supprimerUnCandidat();
                break;

            case 9:
                rechercherDesCandidats();
                break;

            case 10:
                Statistiques();
                break;

            case 0:
                console.log("Au revoir.");
                break;

            default:
                console.log("Choix invalide.");
        }
    }


}

controlMenu();