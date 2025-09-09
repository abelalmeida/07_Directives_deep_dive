# DirectivesDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## This a project to learn and work with Directives

## What are directives?
- built-in classes that have give behavior to elements in Angular  application
- - Example: 
```<input name="title" ngModel/>```
## What do directives have?
- Directives have no tmeplate!

## what is an attribute directive?
- - ngModel - is an example it is added as an attribute 

- - safe-link.directive.ts
  - - - This code snippet is part of an Angular directive’s metadata, specifically within the @Directive decorator. The host property allows you to bind events or attributes directly to the   host element—the element to which the directive is applied.

 - - - Here, the '(click)' key sets up an event listener for the click event on the host element. When the element is clicked, Angular will call the directive’s onClick method, passing the    event object ($event) as an argument. This pattern is useful for encapsulating behavior: you can intercept clicks on any element using your directive, without needing to modify the element’s template directly.

## Built-in Structual Directive
- - Example <p *ngIf="isAdmin()"> only admins should see this ! </p> 


## build a custom directive
- - allow you to build enhancements like appSafeLink

## build Structural directives
- - auth.directive.ts 
- - Are used with a ng-template ex: <p *ngIf="isAdmin()" (older style)  
    newer style <p *appAuth>
- - html <p *appAuth
