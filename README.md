# OneBitFormsClient

Google Forms clone build in Angular + Rails

Angular API Client for OneBitForms (Api for Google Forms Clone)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

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

* [Ruby on Rails](https://rubyonrails.org/) - The web framework used
* [Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth) - Authentication Token
* [Rack Cors](https://github.com/cyu/rack-cors) - Cross-Origin Resource Sharing (CORS) for Rack compatible web applications.
* [Rack Attack](https://github.com/mperham/sidekiq) - Rack middleware for blocking & throttling abusive requests
* [Friendly Id](https://github.com/moove-it/sidekiq-scheduler) - "Swiss Army bulldozer" of slugging and permalink plugins for Active Record
* [OmniAuth](https://github.com/omniauth/omniauth) - Standardizes multi-provider authentication for web applications
* [PostgreSQL](https://www.postgresql.org/) - SGDB
* [Rspec Rails](https://github.com/rspec/rspec-rails) - RSpec testing framework to Ruby on Rails as a drop-in alternative to its default testing framework, Minitest.
* [Factory Bot Rails](https://github.com/thoughtbot/factory_bot_rails) - Fixtures replacement with a straightforward definition syntax
* [FFaker](https://github.com/ffaker/ffaker) - Easily generate fake data 

## Authors

* **André Gonçalves Rodrigues** - [andregr15](https://github.com/andregr15)

## License

This project is licensed under the MIT License
