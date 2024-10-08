# Church Services App

This project is a web application for managing church services. It allows users to create, view, edit, and delete church services. The frontend is built with Angular and Nebular, while the backend is powered by Grails.

## Please note that I am still in development and quite a few of the methods is not working presently

## Features

- Create new church services
- View a list of all church services
- Edit existing church services
- Delete church services
- Responsive design

## Technologies Used

### Frontend

- Angular
- Nebular
- TypeScript
- HTML
- CSS

### Backend

- Grails
- Groovy
- Spring Boot

## Prerequisites

- Node.js and npm
- Angular CLI
- Java Development Kit (JDK)
- Grails

## Installation

### Docker

1. Run Docker compose:
docker-compose up --build

These commands will build the Docker image for your application and run it, exposing the frontend on port 4200 and the backend on port 8080.

Alternative:

1. Build the Docker image:
docker build -t church-services-app .

2. Run the Docker container:
docker run -p 4200:4200 -p 8080:8080 church-services-app

### Frontend

1. Clone the repository:
git clone https://github.com/Morne-Coetzee/Church-Services-App.git
cd church-services-app

2. Navigate to the frontend directory:
cd church-services-app

3. Install the dependencies:
npm install

### Backend

1. Navigate to the backend directory:
cd church-services-backend

2. Install the dependencies:
grails compile

## Running the Application

### Frontend

1. Start the Angular development server:
ng serve

2. Open your browser and navigate to http://localhost:4200/.

### Backend

1. Start the Grails application:
grails run-app

2. The backend server will be running at http://localhost:8080/.

## Project Structure

### Frontend

church-services-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── church-service-create/
│   │   │   ├── church-service-detail/
│   │   │   ├── church-service-form/
│   │   │   ├── church-service-list/
│   │   ├── services/
│   │   ├── models/
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── README.md

### Backend

church-services-backend/
├── grails-app/
│   ├── assets/
│   │   ├── javascripts/
│   │   ├── stylesheets/
│   ├── controllers/
│   ├── domain/
│   ├── services/
│   ├── views/
├── src/
│   ├── main/
│   │   ├── groovy/
│   │   ├── resources/
├── build.gradle
├── grails-app.conf
├── README.md

### License

This project is licensed under the MIT License - see the LICENSE file for details. ```
