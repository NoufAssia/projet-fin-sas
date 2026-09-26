const prompt = require("prompt-sync")();
// Data
const candidates = [
    { cin: "AB123456", nom: "Alami", prenom: "Youssef", partiPolitique: "Parti A", age: 45, electeurs: [] },
    { cin: "CD234567", nom: "Benali", prenom: "Amine", partiPolitique: "Parti B", age: 38, electeurs: [] },
    { cin: "EF345678", nom: "Chakir", prenom: "Sara", partiPolitique: "Parti C", age: 42, electeurs: [] },
    { cin: "GH456789", nom: "Dahbi", prenom: "Karim", partiPolitique: "Parti A", age: 51, electeurs: [] },
    { cin: "IJ567890", nom: "El Mansouri", prenom: "Nadia", partiPolitique: "Parti D", age: 36, electeurs: [] },
    { cin: "KL678901", nom: "Fassi", prenom: "Omar", partiPolitique: "Parti B", age: 47, electeurs: [] },
    { cin: "MN789012", nom: "Ghazali", prenom: "Hind", partiPolitique: "Parti C", age: 40, electeurs: [] },
    { cin: "OP890123", nom: "Haddad", prenom: "Mehdi", partiPolitique: "Parti D", age: 34, electeurs: [] },
    { cin: "QR901234", nom: "Idrissi", prenom: "Salma", partiPolitique: "Parti A", age: 43, electeurs: [] },
    { cin: "ST012345", nom: "Jabri", prenom: "Rachid", partiPolitique: "Parti B", age: 55, electeurs: [] },
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
                console.log("Au revoir.");
                break;

            default:
                console.log("Erreur: Choix invalide.");
        }
    }
}
controlMenu();

// Afficher candidat(s) control menu
function afficherCandidatControlMenu()
{
    let choix;
    while(choix !== 0)
    {
        choix = AfficherCandidatsMenu();
        switch (choix)
        {
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
                console.log("Erreur: Choix invalide.");
        }
    }
}

// Modification control menu
function modificationCandidatControlMenu()
{
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
                console.log("Choix invalide.");
        }
    }
}

// Menu principale
function menuPrincipale() {
    console.log(`=================================
GESTION DES ÉLECTIONS
=================================
1. Ajouter un candidat
2. Ajouter plusieurs candidats
3. Afficher les candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher des candidats 
8. Statistiques de l'élection
0. Quitter`);

    const choix = Number(prompt("Votre choix : "));
    return (choix);
}

// Afficher candidat(s) menu
function AfficherCandidatsMenu()
{
     console.log(`=================================
AFFICHER LES CANDIDATS
=================================
1. Afficher la list des candidats
2. Afficher les candidats par nombre de votes
3. Afficher  les candidats d'un partie politique specifique
0. Retour au menu principal`);

    const choix = Number(prompt("Votre choix : "));
    return (choix);
}

// Modification les candidat menu
function AffichermodificationCandidatsMenu()
{
    console.log(`=================================
MODIFIER LES INFORMATION DU CANDIDAT
=================================
1. Modifier l'âge d'un candidat
2. Modifier le parti politique d'un candidat
0. Retour au menu principal`);

const choix = Number(prompt("Votre choix : "));
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
function linearSearchParNom(nom)
{
    for (let i = 0; i < candidates.length; i++)
    {
        if (candidates[i].nom === nom)
        {
            return candidates[i];
        }
    }
    return (-1);
}

// Bubble sort
function bubbleSort(sortedCandidates)
{
    for (let i = 0; i < sortedCandidates.length - 1; i++)
    {
        for (let j = 0; j < sortedCandidates.length - 1 - i; j++)
        {
            if (sortedCandidates[j].electeurs.length < sortedCandidates[j + 1].electeurs.length)
            {
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
    const cin = prompt("Entrer la CIN : ");

    const candidatDejaExist = linearSearchCin(cin);

    if (candidatDejaExist !== -1) {
        console.log();
        console.log("Erreur: Candidat déja existe.")
        console.log();
        return false;
    }

    const nom = prompt("Entrer le nom : ");
    const prenom = prompt("Entrer le prénom : ");
    let partipolitique = prompt("Entrer le parti politique (ou Indépendant): ");

    if (partipolitique.trim() === "") {
    partipolitique = "Indépendant";
}
    const age = Number(prompt("Entrer L'âge' : "));

    if (age < 18) {
        console.log();
        console.log("Erreur: Age invalide .");
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
    console.log("Candidat(s) ajouté avec succès.");
    console.log();
    return true;
}

// Ajouter plusieurs candidats à la fois.
function ajouterPlusieursCandidats() {
    console.log();
    const number = Number(prompt("Combien de candidats souhaitez-vous ajouter ? : "));

    let i = 0;
    while (i < number) {
        console.log();
        console.log(`--- Candidat numéro: ${i + 1} ---`);
        console.log();

        check = ajouterCandidat();
        if (check)
        i++;
    }
}

// Afficher la liste des candidats.
function afficherLesCandidats()
{
    if (candidates.length === 0)
    {
        console.log();
        console.log("--- Aucun candidat enregistré. ---");
        console.log();
        return;
    }

    console.log();
    console.log("--- Voici les candidats enregistré. ---");
    console.log();

    for (let i = 0; i < candidates.length; i++)
    {
        const candidat = candidates[i];
        console.log(`${i + 1}. ${candidat.nom} ${candidat.prenom} - CIN : ${candidat.cin} - Parti politique : ${candidat.partiPolitique} - Âge : ${candidat.age} - Vote : ${candidat.electeurs.length}.`);
    }
    console.log();
}

// Afficher candidats par nombre de votes
function afficherCandidatsParNombreDeVotes()
{
    if (candidates.length === 0)
    {
        console.log();
        console.log("--- Aucun candidat enregistré. ---");
        console.log();
        return;
    }

    let sortedCandidates = [];
    for (let i = 0; i < candidates.length; i++)
    {
        sortedCandidates[i] = candidates[i];
    }

    sortedCandidates = bubbleSort(sortedCandidates);

    console.log();
    console.log("--- CANDIDATS PAR NOMBRE DE VOTES ---");
    console.log();

    for (let i = 0; i < sortedCandidates.length; i++)
    {
        const candidat = sortedCandidates[i];
        console.log(`${i + 1}. ${candidat.nom} ${candidat.prenom} - CIN : ${candidat.cin} - Parti politique : ${candidat.partiPolitique} - Âge : ${candidat.age} - Vote : ${candidat.electeurs.length}.`);
    }
    console.log();
}

// Afficher les candidats d'un parti politique spécifique
function afficherCandidatsParPartiPolitique()
{
    if (candidates.length === 0)
    {
        console.log();
        console.log("--- Aucun candidat enregistré. ---");
        console.log();
        return;
    }

    const parti = prompt("Entrer le parti politique : ");

    console.log();
    console.log(`--- CANDIDATS DU PARTI POLITIQUE : ${parti} ---`);
    console.log();

    let found = 0;

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].partiPolitique === parti) {
            const candidat = candidates[i];


            console.log(`${i + 1}. ${candidat.prenom} ${candidat.nom} - CIN : ${candidat.cin} - parti politique : ${candidat.partiPolitique} - Âge :  ${candidat.age} - Votes : ${candidat.electeurs.length}.`);

            found = 1;
        }
    }

    if (found === 0) {
        console.log("--- Aucun candidat trouvé pour ce parti. ---");
    }
}

// Voter sur un candidat
function voter()
{
        console.log();
    const electeurCin = prompt("Saisir Ta propre CIN : ");

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
        console.log();
        return;
    }
    else {
        // find le candidat
        console.log();
        const candidatCin = prompt("Entrer la CIN du candidat : ");
        console.log();

        const candidat = linearSearchCin(candidatCin);

        if (candidat === -1) {
            console.log("Erreur: candidat n'existe pas.");
            console.log();
            return;
        }
        else {
            candidat.electeurs.push(electeurCin);
        }
        console.log("Votre vote a enregistré avec succès.");
        console.log();
    }
}

// Modifier l'age d'un candidat
function modifierAgeDeCandidat() {
    const candidatCin = prompt("Entrer la Cin du candidat : ");

    const candidat = linearSearchCin(candidatCin);

    if (candidat === -1) {
        console.log();
        console.log("Erreur: candidat n'existe pas.");
        console.log();
        return;
    }
    else {

        const nouveauAge = Number(prompt("Enter le nouvel age : "));
        if (nouveauAge < 18)
        {
            console.log();
            console.log("Erreur: Age invalide .");
            console.log();
            return; 
        }

        candidat.age = nouveauAge;

        console.log();
        console.log("Les informations du candidat ont été mises à jour avec succès. ");
        console.log();
    }
}

// Modifier le parti politique d'un candidat
function modifierpartiPolitiqueDeCandidat() {
    const candidatCin = prompt("Entrer la Cin du candidat : ");

    const candidat = linearSearchCin(candidatCin);

    if (candidat === -1) {
        console.log();
        console.log("Erreur: candidat n'existe pas.");
        console.log();
        return;
    }
    else {

        const nouveauParti = Number(prompt("Enter le nouvel parti politique : "));

        candidat.partiPolitique = nouveauParti;

        console.log();
        console.log("Les informations du candidat ont été mises à jour avec succès. ");
        console.log();
    }
}

// Supprimer un candidat
function supprimerUnCandidat() {
    console.log();
    const candidatCin = prompt("Entrer la Cin du candidat : ");

    const candidat = linearSearchCin(candidatCin);

    if (candidat === -1) {
        console.log();
        console.log("Erreur: candidat n'existe pas.");
        console.log();
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
            candidates.splice(candidat, 1);

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
        console.log();
        return;
    }
    else {
        console.log();
    console.log(`--- CANDIDATS DU NOM SPECIFIC : ${nom} ---`);
    console.log();

    let found = 0;

    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].nom === nom) {
            const candidat = candidates[i];


            console.log(`${i + 1}. ${candidat.prenom} ${candidat.nom} - CIN : ${candidat.cin} - parti politique : ${candidat.partiPolitique} - Âge :  ${candidat.age} - Votes : ${candidat.electeurs.length}.`);

            found = 1;
        }
    }
    if (found === 0) {
        console.log("--- Aucun candidat trouvé par ce nom. ---");
    }
    }
}

// Statistiques de l'élection
function Statistiques() {
    if (candidates.length === 0)
    {
        console.log();
        console.log("--- Aucun candidat enregistré. ---");
        console.log();
        return;
    }
    // Nombre totale des candidats
    console.log();
    console.log(`- Voici le nombre totale des candidtas : ${candidates.length} .`);
    console.log();

    //nombre totale de votes
    let resultat = 0;
    for (let i = 0; i < candidates.length; i++) {
        resultat += candidates[i].electeurs.length;
    }
    console.log();
    console.log(`- Voici le nombre totale de votes exprimés dans toute l'élection : ${resultat}.`);
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
    console.log("- Voici le Top 3 candidats. ");
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

        if (partisPolitique[parti] === undefined) {
            partisPolitique[parti] = 1;
        } else {
            partisPolitique[parti]++;
        }
    }

    console.log();
    console.log("- - Voici le nombre de candidtas par parti politique.");
    console.log();

    for (let parti in partisPolitique) {
        console.log(`${parti} : ${partisPolitique[parti]} candidat(s)`);
    }

    console.log();

}