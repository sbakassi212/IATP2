const inputA = document.createElement('input');
const inputB = document.createElement('input');
const boutonSomme = document.createElement('button');
boutonSomme.textContent = 'Calculer la somme';

document.body.appendChild(inputA);
document.body.appendChild(inputB);
document.body.appendChild(boutonSomme);

boutonSomme.onclick = () => {
    const valeurA = parseInt(inputA.value);
    const valeurB = parseInt(inputB.value);
    
    if (isNaN(valeurA) || isNaN(valeurB)) {
        console.log("Erreur : Veuillez entrer des nombres valides.");
        return;
    }

    const somme = valeurA + valeurB;
    console.log(`La somme est : ${somme}`);
};