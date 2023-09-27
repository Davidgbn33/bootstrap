## Custum bootstrap

## install

// utiliser un terminal bash //

### install des premières dépendences

git init
npm init
npm install bootstrap

### création HTML et CSS

- création d'une page HTML "touch index.html dans un dossier src
- création d'un dossier "css"
- création d'un fichier "style.css"
- ajout d'une balise <link> pour importer le style dans le fichier index.html et mettrre <type="text\css">

### installation des dépendances

```

npm install --global gulp-cli ( comme webpack )
npm i browser-sync gulp gulp-sass --save-dev
npm i --save-dev gulp-babel gulp-uglify gulp-rename

```

### fichier gulpfile

- création d'un fichier gulpfile.js
- récupérer le code sur le site gulpjs.com

- création de function dans le fichier gulpjs.com :

```
const { series } = require('gulp');
function clean(cb) {
  return src('src/js/*.js').pipe(dest('public/js/'));
}
function build(cb) {
 // place code for your default task here
 cb();
}
exports.build = build;
exports.default = series(clean, build);

```

### création de la strcuture

- création d'un dossier "src" à la racine
- création de deux dossier dans src : scss et js
- création d'un fichier main.js dans le dossier js
- création d'un fichier styles.scss dans le dossier scss
