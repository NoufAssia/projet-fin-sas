const { colors } = require("prompt");

const prompt = require("prompt-sync")();
// Coulour 
const couleurs = {
    reset: "\x1b[0m",     // Arrête la couleur, retour à la normale
    rouge: "\x1b[31m",    // Pour les erreurs
    vert: "\x1b[32m",     // Pour les succès
    jaune: "\x1b[33m",    // Pour les avertissements ou les menus
    bleu: "\x1b[34m",     // Pour les informations
    magenta: "\x1b[35m",  // Pour mettre en évidence un résultat
    cyan: "\x1b[36m",     // Pour les titres de section
    gras: "\x1b[1m",      // Rend le texte plus épais (bold)
};
function colorer(texte, code) {
    return code + texte + couleurs.reset;
}

// Data
const candidates = [
    { cin: "UV123456", nom: "Kabbaj", prenom: "Imane", partiPolitique: "Parti C", age: 39, electeurs: [] },
    { cin: "WX234567", nom: "Lahlou", prenom: "Anas", partiPolitique: "Parti D", age: 31, electeurs: [] },
    { cin: "YZ345678", nom: "Mernissi", prenom: "Khadija", partiPolitique: "Parti A", age: 48, electeurs: [] },
    { cin: "AA456789", nom: "Naciri", prenom: "Soufiane", partiPolitique: "Parti B", age: 37, electeurs: [] },
    { cin: "BB567890", nom: "Ouazzani", prenom: "Meryem", partiPolitique: "Parti C", age: 44, electeurs: [] },
    { cin: "CC678901", nom: "Qadiri", prenom: "Adil", partiPolitique: "Parti D", age: 52, electeurs: [] },
    { cin: "DD789012", nom: "Rami", prenom: "Aya", partiPolitique: "Parti A", age: 29, electeurs: [] },
    { cin: "EE890123", nom: "Saidi", prenom: "Walid", partiPolitique: "Parti B", age: 46, electeurs: [] },
    { cin: "FF901234", nom: "Zerouali", prenom: "Leila", partiPolitique: "Parti C", age: 41, electeurs: [] },
    { cin: "GG012345", nom: "Zerouali", prenom: "Hamza", partiPolitique: "Parti D", age: 35, electeurs: [] },
];

// Contro Menu
function controlMenu() {
    let choix;
    while (choix !== 0) {
        choix = menuPrincipale();
        switch (choix) {
            case 1:
                ajouterCandidat();
                break;
            case 2:
                ajouterPlusieursCandidats();
                break;
            case 3:
                afficherCandidatControlMenu();
                break;
            case 4:
                voter();
                break;
            case 5:
                modificationCandidatControlMenu();
                break;
            case 6:
                supprimerUnCandidat();
                break;
            case 7:
                rechercherDesCandidats();
                break;
            case 8:
                Statistiques();
                break;
            case 0:
                console.log(colorer("Au revoir.", couleurs.vert));
                console.log();
                break;

            default:
                console.log(colorer("Erreur: Choix invalide.", couleurs.rouge));
        }
    }
}
controlMenu();

// Afficher candidat(s) control menu
function afficherCandidatControlMenu() {
    let choix;
    while (choix !== 0) {
        choix = AfficherCandidatsMenu();
        switch (choix) {
            case 1:
                afficherLesCandidats();
                break;
            case 2:
                afficherCandidatsParNombreDeVotes();
                break;
            case 3:
                afficherCandidatsParPartiPolitique();
                break;
            case 0:
                break;
            default:
                console.log(colorer("Erreur: Choix invalide.", couleurs.rouge));
        }
    }
}

// Modification control menu
function modificationCandidatControlMenu() {
    let choix;

    while (choix !== 0) {
        choix = AffichermodificationCandidatsMenu();

        switch (choix) {
            case 1:
                modifierAgeDeCandidat();
                break;
            case 2:
                modifierpartiPolitiqueDeCandidat();
                break;
            case 0:
                break;
            default:
                console.log(colorer("Erreur: Choix invalide.", couleurs.rouge));
        }
    }
}

// Menu principale
function menuPrincipale() {
    console.log(colorer(`=================================
     GESTION DES ÉLECTIONS
================================= `, couleurs.jaune));
    console.log(`
1. Ajouter un candidat
2. Ajouter plusieurs candidats
3. Afficher les candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher des candidats 
8. Statistiques de l'élection
0. Quitter`);
    console.log();
    const choix = Number(prompt(colorer("Votre choix : ", couleurs.bleu)));
    console.log();
    return (choix);
}

// Afficher candidat(s) menu
function AfficherCandidatsMenu() {
    console.log(colorer(`=================================
AFFICHER LES CANDIDATS
================================= `, couleurs.jaune));
    console.log(`
1. Afficher la list des candidats
2. Afficher les candidats par nombre de votes
3. Afficher  les candidats d'un partie politique specifique
0. Retour au menu principal`);
    console.log();
    const choix = Number(prompt(colorer("Votre choix : ", couleurs.bleu)));
    console.log();
    return (choix);
}

// Modification les candidat menu
function AffichermodificationCandidatsMenu() {
    console.log(colorer(`=================================
MODIFIER LES INFORMATION DU CANDIDAT
================================= `, couleurs.jaune));
    console.log(`
1. Modifier l'âge d'un candidat
2. Modifier le parti politique d'un candidat
0. Retour au menu principal`);
    console.log();
    const choix = Number(prompt(colorer("Votre choix : ", couleurs.bleu)));
    console.log();
    return (choix)
}

// Linear search pour cin
function linearSearchCin(cin) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].cin === cin) {
            return candidates[i];
        }
    }
    return (-1);
}

// Linear search par nom
function linearSearchParNom(nom) {
    let result = [];
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].nom === nom) {
            result.push(candidates[i]);
        }
    }
    return (result);
}

// Bubble sort
function bubbleSort(sortedCandidates) {
    for (let i = 0; i < sortedCandidates.length - 1; i++) {
        for (let j = 0; j < sortedCandidates.length - 1 - i; j++) {
            if (sortedCandidates[j].electeurs.length < sortedCandidates[j + 1].electeurs.length) {
                let swap = sortedCandidates[j];
                sortedCandidates[j] = sortedCandidates[j + 1];
                sortedCandidates[j + 1] = swap;
            }
        }
    }
    return (sortedCandidates)
}

// Ajouter un candidat
function ajouterCandidat() {
    console.log();
    const cin = prompt(colorer("Entrer la CIN : ", couleurs.cyan));

    const candidatDejaExist = linearSearchCin(cin);

    if (candidatDejaExist !== -1) {
        console.log();
        console.log(colorer("Erreur: Candidat déja existe.", couleurs.rouge))
        console.log();
        return false;
    }

    const nom = prompt(colorer("Entrer le nom : ", couleurs.cyan));
    const prenom = prompt(colorer("Entrer le prénom : ", couleurs.cyan));
    let partipolitique = prompt(colorer("Entrer le parti politique (ou Indépendant): ", couleurs.cyan));

    if (partipolitique === "" || partipolitique === null) {
        partipolitique = "Independant";
    }
    const age = Number(prompt(colorer("Entrer L'âge' : ", couleurs.cyan)));

    if (age < 18 && age < 65) {
        console.log();
        console.log(colorer("Erreur: Age invalide .", couleurs.rouge));
        console.log();
        return false;
    }

    // Candidat object
    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partipolitique,
        age: age,
        electeurs: [],
    }

    candidates.push(candidat);

    console.log();
    console.log(colorer("Candidat(s) ajouté avec succès.", couleurs.vert));
    console.log();
    return true;
}

// Ajouter plusieurs candidats à la fois.
function ajouterPlusieursCandidats() {
    console.log();
    const number = Number(prompt(colorer("Combien de candidats souhaitez-vous ajouter ? : ", couleurs.cyan)));

    if (number <= 0) {
        console.log();
        console.log(colorer("Erreur: nombre invalide.", couleurs.rouge));
        console.log();
        return;
    }

    let i = 0;
    while (i < number) {
        console.log();
        console.log(colorer(`--- Candidat numéro: ${i + 1} ---`, couleurs.magenta));
        console.log();

        check = ajouterCandidat();
        if (check === true) {
            i++;
        }
    }
}

// Afficher la liste des candidats.
function afficherLesCandidats() {
    if (candidates.length === 0) {
        console.log();
        console.log(colorer("--- Aucun candidat enregistré ---", couleurs.gras));
        console.log();
        return;
    }

    console.log();
    console.log(colorer("--- LA LIST DES CANDIDATS ---", couleurs.magenta));
    console.log();

    for (let i = 0; i < candidates.length; i++) {
        const candidat = candidates[i];
        console.log(`${i + 1}. ${candidat.nom} ${candidat.prenom} - CIN : ${candidat.cin} - Parti politique : ${candidat.partiPolitique} - Âge : ${candidat.age} - Vote : ${candidat.electeurs.length}.`);
    }
    console.log();
}

// Afficher candidats par nombre de votes
function afficherCandidatsParNombreDeVotes() {
    if (candidates.length === 0) {
        console.log();
        console.log(colorer("--- Aucun candidat enregistré ---", couleurs.gras));
        console.log();
        return;
    }

    let sortedCandidates = [];
    for (let i = 0; i < candidates.length; i++) {
        sortedCandidates[i] = candidates[i];
    }

    sortedCandidates = bubbleSort(sortedCandidates);

    console.log();
    console.log(colorer("--- CANDIDATS PAR NOMBRE DE VOTES ---", couleurs.magenta));
    console.log();

    for (let i = 0; i < sortedCandidates.length; i++) {
        const candidat = sortedCandidates[i];
        console.log(`${i + 1}. ${candidat.nom} ${candidat.prenom} - CIN : ${candidat.cin} - Parti politique : ${candidat.partiPolitique} - Âge : ${candidat.age} - Vote : ${candidat.electeurs.length}.`);
    }
    console.log();
}

// Afficher les candidats d'un parti politique spécifique
function afficherCandidatsParPartiPolitique() {
    if (candidates.length === 0) {
        console.log();
        console.log(colorer("--- Aucun candidat enregistré ---", couleurs.gras));
        console.log();
        return;
    }

    let parti = prompt(colorer(`Entrer le parti politique (ou "Independant" ): `, couleurs.cyan));
    if (parti == null || parti.trim() === "") {
        parti = "Independant";
    }

    console.log();
    console.log(colorer(`--- CANDIDATS DU PARTI POLITIQUE : ${parti} ---`, couleurs.magenta));
    console.log();

    let found = 0;

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].partiPolitique === parti) {
            const candidat = candidates[i];


            console.log(`${i + 1}. ${candidat.prenom} ${candidat.nom} - CIN : ${candidat.cin} - parti politique : ${candidat.partiPolitique} - Âge :  ${candidat.age} - Votes : ${candidat.electeurs.length}.`);

            found = 1;
        }
    }
    console.log();

    if (found === 0) {
        console.log(colorer("--- Aucun candidat trouvé pour ce parti ---", couleurs.gras));
    }
}

// Voter sur un candidat
function voter() {
    console.log();
    const electeurCin = prompt(colorer("Saisir Ta propre CIN : ", couleurs.cyan));

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
        console.log(colorer(`Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.`, couleurs.rouge));
        console.log();
        return;
    }
    else {
        // find le candidat
        console.log();
        const candidatCin = prompt(colorer("Entrer la CIN du candidat : ", couleurs.cyan));
        console.log();

        const candidat = linearSearchCin(candidatCin);

        if (candidat === -1) {
            console.log(colorer("Erreur: candidat n'existe pas.", couleurs.rouge));
            console.log();
            return;
        }
        else {
            candidat.electeurs.push(electeurCin);
        }
        console.log(colorer("Votre vote a enregistré avec succès.", couleurs.vert));
        console.log();
    }
}

// Modifier l'age d'un candidat
function modifierAgeDeCandidat() {
    const candidatCin = prompt(colorer("Entrer la Cin du candidat : ", couleurs.cyan));

    const candidat = linearSearchCin(candidatCin);

    if (candidat === -1) {
        console.log();
        console.log(colorer("Erreur: candidat n'existe pas.", couleurs.rouge));
        console.log();
        return;
    }
    else {

        const nouveauAge = Number(prompt(colorer("Enter le nouvel age : ", couleurs.cyan)));
        if (nouveauAge < 18) {
            console.log();
            console.log(colorer("Erreur: Age invalide .", couleurs.rouge));
            console.log();
            return;
        }

        candidat.age = nouveauAge;

        console.log();
        console.log(colorer("Les informations du candidat ont été mises à jour avec succès. ", couleurs.vert));
        console.log();
    }
}

// Modifier le parti politique d'un candidat
function modifierpartiPolitiqueDeCandidat() {
    const candidatCin = prompt(colorer("Entrer la Cin du candidat : ", couleurs.cyan));

    const candidat = linearSearchCin(candidatCin);

    if (candidat === -1) {
        console.log();
        console.log(colorer("Erreur: candidat n'existe pas.", couleurs.rouge));
        console.log();
        return;
    }
    else {

        const nouveauParti = Number(prompt(colorer("Enter le nouvel parti politique : ", couleurs.cyan)));

        candidat.partiPolitique = nouveauParti;

        console.log();
        console.log(colorer("Les informations du candidat ont été mises à jour avec succès. ", couleurs.vert));
        console.log();
    }
}

// Supprimer un candidat
function supprimerUnCandidat() {
    console.log();
    const candidatCin = prompt(colorer("Entrer la Cin du candidat : ", couleurs.cyan));

    const candidat = linearSearchCin(candidatCin);

    if (candidat === -1) {
        console.log();
        console.log(colorer("Erreur: candidat n'existe pas.", couleurs.rouge));
        console.log();
        return;
    }
    else {
        console.log();
        console.log(colorer("Fais attention cette procédure supprimera le candidat de la base de données !", couleurs.jaune));
        console.log();
        const safecheck = prompt(colorer("Es-tu sûr? (Non / Oui) : ", couleurs.cyan));

        if (safecheck === "Non") {
            console.log();
            console.log(colorer("La suppression a été annulée.", couleurs.gras));
            return;
        }
        else if (safecheck === "Oui") {
            candidates.splice(candidat, 1);

            console.log();
            console.log(colorer("Le candidat a été supprimé avec succès.", couleurs.vert));
            console.log();
            return;
        }
        console.log();
        console.log(colorer("Votre réponse est incorrecte. La suppression a été annulée.", couleurs.gras));
    }
}

// Rechercher des candidats par nom
function rechercherDesCandidats() {
    const nom = prompt(colorer("Entrer le nom de candidat : ", couleurs.cyan));

    const rechercheNom = linearSearchParNom(nom);

    if (rechercheNom.length === 0) {
        console.log();
        console.log(colorer("Erreur: candidat n'existe pas.", couleurs.rouge));
        console.log();
        return;
    }
    else {
        console.log();
        console.log(colorer(`--- CANDIDATS DU NOM SPECIFIC : ${nom} ---`, couleurs.magenta));
        console.log();

        for (let i = 0; i < rechercheNom.length; i++) {
            const candidat = rechercheNom[i];

            console.log(`${i + 1}. ${candidat.prenom} ${candidat.nom} - CIN : ${candidat.cin} - parti politique : ${candidat.partiPolitique} - Âge :  ${candidat.age} - Votes : ${candidat.electeurs.length}.`);
        }
    }
}

// Statistiques de l'élection
function Statistiques() {
    if (candidates.length === 0) {
        console.log();
        console.log(colorer("--- Aucun candidat enregistré ---", couleurs.gras));
        console.log();
        return;
    }
    // Nombre totale des candidats
    console.log();
    console.log(colorer(`- Voici le nombre totale des candidtas : ${candidates.length} .`, couleurs.bleu));
    console.log();

    //nombre totale de votes
    let resultat = 0;
    for (let i = 0; i < candidates.length; i++) {
        resultat += candidates[i].electeurs.length;
    }
    console.log();
    console.log(colorer(`- Voici le nombre totale de votes exprimés dans toute l'élection : ${resultat}.`, couleurs.bleu));
    console.log();

    // Top 3 candidats / votes
    const sortedCandidates = [];

    for (let i = 0; i < candidates.length; i++) {
        sortedCandidates.push(candidates[i]);
    }

    bubbleSort(sortedCandidates);

    let fin = 3;

    if (sortedCandidates.length < 3) {
        fin = sortedCandidates.length;
    }
    console.log();
    console.log(colorer("- Voici le Top 3 candidats. ", couleurs.bleu));
    console.log();
    for (let i = 0; i < fin; i++) {
        const candidat = sortedCandidates[i];

        console.log(`${i + 1}. ${candidat.nom} ${candidat.prenom} - CIN : ${candidat.cin} - Parti politique : ${candidat.partiPolitique} - Âge : ${candidat.age} - Vote : ${candidat.electeurs.length}.`);
    }
    console.log();

    // candidats par parti politique
    const partisPolitique = [];

    for (let i = 0; i < candidates.length; i++) {

        const parti = candidates[i].partiPolitique;
        if (partisPolitique[parti] === NaN) {
            continue;
        }

        if (partisPolitique[parti] === undefined) {
            partisPolitique[parti] = 1;
        } else {
            partisPolitique[parti]++;
        }
    }

    console.log();
    console.log(colorer("- Voici le nombre de candidtas par parti politique.", couleurs.bleu));
    console.log();

    for (let parti in partisPolitique) {
        console.log(`${parti} : ${partisPolitique[parti]} candidat(s)`);
    }

    console.log();

}