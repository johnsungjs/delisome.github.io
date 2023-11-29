INI ADALAH GITHUB PAGES UNTUK DELISOME WEB

Tutorial upload ke github untuk free hosting
Install the gh-pages npm package
$ npm install gh-pages --save-dev

Add a homepage property to the package.json file
    "homepage": "http://johnsungjs.github.io/delisome.github.io",

Add deployment scripts to the package.json file
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

Add a "remote" that points to the GitHub repository
$ git remote add origin https://github.com/{username}/{repo-name}.git

Push the React app to the GitHub repository
$ npm run deploy
for custom message:
$ npm run deploy -- -m "Deploy React app to GitHub Pages"