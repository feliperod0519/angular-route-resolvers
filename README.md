# AngularRouteResolvers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

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




One way for handling retrieving and displaying data from an API is to route a user to a component, and then in that component’s ngOnInit hook call a method in a service to get the necessary data. While getting the data, perhaps the component can show a loading indicator.

There is another way to use what is known as a route resolver, which allows you to get data before navigating to the new route.

Steps:
1. npx @angular/cli new angular-route-resolvers-example --style=css --routing --skip-tests

2. ng generate resolver news

3. ng generate component home

4. ng generate component top


