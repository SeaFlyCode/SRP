const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bienvenue dans notre Exemple 1 des notion SRP !');

let choixUser = '';
const choix = ['Pc', 'Téléphone', 'Ecran', 'Tablette'];
console.log('Voila vos 4 choix :');

choix.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

readline.question('Faites votre choix en précisant le numéro de votre choix : ', (userInput) => {
  if (verifyInputUser(userInput)) {
    choixUser = userInput;
    const dataToSave = {
      choix: choix[parseInt(choixUser, 10) - 1],
      timestamp: new Date().toISOString()
    };
    saveToJson(dataToSave);
    const savedData = readFromJson();
    display(savedData);
  } else {
    console.log('Format de la réponse invalide. Veuillez entrer un numéro entre 1 et 4.');
  }
  readline.close();
});

if(choixUser) {
    const dataToSave = {
        choix: choix[parseInt(choixUser, 10) - 1],
        timestamp: new Date().toISOString()
    };
    saveToJson(dataToSave);
    const savedData = readFromJson();
    display(savedData);
}

function saveToJson(data) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('stockage.json', jsonData, 'utf8');
}

function readFromJson() {
    const jsonData = fs.readFileSync('stockage.json', 'utf8');
    return JSON.parse(jsonData);
}

function display(data) {
    console.log('Données sauvegardées :');
    console.log(`Choix : ${data.choix}`);
    console.log(`Timestamp : ${data.timestamp}`);
}

function verifyInputUser(input) {
    return /^\d$/.test(input) && input >= 1 && input <= 4;
}