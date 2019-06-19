# OneBitFormsClient

Google Forms clone build in Angular + Rails

Angular Client for OneBitForms (Api for Google Forms Clone)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### With Docker

#### Prerequisites

You must have docker and docker-compose installed

```
For more information, please see https://docs.docker.com/install/ 
```

#### Installing

Access the project folder in your terminal enter the following

```
$ docker-compose build
```

```
$ docker-compose run --rm app npm install
```

After that for test the installation enter the following to up the server

```
$ docker-compose up
```

Open your browser and access localhost:4200 to see the home page


### Without Docker

#### Prerequisites

You must have node and npm installed

```
For more information, please see https://nodejs.org/en/download/package-manager/
```

#### Installing

Access the project folder in your terminal enter the following

```
$ npm install
```

```
$ npm start
```

Open your browser and access localhost:4200 to see the home page


## Built With

* [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5 - The web framework used
* [Angular Token](https://github.com/neroniaky/angular-token) - Token based authentication service for Angular with interceptor and multi-user support
* [ChartJS](https://github.com/chartjs/Chart.js) - Simple HTML5 Charts using the <canvas> tag
* [jQuery](https://github.com/jquery/jquery) - jQuery JavaScript Library
* [ng2-dragula](https://github.com/valor-software/ng2-dragula) - Simple drag and drop with dragula
* [ngx-materialize](https://github.com/sherweb/ngx-materialize) - Angular wrap around Materialize library
* [ngx-color-picker](https://github.com/zefoy/ngx-color-picker) - Color picker widget for the Angular (version 2 and newer)
* [ngx-pagination](https://github.com/michaelbromley/ngx-pagination) - Pagination for Angular
* [rxjs](https://github.com/ReactiveX/rxjs) - A reactive programming library for JavaScript

## Authors

* **André Gonçalves Rodrigues** - [andregr15](https://github.com/andregr15)

## License

This project is licensed under the MIT License
