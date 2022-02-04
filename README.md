# References

ng.cmd new project --skip-tests

## Angular material
https://youtu.be/jUfEn032IL8
```
ng.cmd add @angular/material
ng.cmd generate module material
```

## Material drawer
https://stackblitz.com/edit/angular-material-drawer?file=app%2Fsidenav-autosize-example.html


## Navigation
https://angular.io/tutorial/toh-pt1
```
ng generate component dashboard
```

## Bootstrap
https://www.techiediaries.com/angular-bootstrap/
```
npm install bootstrap
npm install jquery

angular.json
"styles": [
    "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```