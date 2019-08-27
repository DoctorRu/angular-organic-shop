# Shopping Orgânico
#### Loja virtual / Carrinho de compras | Angular 8 e Firebase
##### Live preview:  https://oshop2-ecf56.firebaseapp.com/

### Notas
Criar arquivo com respectivas configurações do firebase
$ secrets.ts

    export const secret = {
      firebase: {
       apiKey: "",
       authDomain: "",
       databaseURL: "",
       projectId: "",
       storageBucket: "",
       messagingSenderId: "",
       appId: "",
     }
   };

## Bootstrap
Adicionar em styles.css

    @import "~bootstrap/dist/css/bootstrap.css";


## Build / Deploy
$ ng build --prod
$ firebase deploy

The codes sets free. 
- DoctorRU


Projeto idealizado por Mosh Hamedani / Udemy

## Build
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
