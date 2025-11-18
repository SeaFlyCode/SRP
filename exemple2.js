const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function toutFaireEnMemeTemps() {
  console.log('Bienvenue dans notre Exemple 1 des notion SRP !');
  let choixUser = '';
  const choix = ['Pc', 'Téléphone', 'Ecran', 'Tablette'];

  console.log('Voila vos 4 choix :');
  choix.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });

  readline.question('Faites votre choix en précisant le numéro de votre choix : ', (userInput) => {
    if (/^\d$/.test(userInput) && userInput >= 1 && userInput <= 4) {
      choixUser = userInput;
      const dataToSave = {
        choix: choix[parseInt(choixUser, 10) - 1],
        timestamp: new Date().toISOString()
      };
      const jsonData = JSON.stringify(dataToSave, null, 2);
      fs.writeFileSync('stockage.json', jsonData, 'utf8');
      const savedJsonData = fs.readFileSync('stockage.json', 'utf8');
      const savedData = JSON.parse(savedJsonData);
      console.log('Données sauvegardées :');
      console.log(`Choix : ${savedData.choix}`);
      console.log(`Timestamp : ${savedData.timestamp}`);
    } else {
      console.log('Format de la réponse invalide. Veuillez entrer un numéro entre 1 et 4.');
    }
    readline.close();
  });
}

toutFaireEnMemeTemps();
