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
    { cin: "FF901234", nom: "Tazi", prenom: "Leila", partiPolitique: "Parti C", age: 41, electeurs: [] },
    { cin: "GG012345", nom: "Zerouali", prenom: "Hamza", partiPolitique: "Parti D", age: 35, electeurs: [] },
];

// Contro Menu
function controlMenu() {
    let choix;
    while (choix !== 0) {
        choix = afficheMenu();
        switch (choix) {
            case 1:
                ajouterCandidat();
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
// Affiche menu
function afficheMenu() {
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

function linearSearch(cin) {
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].cin === cin) {
            return candidates[i];
        }
    }
    return (-1);
}

// Ajouter un candidat
function ajouterCandidat() {
    console.log();
    const cin = prompt("Entrer la CIN : ");

    const candidatDejaExist = linearSearch(cin);

    if (candidatDejaExist !== -1) {
        console.log();
        console.log("Erreur: Candidat déja existe.")
        console.log();
        return;
    }

    const nom = prompt("Entrer le nom : ");
    const prenom = prompt("Entrer le prénom : ");
    const partipolitique = prompt("Entrer le parti politique : ");
    const age = Number(prompt("Entrer L'âge' : "));
    if (age < 18) {
        console.log();
        console.log("Erreur: Age invalide .");
        console.log();
        return;
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
    console.log("Candidat ajouté avec succès.");
    console.log();
}