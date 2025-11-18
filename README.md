# SRP - Exemple Node.js

Ce projet propose deux exemples simples pour illustrer le principe de responsabilité unique (SRP) en JavaScript/Node.js.

## Fichiers
- `exemple1.js` :
  - Version "propre" avec des fonctions séparées pour chaque responsabilité (sauvegarde, lecture, affichage, validation).
  - Utilisation de readline pour demander un choix à l'utilisateur et sauvegarder le résultat dans `stockage.json`.

- `exemple2.js` :
  - Version "tout-en-un" où toutes les opérations sont regroupées dans une seule fonction.
  - Même logique métier, mais moins découpée.

- `stockage.json` :
  - Fichier généré automatiquement pour stocker le choix et la date.

## Lancer un exemple
Dans le terminal, exécutez :

```bash
node exemple1.js
```
ou
```bash
node exemple2.js
```

## Fonctionnement
- L'utilisateur choisit un numéro (1 à 4) correspondant à un objet.
- Le choix et la date sont sauvegardés dans `stockage.json`.
- Le choix sauvegardé est affiché dans la console.

---

*Projet pédagogique SRP - 2025*