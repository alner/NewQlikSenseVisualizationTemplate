# Qlik Sense visualization template (ES2015 + BABEL + WebPack + GulpJS)

Supports ES2015 (BABEL), bundling multiple modules (WEBPACK), hot rebuilds and browser refresh in response to file modifications.

## Installation

Download and unzip template to appropriate folder.

Make sure you have NodeJS and NPM installed.

Hit

```sh

 npm install

 ```
 to install all required dependencies.

## Configuration

Modify *src/Template.qextmpl*.

Set appropriate Qlik Sense document **url** parameter in the *server.config.json*.
Set appropriate local development server port (**devServerPort** parameter) in the *server.config.json*. Default value is 8080.

## Usage

```sh

npm run dev # for development

# or

npm run build # for production

```

Open **http://localhost:8080** for development.

## Maintainers

[alner](https://github.com/alner)

## License

MIT