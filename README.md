# Filter Record Application

This project created for filter mongodb collection (collection name "records"). Application generated using express framework.

## Application Start

Under project root directory. Follow these steps.

> - npm install
> - npm start

Server will up on 8080 port.

Try to send post request to => http://localhost:8080/records
with payload
> {
  "startDate": "2017-01-28",
  "endDate": "2018-01-29",
  "minCount": 100,
  "maxCount": 160
}

## Available Scripts

In the project directory, you can run:

### `npm start`

Start application on development environment.

### `npm run test`

Runs unit and integration tests.

### `npm run build`

Starts webpack command for create production ready build file.

### `npm run launch`

Start build bundle file on local.

### Docker

To deploy the app in a docker container, you have to follow these steps. (Default exported port is set to 8080 in Dockerfile. )

> - npm run build
> - docker build -t filter-record-app .
> - docker run -p 8080:8080 filter-record-app

